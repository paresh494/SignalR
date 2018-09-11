$.connection.hub.start()
    .done(function () {
        console.log("Haha")
        $.connection.myHub.server.announce("lol");
    })
    .fail(function () { alert("Error!"); });

$.connection.myHub.client.Bannounce = function (message) {
    $("#Welcome-Message").append("Hello" + "<br/>")
}