function darBienvenida() {

    document.getElementsByTagName("h3")[0].style.color = "red";
    var nodo = document.createElement("h3");

    if (document.getElementsByTagName("h3").length < 2) {
        nodo.appendChild(document.createTextNode("Hola Mundo, soy Marta"));
        console.log("Hola Mundo, soy Marta");
    } else {
        nodo.appendChild(document.createTextNode("Hola Mundo, soy Marta otra vez"));
        console.log("Hola Mundo, soy Marta otra vez");
    }

    document.getElementsByTagName("h3")[0].parentNode.appendChild(nodo);
}