
function sendEmail() {
    
    emailjs.init("Gx47d4souXrySwSTA");
    
    var email = document.getElementById("newsletter1").value;

    let templateParams = {
        to_email: email
    };


    emailjs.send("service_amlkfqp", "template_nzum0bk", templateParams)
        .then(function() {
            alert('Email sent successfully to '+email);
        }, function() {
            alert('Failed to send email to '+email);
        });
     }

function bt1(){
    
    const button = document.getElementById('supernova');
    if (button.innerHTML === "Rent:1000$/mo") {
        alert("Supernova booked");
        button.innerHTML = "Booked";
    } else {
        button.innerHTML = "Rent:1000$/mo";
        alert("Supernova Cancelled");
    }
}

function bt3(){
    
    const button = document.getElementById('base');
    if (button.innerHTML === "Rent: 500$/week") {
        alert("Supernova booked");
        button.innerHTML = "Booked";
    } else {
        button.innerHTML = "Rent: 500$/week";
        alert("Supernova Cancelled");
    }
}

function bt2(){
    
    const button = document.getElementById('house');
    if (button.innerHTML === "Rent: 2000$/mo") {
        alert("Central Park West booked");
        button.innerHTML = "Booked";
    } else {
        button.innerHTML = "Rent: 2000$/mo";
        alert("Central Park West Cancelled");
    }
}

function down(buttonID){
    if (buttonID=='apple'){
        window.open('https://www.apple.com/in/app-store/', '_blank'); 
        
    }
     else if(buttonID=='android'){
        window.open('https://play.google.com/store/games?hl=en','_blank'); 
       
     }
     else if(buttonID=='search'){
        var pin=document.getElementById('location').value;
        alert("Our Services in availabe at your location:"+pin);
     }

}


function rentals(buyID){
    if(buyID=='buy1'){
        const button = document.getElementById('buy1');
        if (button.innerHTML === "5000$/mo") {
            alert("House is yours");
            button.innerHTML = "Booked";
        } else {
            button.innerHTML = "Rent:1000$/mo";
            alert("House is not yours😒");
        }

    }
    else if(buyID=='buy2'){
        const button = document.getElementById('buy2');
        if (button.innerHTML === "5000$/mo") {
            alert("RV is yours");
            button.innerHTML = "Booked";
        } else {
            button.innerHTML = "Rent:1000$/mo";
            alert("RV is not yours😒");
        }

    }
}