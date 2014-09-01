var app = app || {};

app.helpers = (function () {

    //Returns true if the app is online, false otherwise
    var isApplicationOnline = function() {
        var networkState = navigator.network.connection.type;

        var states = {};
        states[Connection.UNKNOWN] = false;
        states[Connection.ETHERNET] = true;
        states[Connection.WIFI] = true;
        states[Connection.CELL_2G] = true;
        states[Connection.CELL_3G] = true;
        states[Connection.CELL_4G] = true;
        states[Connection.CELL] = true;
        states[Connection.NONE] = false;

        if (states[networkState]) {
            return true;
        } else {
            return false;
        }
    };

    //Gets the ID of the current view in Kendo Mobile
    var getCurrentViewId = function () {
        return app.mobile.view().wrapper.attr("id");
    };

   
    return {

        isApplicationOnline: isApplicationOnline,
        getCurrentViewId: getCurrentViewId

    };

}());