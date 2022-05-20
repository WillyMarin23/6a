var texto = document.getElementById("tlineas");
var texto2 = document.getElementById("tlineas2");
var boton2 = document.getElementById("boton");
boton2.addEventListener("click", dibujoporclick );


function dibujoporclick()
{
    var x = parseInt(texto.value);
    var x1 = parseInt(texto2.value);
    var c = x+x1;

document.write("La suma es "+c);  
}