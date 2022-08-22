function cerrar(){
    localStorage.removeItem("user")
    location.href="login.html"
}


document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });

    document.getElementById("cerrar").addEventListener('click',()=>{
        cerrar()
    })

    // Codigo para dirigir al Login cuando no se esta logeado // 
let usuario = localStorage.getItem("user");

    if(usuario==null){
        alert("No hay usuario logeado");
        location.href="login.html";
    } else {
        document.getElementById("nombre").innerHTML = usuario;
    }
});
