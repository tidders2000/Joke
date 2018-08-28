function sendMail(contactform) {



    emailjs.send("gmail", "advice", {
            "from_name": contactform.name.value,
            "send_email": contactform.emailaddress.value,
            "to_name": contactform.toname.value,
              "free_advice": contactform.freeadvice.value
        })

        .then(
            function(response) {
               alert(" Mail Sent", response);
              
            },
            function(error) {
                alert("Failed to Send", error);
            }
        );
    
 
 
    return false; // To block from loading a new page
    

    
}

