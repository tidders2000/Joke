$(document).ready(function() {


    $('.message').hide();

    $('.advice').click(function() {


        $('.message').slideDown(3000);


    })

    $.getJSON("http://api.adviceslip.com/advice", function(json) {

        var x = json.slip.advice

        $('<div id="json"></div>').appendTo('#message')

        document.getElementById("json").innerHTML += x + '<div id ="tear"><span id="rip"><br><br>-----click to tear-----</span></div>';

    })

    $('#message').click(function() {


        $("#message").toggle("explode");


        location.reload();


    });

    $('.action-button').tooltip({

        classes: {
            "ui-tooltip": "highlight"
        }
    });

   

});
