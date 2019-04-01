(function () {

    $.connection.hub.start()
        .done(function () {
            console.log("Connected");
        })
        .fail(function () { alert("Error..."); });

    $("#click-me").click(function () {
        var sentMessage = $("#message").val();

        $.connection.chatHub.server.announce(sentMessage);
        $("#allMessages").append(sentMessage + "<br />");
        $("#message").val("");
    })

    $.connection.chatHub.client.announce = function (message) {
        $("#allMessages").append(message + "<br />");
    }

})()