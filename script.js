const form = document.getElementById("formcontainer");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

// add event listeners to submit 
form.addEventListener("submit",(event) =>{
    event.preventDefault();
    Validate();
});

// isEmail Function
const isEmail = (emailVal)=>{
    var atSymbol = emailVal.indexOf("@");
    if(atSymbol < 1){
        return false;
    }
    var dot = emailVal.lastIndexOf(".");
    if(dot <= atSymbol + 2) {
        return false;
    }
    if(dot==emailVal.length-2){
        return false;
    }
    return true;
}

// setErrorMsg Function
function setErrorMsg(input, errorMsg){
let formControl = input.parentElement;
const small = formControl.querySelector("small");
formControl.className = "form-control error";
small.innerText = errorMsg;
}

// setSuccessMsg Function
function setSuccessMsg(input){
    let formControl = input.parentElement;
    formControl.className = "form-control success";
}

// SuccessMsg after form submission 
// function SuccessMsg(){

// }
    
// define validate function 
const Validate = ()=>{
const userNameVal = userName.value.trim();
const emailVal = email.value.trim();
const phoneVal = phone.value.trim();
const passwordVal = password.value.trim();
const cpasswordVal = cpassword.value.trim();

//validate userName 

if(userNameVal == ""){
    setErrorMsg(userName,"User name can't be blank")
}else if(userNameVal.length < 3){
    setErrorMsg(userName,"User name required min 3 characters")
}else{
    setSuccessMsg(userName)
}
//validate email
if(emailVal == ""){
    setErrorMsg(email,"Email can't be blank");
}else if(!isEmail(emailVal)){
    setErrorMsg(emailVal,"Not a valid email address");
}else{
    setSuccessMsg(email)
}
//validate phone
if(phoneVal == ""){
    setErrorMsg(phone,"Phone Number can't be blank")
}else if(phoneVal.length != 10){
    setErrorMsg(phone,"Phone Number is not Valid")
}else{
    setSuccessMsg(phone)
}

//validate password 
if(passwordVal == ""){
    setErrorMsg(password,"Password can't be blank")
}else if(passwordVal.length <= 5){
    setErrorMsg(password,"Minimum 6 characters password is required")
}else{
    setSuccessMsg(password)
}

//validate confirmpassword 
if(cpasswordVal == ""){
    setErrorMsg(cpassword,"Confirm Password can't be blank")
}else if(passwordVal !== cpasswordVal){
    setErrorMsg(cpassword,"passwords is not matching")
}else{
    setSuccessMsg(cpassword)
}

}