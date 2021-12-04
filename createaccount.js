function signup(e) {
    e.preventDefault();
    let myForm= document.getElementById("myForm");
   // console.log("myForm:",myForm)
let name = myForm.name.value;
let mobile = myForm.rmobile.value;
let email = myForm.email.value;
let password = myForm.pass.value;
let conpass=myForm.pass1.value;


if(password!=conpass){
document.getElementById("pass2").innerHTML=" ** passwords are not matching";
return false;

}

if (localStorage.getItem("users") === null){
      localStorage.setItem("users",JSON.stringify([]));
  }

let user = {
  name,
  mobile,
  email,
  password,
};


let arr =JSON.parse(localStorage.getItem("users"))  

arr.push(user) ;

localStorage.setItem("users",JSON.stringify(arr));

window.location.href="login.html"

    }
    