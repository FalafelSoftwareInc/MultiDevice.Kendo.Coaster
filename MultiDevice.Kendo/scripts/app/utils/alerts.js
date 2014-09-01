var app = app || {};

app.alerts = (function () {
    
    //The default options to use for Toastr
    var toastrDefaults = {
        "closeButton": false,
        "debug": false,
        "positionClass": "toast-bottom-full-width",
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };

    //Shows the loading panel on the screen
    var initLoading = function() {
        app.mobile.showLoading();
    };

    //Hides the loading panel from the screen
    var exitLoading = function() {
        app.mobile.hideLoading();
    };

    //Initializes Toastr with the default options
    var initToastr = function () {
        toastr.options = toastrDefaults;
    };

    //Displays a success message
    var success = function(message, title) {
        toastr.clear();
        toastr.success(message, title);
    };

    //Displays an info message
    var info = function(message, title) {
        toastr.clear();
        toastr.info(message, title);
    };

    //Displays a warning message
    var warning = function(message, title) {
        toastr.clear();
        toastr.warning(message, title);
    };

    //Displays an error message
    var error = function(message, title) {
        toastr.clear();
        toastr.error(message, title);
    };

    //Displays a clear message
    var clear = function() {
        toastr.clear();
    };


    return {
        initLoading: initLoading,
        exitLoading: exitLoading,
        initToastr: initToastr,
        success: success,
        info: info,
        warning: warning,
        error: error,
        clear: clear
    };

}());