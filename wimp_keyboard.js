// ==UserScript==
// @name        wimp.com keyboard shortcut
// @description Use keyboard shortcuts to navigate websites
// @author      Daniel Low
// @license     GNU General Public License version 3 or later
// @include     http://www.wimp.com/*
// @version     1.0.0
// @require     http://code.jquery.com/jquery-1.10.1.min.js
// ==/UserScript==

/*
 * Keyboard shortcuts that are currently defined are:
 *  <Ctrl>-<Arrow Left>    Next page on website (for example search
 *                         results page on Google). Opera users will
 *                         know this feature as Fast Forward.
 *  <Ctrl>-<Arrow Right>   Previous page on website. Opera users will
 *                         know this feature as Rewind.
 *  <Ctrl>-<Arrow Up>      Focus next article or item on the website
 *                         (similiar like the Tab key does on Google's
 *                         search result page).
 *  <Ctrl>-<Arrow Down>    Focus previous article or item on the website.
 *  <Ctrl>-<Enter>         Follow the link of the currently selected
 *                         article or item.
 *  <Ctrl>-<Slash>         Focus search box (and select any text already
 *                         in there).
 *
 */

this.$ = this.jQuery = jQuery.noConflict(true);
(function($) {

    // Here are the keycodes mapped to functions. If you want to
    // disable some keybindings you can comment them here. If you want
    // to change the hotkey (default Ctrl), you can do so in the
    // onKeyPress function.
    var keybindings = {
        13: onFollowItemLink, // enter
        37: onPrevious, // arrow left
        38: onPreviousItem, // arrow up
        39: onNext, // arrow right
        40: onNextItem, // arrow down
        191: onSearch // slash
    };
    var previousLinkSelectors = [
        'a[rel*="prev"]',
        'link[rel*="prev"]'
    ];
    var nextLinkSelectors = [
        'a[rel*="next"]',
        'link[rel*="next"]'
    ];
    var itemIndex = -1;
    var itemList = $();
    var itemSelectorFound = null;
    var domObserver = new MutationObserver(onDomMutated);

    function onKeyPress(e) {
        var keyCode = e.keyCode || e.which;
        if (e.ctrlKey && keyCode in keybindings) {
            e.preventDefault();
            keybindings[keyCode]();
        }
    }

    function activateLink(link) {
        if (link.length == 0) return;
        url = link.attr('href');
        if (!url) return;
        if (url.indexOf('javascript:') == 0) {
            node.click();
        } else {
            document.location = url;
        }
    }

    function onLoad() {
        // observe any mutations in DOM
        domObserver.observe(document, {
            childList: true,
            attributes: false,
            characterData: false,
            subtree: true
        });
    }

    function onPrevious() {
        var link = document.getElementsByTagName("table")[8].getElementsByTagName("td")[1].getElementsByTagName("a")[0];
        activateLink(link);
    }

    function onNext() {
        findAndActivateLink(
            nextLinkSelectors, symbolsNext, keywordsNext);
    }



    $(document).ready(onLoad);
    $(window).bind('keydown.greasemonkeyboard', onKeyPress);

})(this.jQuery);