$(document).ready(function() {


    $('.message').hide();

    $('.advice').click(function() {


        $('.message').slideDown(3000);


    })

     
    
    var url="http://api.adviceslip.com/advice"

    $.getJSON(url,null,function(json) {
        
         var x = json.slip.advice 
    
    $('<div id="json"></div>').appendTo('#message')

    document.getElementById("json").innerHTML += x + '<div id ="tear"><span id="rip"><br><br>-----click to tear-----</span></div>';
document.getElementById("freeadvice").innerHTML += x
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

$('#resetform').click(function(){
    
        $("#form")[0].reset()
        location.reload();
    
})



});