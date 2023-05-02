
const inputUser = document.querySelector("input[type='text']");

inputUser.addEventListener("focus", ()=>{
    inputUser.setAttribute("style","outline-color:#ff0000;")
});

inputUser.addEventListener("keyup", ()=>{

    const labelUser = document.querySelector("label[for='idNm']");

    if(inputUser.value.length < 5){
        inputUser.setAttribute("style","outline-color:#ff0000;")
        labelUser.setAttribute("style","color:#ff0000;")

    }else{
        inputUser.setAttribute("style","outline-color:#00ff00;")
        labelUser.setAttribute("style","color:#00ff00;")
    }
});

//const eyePass = document.querySelector("fa-eye");
//
//eyePass.addEventListener("click", ()=>{
//    const inputPass = document.querySelector("#idPass")
//
//    if(inputPass.getAttribute("type") == "password"){
 //       inputPass.setAttribute("type","text");
 //   }else{
 //       inputPass.setAttribute("type","password");
//    }
//});

const eyePass = document.querySelector(".eye");

eyePass.addEventListener("click", ()=>{
    const inputPass = document.querySelector("#idPass");

    if(inputPass.getAttribute("type") == "password"){
        inputPass.setAttribute("type","text");
        eyePass.setAttribute("class","fa fa-eye eye");
    }else{
        inputPass.setAttribute("type","password");
        eyePass.setAttribute("class","fa fa-eye-slash eye");
    }

});