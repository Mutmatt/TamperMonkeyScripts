// ==UserScript==
// @name         Checkmarx Grid size fix
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  Adding height adjustments to the checkmarx homepage. Should do it by default but can make it happen with a trigger by hitting the '>' key
// @author       You
// @includes     https://ckmrxgreen.hallmark.com/CxWebClient/ProjectState.aspx
// @grant        none
// @updateURL    https://raw.githubusercontent.com/Mutmatt/TamperMonkeyScripts/master/CheckmarxHomepageHeight.js
// ==/UserScript==

(function() {
    'use strict';
    $(document).on('change', '#ctl00_cpmain_ProjectStateGrid_ctl00_ctl03_ctl01_PageSizeComboBox_Input', function() {
        console.log("input changed");
        setHeight();
    });

    $(document).on('keypress', function(e) {
        if (e.which === 62) {
            setHeight();
            console.log('key combo pressed ctrl + [' + e.which + ']');
        }
    });

    function setHeight() {
        var ret;
        ret = $("#ctl00_cpmain_ProjectStateGrid_GridData").css('height', '100%');
        console.log('setting height 1 ret [' + ret + ']');
        setInterval(function () {
            ret = $("#ctl00_cpmain_ProjectStateGrid_GridData").css('height', '100%');
            console.log('setting height 2 ret [' + ret + ']');
        }, 2000);
    }
    setHeight();
})();
