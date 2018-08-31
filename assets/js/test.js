$.getJSON('https://icanhazdadjoke.com/', function(data){
  
   var x = data.joke

 // Add div to message and add advice to it

    $('<div id="json"></div>').appendTo('#message');
 
 document.getElementById("json").innerHTML += x 
 
 console.log(data)
})