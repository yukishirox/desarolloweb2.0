function sumar() {
    var v1 = parseInt(document.getElementById("valor1").value); //declaro las variables con el id
    var v2 = parseInt(document.getElementById("valor2").value); //el parseInt permite la suma de numeros
    var suma=0; //iniciara con valor 0

    suma = v1+v2; //la suma sera el conjunto de sumar las dos variables declaradas
    document.getElementById("resultado").value=suma; //resultado de la variable suma
    }
