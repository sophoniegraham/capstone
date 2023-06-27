function handleFormInfo (form) {
   
    var nameValue =  document.getElementById("name").value;
    var emailValue = document.getElementById("email").value;
    //EMAIL VALIDATION
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue))
    {
        alert ("ThankYou : " + nameValue+ " for joining our team of Talented volunteers\n We will contact you soon at "+ emailValue+" on opportunities that fit you skillset!");

    }else{

        alert("You have entered an invalid email address!")

    }
    
}
