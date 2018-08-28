$(document).ready(function() {

    // hide message and then show on click

    $('.message').hide();

    $('.advice').click(function() {


    $('.message').slideDown(3000);


    })

 // Get advice slip from api   

    var url = "http://api.adviceslip.com/advice"

    $.getJSON(url, null, function(json) {

    var x = json.slip.advice

 // Add div to message and add advice to it

    $('<div id="json"></div>').appendTo('#message');

       
    document.getElementById("json").innerHTML += x + '<div id ="tear"><span id="rip"><br><br>-----click to tear-----</span></div>';
 // add advice to e mail form   
    document.getElementById("freeadvice").innerHTML += x
    })

// when message clicked explodes and hides message then refreshs page

    $('#message').click(function() {


    $("#message").toggle("explode");


        location.reload();


    });
    
// adds tooltips to buttons

    $('.action-button').tooltip({

        classes: {
            "ui-tooltip": "highlight"
        }
    });
// resets the form on close of modal

    $('#resetform').click(function() {

        $("#form")[0].reset();
        location.reload();

    });



});
