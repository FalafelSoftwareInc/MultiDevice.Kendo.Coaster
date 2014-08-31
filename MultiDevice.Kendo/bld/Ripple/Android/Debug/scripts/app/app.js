
var app = app || {};

app.startup = (function (win) {
    "use strict";

    win.addEventListener('error', function (e) {

        e.preventDefault();

    });

    var init = function() {
        initMobile();
    };

    var initMobile = function () {

        //Array to hold all the views
        app.views = [];

        //Run app and store in global
        var startApp = function () {
            
            //Set the options for the mobile app startup
            var options = {
                initial: 'views/home.html',
                skin: 'flat'
            };

            //Fix for ios7 status bar for apps
            if (kendo.support.mobileOS.ios && kendo.support.mobileOS.flatVersion >= 700)
                options.statusBarStyle = 'black-translucent';

            //Fix for removing initial hash since kendo crashes
            history.pushState('', document.title, window.location.pathname);

            //Start kendo mobile and cache for later use
            app.mobile = new kendo.mobile.Application(document.body, options);
        };

        //Attach to device put to background event
        document.addEventListener("pause", onPause, false);

        //Attach to device resume event
        document.addEventListener("resume", onResume, false);

        //Attach to device on Online event
        document.addEventListener("online", onOnline, false);

        //Attach to device on Offline event
        document.addEventListener("offline", onOffline, false);

        //Attach to device on Back Button event
        document.addEventListener("backbutton", onBackButton, false);

        //Initialize mobile app based on the environment
        if (kendo.mobileOS) {
            //Attach to device ready event
            document.addEventListener('deviceready', startApp, false);

            //Hide the native splash screen
            navigator.splashscreen.hide();

        } else {
            //Start immediately for web browsers
            startApp();
        }

    };

    var onPause = function() {
        // TODO: This application has been suspended. Save application state here.
    };

    var onResume = function() {
        // TODO: This application has been reactivated. Restore application state here.
    };

    var onOnline = function() {

    };

    var onOffline = function() {

    };

    var onBackButton = function() {

    };

    //Initialize the application
    init();

}(window));