const baseUrl = "http://api.adviceslip.com/advice";

function getData(type, cb){


var xhr = new XMLHttpRequest();



xhr.open("GET", baseUrl + type);

xhr.send()

function setData(jsonData) {
    data = jsonData;
    console.log(data)
}

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     
    cb(JSON.parse(this.responseText));
  
      }
    };
};

function writeToDocument(slip){
    getData(type, function(){
        
    document.getElementById("message").innerHTML = data;
    })
}
