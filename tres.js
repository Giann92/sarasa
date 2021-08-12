/*                                  Enunciado:
Este fin de semana se festeja el día del niño y se deben gestionar las ventas de una jugueteria
Obviamente se registran las ventas producidas ese día. De cada venta se registra:
-tipo de juguete ("muñeca", “rompecabezas”, “pelota”)
-origen ("nacional", "importado")
-precio ( entre 1000 y 5000 pesos)
Informar:
a- El tipo de juguete mas vendido
b- El promedio de precio de los juguetes importados
c- La recaudacion total
d- Cual es el precio del rompecabezas nacional mas barato
e- Cuanto se percibio de iva en total (es el 21% de las ventas)*/





function mostrar() {
  let tipoJuguete;
  let origen;
  let precio;
  let promPreciosImportados = 0;
  let acumPrecioImportado = 0;
  let acumPrecioMasBarato;
  let contJuguetesImportados = 0;
  let tipoMasVenido;
  let  contImportados = 0;
  let contMuñeca = 0;
  let contRompecabezas = 0;
  let contPelota = 0;
  let precioMasBarato;
  let flagMasBarato = 1;
  let total;
  let masTipo;
  let percibioIva;
  let respuesta;


  do {
    tipoJuguete = prompt("Ingrese tipo Juguete : (muñeca-rompecabeza-pelota)").toLowerCase()
    while (!(tipoJuguete == "muñeca" || tipoJuguete == "rompecabeza" || tipoJuguete == "pelota")) {
      tipoJuguete = prompt("Error, Ingrese tipo Juguete : (muñeca-rompecabeza-pelota)").toLowerCase();
    }

    origen = prompt("Ingrese origen: (nacional, importados)").toLowerCase();
    while (!(origen == "naconal" || origen == "importado")) {
      origen = prompt("Error! . Ingrese origen: (nacional, importados)").toLowerCase();
    }
    precio = parseInt(prompt("Ingrese precio : 1000-5000"));
    while (isNaN(precio) || precio < 1000 || precio > 5000) {
      precio = parseInt(prompt("Error!. Ingrese precio : 1000-5000"));
    }
    if (origen == "importado") {
      acumPrecioImportado += precio;
      contImportados++;
    } else {
      acumPrecioNacional += precio
    }
    if (origen == "naconal" && tipoJuguete == "rompecabeza" && (flagMasBarato || precioMasBarato > precio)) {
      precioMasBarato = precio;
    }

    switch (tipoJuguete) {
      case "muñeca":
        contMuñeca++;
        break;
      case "rompecabeza":
        contRompecabezas++;
        break;
      case "pelota":
        contPelota++;
        break;
    }


    respuesta = prompt("Desea seguir ingresando juguetes: s/n");
  } while (respuesta == "s");

  total = acumPrecioImportado + acumPrecioNacional;
  promPreciosImportados =  acumPrecioImportado / contImportados;


  //a- El tipo de juguete mas vendido
  }if (contMuñeca > contPelota && contMuñeca > contRompecabezas) {
    masTipo = "muñeca";
  } else if (contPelota >= contRompecabezas && contPelota > contRompecabezas) {
    masTipo = "pelota";
  } else {
    masTipo = "rompecabeza";
  }
  document.write("El tipo de mascota que mas hay es: " + masTipo + "<br>");

  //b- El promedio de precio de los juguetes importados
  document.write("El promedio de precio de ls imprtados son: " + promPreciosImportados + "</br>");
  
  //c- La recaudacion total
  document.write("la reacudacion total es: " + total + "</br>");

  //d- Cual es el precio del rompecabezas nacional mas barato
  document.write("El precio de romprecabeza mas baratro es: " + precioMasBarato + "</br>");


}
