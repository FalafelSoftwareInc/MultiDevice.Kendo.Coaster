var app = app || {};

app.logger = (function () {

    var initLogger = function () {

        var ajaxAppender = JL.createAjaxAppender('ajaxAppender');
        var consoleAppender = JL.createConsoleAppender('consoleAppender');

        var currentAppenders = [];

        if (app.settings.logToConsole) {
            currentAppenders.push(consoleAppender);
        }

        if (app.settings.defaultLogAjaxUrl != "") {
            JL().setOptions({ "defaultAjaxUrl": app.settings.defaultLogAjaxUrl });
            currentAppenders.push(ajaxAppender);
        }

        JL().setOptions({ "appenders": currentAppenders });

    };

    var log = function(severity, message) {
        JL().log(severity, message);
    };

    //Creates a log message with severity DEBUG.
    var debug = function(message) {
        JL().debug(message);
    };

    //Creates a log message with severity FATAL.
    var fatal = function(message) {
        JL().fatal(message);
    };

    //Creates a log message with severity ERROR.
    var error = function(message) {
        JL().error(message);
    };

    //Creates a log message with severity INFO.
    var info = function(message) {
        JL().info(message);
    };

    //Creates a log message with severity TRACE.
    var trace = function(message) {
        JL().trace(message);
    };

    //Creates a log message with severity WARN.
    var warn = function(message) {
        JL().warn(message);
    };

    return {
        initLogger: initLogger,
        log: log,
        debug: debug,
        fatal: fatal,
        error: error,
        info: info,
        trace: trace,
        warn: warn
    };

}());