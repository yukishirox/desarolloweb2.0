let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos(){
    let x = $("#boton1");
    x.click(eliminarElementos)

    x = $("#boton2");
    x.click(restaurarLista)

    x = $("#boton3");
    x.click(anadirElementoFinal)

    x = $("#boton4");
    x.click(anadirElementoInicio)

    x = $("#boton5");
    x.click(eliminarElementoFinal)

    x = $("#boton6");
    x.click(eliminarElementoPrincipio)

    x = $("#boton7");
    x.click(eliminarPrimerElemento)
    
    x = $("#boton8");
    x.click(eliminarDosUltimos)
}

function eliminarElementos(){
    let x = $("ul");
    x.empty();
}

function restaurarLista(){
    $("ul").html('<li>Primer item</li><li>Segundo item</li><li>Tercer item</li><li>Cuarto item</li>');
}

function anadirElementoFinal(){
    let x = $("ul");
    x.append("<li>Otro ítem al final</li>");
}

function anadirElementoInicio(){
    let x = $("ul");
    x.append("<li>Otro ítem al final</li>");
}

function eliminarElementoFinal(){
    let x = $("li");
    let cantidad = x.length;
    x = x.eq(cantidad-1);
    x.remove();
}

function eliminarElementoPrincipio(){
    let x = $("li");
    x = x.eq(0);
    x.remove();
}

function eliminarPrimerElemento(){
    let x = $("li");
    x = x.slice(0,2);
    x.remove();
}

function eliminarDosUltimos(){
    let x = $("li");
    x = x.slice(x.length -2);
    x.remove();
}