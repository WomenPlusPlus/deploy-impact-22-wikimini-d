<?php

use MediaWiki\MediaWikiServices;

class SkinPerPage {
	/**
	 * Register our extension tag and parser function
	 *
	 * @param Parser $parser
	 * @return bool
	 */
	public static function onParserFirstCallInit( Parser $parser ) {
		# Old one for backwards compatibility
		$parser->setHook( 'skin', [ __CLASS__, 'parserHook' ] );
		# Function-style one that users should actually use
		$parser->setFunctionHook( 'useskin', [ __CLASS__, 'useskinHook' ] );
		return true;
	}

	/**
	 * Handler for <skin>foo</skin>
	 * @param string $text
	 * @param array $attribs
	 * @param Parser $parser
	 * @return string
	 */
	public static function parserHook( $text, $attribs, Parser $parser ) {
		$parser->getOutput()->setExtensionData( 'spp_skin', $text );
		return '';
	}

	/**
	 * Reads the skin key from ParserOutput and sets it as the skin to use for display
	 *
	 * @param OutputPage $out
	 * @param ParserOutput $parserOutput
	 * @return bool
	 */
	public static function onOutputPageParserOutput( OutputPage $out, ParserOutput $parserOutput ) {
		$key = $parserOutput->getExtensionData( 'spp_skin' );
		if ( $key !== null ) {
			$key = Skin::normalizeKey( strtolower( trim( $key ) ) );
			$skinFactory = MediaWikiServices::getInstance()->getSkinFactory();

			$allowedSkins = $skinFactory->getAllowedSkins();
			if ( !array_key_exists( $key, $allowedSkins ) ) {
				$out->addHTML(
					Html::element(
						'span',
						[ 'class' => 'error' ],
						$out->msg( 'skinperpage-noskin' )
							->rawParams( htmlspecialchars( $key, ENT_QUOTES ) )
							->text()
					)
				);
			}

			$skin = $skinFactory->makeSkin( $key );
			RequestContext::getMain()->setSkin( $skin );
		}
		return true;
	}

	/**
	 * Handler for {{#useskin:foo}}
	 *
	 * @param Parser $parser
	 * @param string $skin
	 */
	public static function useskinHook( Parser $parser, $skin = '' ) {
		self::parserHook( $skin, [], $parser );
	}
}
