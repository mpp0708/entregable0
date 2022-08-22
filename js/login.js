function login1(){
    let nombre = document.getElementById("login").value;
    let constraseña = document.getElementById("password").value;

   if (nombre!="" && constraseña!=""){
        localStorage.setItem('user',nombre);
         location.href="index.html";
} else {
    alert("¡Introducir nombre y constraseña!");
}
}

document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("enviar").addEventListener("click",()=>{
        login1();
    })
})