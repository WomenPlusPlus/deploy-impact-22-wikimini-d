<?php
/**
 * SkinTemplate class for the Medik skin
 * https://bitbucket.org/wikiskripta/medik
 *
 * @ingroup Skins
 * @author Petr Kajzar
 * @copyright 1st Faculty of Medicine, Charles University, Czech Republic
 * @license https://creativecommons.org/publicdomain/zero/1.0/ CC0-1.0
 */
class SkinMedik extends SkinTemplate {
	/** @var string lowercase skin name */
	public $skinname = 'medik';
	/** @var string full skin name */
	public $stylename = 'Medik';
	/** @var string skin template */
	public $template = 'MedikTemplate';

	/**
	 * Add CSS via ResourceLoader
	 *
	 * @param OutputPage $out OutputPage
	 */
	public function initPage( OutputPage $out ) {
		$out->addMeta( 'theme-color', RequestContext::getMain()->getConfig()->get( 'MedikColor' ) );
		if ( RequestContext::getMain()->getConfig()->get( 'MedikResponsive' ) ) {
			$out->addMeta( 'viewport', 'width=device-width, initial-scale=1' );
			$out->addModuleStyles( [ 'skins.medik.responsive' ] );
		} else {
			$out->addModuleStyles( [ 'skins.medik.unresponsive' ] );
		}

		$out->addModuleStyles( [
			'mediawiki.skinning.interface',
			'mediawiki.skinning.content.externallinks',
			'skins.medik'
		] );

		$out->addModules( [ 'skins.medik.js' ] );
	}

	/**
	 * Add user preferences
	 *
	 * @param User $user
	 * @param array &$preferences
	 */
	public static function onGetPreferences( User $user, array &$preferences ) {
		if ( $user->getOption( 'skin' ) === 'medik' ) {
			$preferences[ 'medik-font' ] = [
				'type' => 'select',
				'label-message' => 'medik-font-label',
				'section' => 'rendering/skin',
				'options' => [
					'80%' => '0.8em',
					'85%' => '0.85em',
					'90% (' . wfMessage( 'medik-default' )->text() . ')' => '0.9em',
					'95%' => '0.95em',
					'100%' => '1.0em',
					'105%' => '1.05em',
					'110%' => '1.1em'
				],
				'default' => '0.9em'
			];
		}
	}
}
