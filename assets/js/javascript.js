$(document).ready(function() {

    // hide message and then show on click

    $('.message').hide();

    $('.advice').click(function() {


    $('.message').slideDown(3000);


    })

 // Get random joke from api   

    var url = "https://icanhazdadjoke.com/"

    $.getJSON(url, null, function(data) {

    var x = data.joke

 // Add div to message and add joke to it

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
