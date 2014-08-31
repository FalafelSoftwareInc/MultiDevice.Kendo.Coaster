var app = app || {};

app.dataaccess = (function () {

    var getFriends = function() {

        return [
            {
                Name: "George",
                PictureUrl: "images/avatar.png",
                Status: "I am feeling awesome!",
                DateUpdated: ""
            },
            {
                Name: "Basem",
                PictureUrl: "images/avatar.png",
                Status: "I am feeling awesome!",
                DateUpdated: ""
            },
            {
                Name: "Venkata",
                PictureUrl: "images/avatar.png",
                Status: "I am feeling awesome!",
                DateUpdated: ""
            }
        ];
    };


    return {
        getFriends: getFriends
    };

}());