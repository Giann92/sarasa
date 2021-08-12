/*                                      Enunciado:
Se necesita llevar la gestión de una veterinaria. Para ello se podrán registrar los datos de cada mascota mientras el usuario quiera.
De cada mascota se solicita:
-nombre (entre 3 y 8 caracteres)
-tipo (“mamifero”, “ave”, “reptil”)
-sangre ( "fria", "calida")
Si es de tipo reptil solo puede tener sangre fria
-edad ( mayor a cero)
-sexo( “m” de macho o “h” de hembra )
Informar:
a- Promedio de edad de los reptiles
b- tipo y sexo de la mascota mas joven
c- Del total de mascotas que porcentaje son aves
d- De que tipo de mascota hay mas cantidad*/




function mostrar() {
  let mascota;
  let edad;
  let tipo;
  let sexo;
  let sangre;
  let edadMenor;
  let flagJoven = 1;
  let tipoJoven;
  let masTipo;
  let sexoMasJoven;
  let promEdadReptiles = 0;
  let porcentajeAves = 0;
  let contAve = 0;
  let contMamifero = 0;
  let contReptil = 0;
  let contMascota = 0;
  let acunmEdad = 0;
  let respuesta;
  do {
    mascota = prompt("Ingrese nombre: ").toLowerCase();
    while (mascota.length < 3 || mascota.length > 8) {
      mascota = prompt("Error ! , Ingrese nombre: ").toLowerCase();
    }
    edad = parseInt(prompt("Ingrese edad:"));
    while (isNaN(edad) || edad < 0) {
      edad = parseInt(prompt("Eeror!. Ingrese edad:"));
    }
    sexo = prompt("Ingrese sexo : m/h").toLowerCase();
    {
      while (!(sexo == "m" || sexo == "h")) {
        sexo = prompt("Error, Ingrese sexo : m/h").toLowerCase();
      }
    }

    tipo = prompt("Ingrese tipo: ").toLowerCase();
    while (!(tipo == "mamifero" || tipo == "ave" || tipo == "reptil")) {
      tipo = prompt("Error! . Ingrese tipo: ").toLowerCase();
    }
    if (tipo == "reptil") {
      sangre = prompt("Ingrese sangre: fria").toLowerCase();
      while (!(sangre == "fria")) {
        sangre = prompt("Error. Ingrese sangre: fria").toLowerCase();
      }
    } else {
      sangre = prompt("Ingrese sangre: fria/calida").toLowerCase();
      while (!(sangre == "fria" || sangre == "calida")) {
        sangre = prompt("Error. Ingrese sangre: fria/calida").toLowerCase();
      }
    }
    if (flagJoven || edadMenor > edad) {
      edadMenor = edad;
      sexoMasJoven = sexo;
      tipoJoven = tipo;
      flagJoven = 0;
    }

    switch (tipo) {
      case "mamifero":
        contMamifero++;
        break;
      case "ave":
        contAve++;
        break;
      case "reptil":
        contReptil++;
        acunmEdad = edad;
        break;
    }
    contMascota++;

    respuesta = prompt("Desea seguir ingresando mascotas: s/n").toLowerCase();
  } while (respuesta == "s");


  //a- Promedio de edad de los reptiles
  if (contReptil != 0) {
    promEdadReptiles = acunmEdad / contReptil;
    document.write("El promedio de edad de los reptiles son: " + promEdadReptiles + "</br>");
  } else {

    document.write("No se ingreso reptiles </br>");

  }

  //b- tipo y sexo de la mascota mas joven
  document.write("La mascota mas joven es del tipo: " + tipoJoven + " y el sexo es: " + sexoMasJoven + "</br>");


  //c- Del total de mascotas que porcentaje son aves
  porcentajeAves = contAve * 100 / contMascota;
  document.write("El porcentaje de aves es de: " + porcentajeAves + "%" + "</br>");


  //d- De que tipo de mascota hay mas cantidad
  if (contMamifero > contAve && contMamifero > contReptil) {
    masTipo = "mamifero";
  } else if (contAve >= contReptil && contAve > contReptil) {
    masTipo = "ave";
  } else {
    masTipo = "reptil";
  }
  document.write("El tipo de mascota que mas hay es: " + masTipo + "<br>");



}
