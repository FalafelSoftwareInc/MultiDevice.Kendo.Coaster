var app = app || {};

app.dataaccess = (function () {

    var getFriends = function() {

        return [
            {
                Name: "Alain Tadros",
                PictureUrl: "images/avatar.png",
                Status: "I am feeling awesome!",
                DateUpdated: ""
            },
            {
                Name: "Basem Emara",
                PictureUrl: "images/avatar.png",
                Status: "I am feeling awesome!",
                DateUpdated: ""
            },
            {
                Name: "Venkata Koppaka",
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