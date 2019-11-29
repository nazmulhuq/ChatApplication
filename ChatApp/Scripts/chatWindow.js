(function () {
    var userName = null;

    $.connection.hub.start()
        .done(function () {
            console.log("Connected");
        })
        .fail(function () { alert("Error..."); });

    $("#message").on('keypress', function (keypress) {

        if (keypress.which == 13 && userName != null) {
            var sentMessage = $("#message").val();

            var dt = new Date();
            var time = dt.getHours() + ":" + dt.getMinutes();

            $.connection.chatHub.server.announce(userName + ": " + sentMessage);
            $("#allMessages").append("you: " + sentMessage + "           " + time + "<br />" );
            //$("#allMessages").css('color', 'blue');
            $("#message").val("");
        }
    })
    $("#name").on('keypress', function (e) {

        if (e.which == 13) {
            if ($("#name").val() != "") {
                userName = $("#name").val();
                $("#nameDiv").hide();
            }
        }
    });

    $.connection.chatHub.client.announce = function (message) {
        var dt = new Date();
        var time = dt.getHours() + ":" + dt.getMinutes();

        $("#allMessages").append(message + "           " + time + "<br />");
        //$("#allMessages").css('color', 'black');

    }

})()