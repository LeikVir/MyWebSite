var inicio = document.getElementById("index");
var nosotros = document.getElementById("nosotros");
var contacto = document.getElementById("contacto");

inicio.addEventListener("click", Inicio);
nosotros.addEventListener("click", Nosotros);
contacto.addEventListener("click", Contacto);

function Inicio()
{
    alert("Redirigiendo a la Pagina de Inicio...");
}

function Nosotros()
{
    alert("Redirigiendo a la Pagina Acerca de Nosotros...");
}

function Contacto()
{
    alert("Redirigiendo a la Pagina de Contactos...");
}