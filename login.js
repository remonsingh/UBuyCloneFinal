function signin(e) {

    e.preventDefault();
    let myForm= document.getElementById("myForm");
    // console.log("myForm:",myForm)
    
    let email = myForm.email.value;
    let password = myForm.pass.value;
    //console.log("data:", name, email, password);
    
    
    let all_users = JSON.parse(localStorage.getItem("users"));
    
    all_users.forEach(function (user) {
    
    console.log("user:",user.email,user.password);
    var flag=0;
    
    if(email===user.email && password===user.password){
        flag=1;
    
    location.href ="main.html";
    }
    else{
    document.getElementById("p1").innerHTML="The user email address or Password you have entered is invalid"
    
    }
    });
    
    }
    function f1(){
        window.location.href="https://www.facebook.com/Ubuyindia"
    }
    function f2(){
       window.location.href="https://www.google.com/account/about/" 
    }
            