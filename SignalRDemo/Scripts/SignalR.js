(function () {
    var myHub = $.connection.myHub
    $.connection.hub.start()
        .done(function () {
            console.log("Haha")
            myHub.server.announce("lol");
        })
        .fail(function () { alert("Error!"); });

    myHub.client.Bannounce = function (message) {
        writeToPage(message);
    }
    var writeToPage = function (message) {

        $("#Welcome-Message").append(message + "<br/>")
    }
})()
