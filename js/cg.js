var inicio = document.getElementById("index");
var nosotros = document.getElementById("nosotros");
var contacto = document.getElementById("contacto");

inicio.addEventListener("click", Inicio);
nosotros.addEventListener("click", Nosotros);
contacto.addEventListener("click", Contacto);

function Inicio()
{
    document.getElementById("lblMessageIndex").innerHTML = "<strong>Inicio</strong>";
}

function Nosotros()
{
    document.getElementById("lblMessageNosotros").innerHTML = "<strong>Nosotros</strong>";
}

function Contacto()
{
    document.getElementById("lblMessageContacto").innerHTML = "<strong>Contacto</strong>";
}