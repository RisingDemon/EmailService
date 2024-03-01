
let btn = document.getElementById('btn');
btn.addEventListener('click',()=>{
    let userEmail= document.getElementById('ipEmail');
    console.log(userEmail.value);
    let bareEmail = userEmail.value;
    console.log("You have clicked the button");
    sendEmail();
})

async function sendEmail(){
    let userEmail= document.getElementById('ipEmail');
    console.log(userEmail.value);
    let bareEmail = userEmail.value;
    console.log("You have clicked the button");
    let response = await fetch('/api/sendEmail',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({email:bareEmail})
    });
    let data = await response.json();
    console.log(data);
    if(data.message === "Email sent"){
        alert("Email sent successfully");
    }
    else{
        alert("Email not sent");
    }
}