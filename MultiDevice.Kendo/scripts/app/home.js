var app = app || {};

app.views.Home = (function () {

    var viewModel = kendo.observable({ friends: app.dataaccess.getFriends() });

    var onShow = function (e) {
        

    };

    return {
        viewModel: viewModel,
        onShow: onShow
    };

}());