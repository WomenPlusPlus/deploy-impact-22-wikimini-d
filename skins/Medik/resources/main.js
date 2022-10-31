/* Medik | CC0 license | https://bitbucket.org/wikiskripta/medik */
$( function () {

	/*
	 * Site navigation
	 * adds proper Bootstrap CSS class to links added via mw.util.addPortletLink()
	 */
	function medikNavigation() {
		$( '#p-personal li a:not(.dropdown-item), aside li a:not(.dropdown-item)' )
			.addClass( 'dropdown-item' );
		$( '#mw-navigation li a:not(.nav-link)' )
			.addClass( 'nav-link' );
	}

	/*
	 * Hide aside menu with no dropdown items
	 */
	function hideAsideDropdown() {
		$( 'aside .dropdown' ).has( 'div:empty' ).hide();
	}

	/*
	 * Remove echo notifications popup on smaller screens
	 */
	function medikRemoveEchoPopup() {
		if ( $( window ).width() <= 650 ) {
			$( 'a.mw-echo-notifications-badge' ).off( 'click' );
		}
	}

	/*
	 * Hamburger menu
	 * opens navigation sidebar and login/user menu
	 */
	function medikTogglehamb() {
		$( '#mw-navigation nav' ).toggle( 'fast' );
	}

	/*
	 * Start functions from the wrapper
	 */

	// immediately
	medikNavigation();
	medikRemoveEchoPopup();
	hideAsideDropdown();
	$( '.mw-hamb' ).on( 'click', medikTogglehamb );

	// repeat every 1 s for 10 s after DOM content loaded
	window.medikVarI = 0;
	window.medikTimer = window.setInterval( function () {
		medikNavigation();
		medikRemoveEchoPopup();
		window.medikVarI++;
		if ( window.medikVarI === 10 ) {
			window.clearInterval( window.medikTimer );
		}
	}, 1000 );

} );
