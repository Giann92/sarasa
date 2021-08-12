/*                                          Enunciado:
Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre,
carrera("Quimica";"Fisica";"Sistemas"),
sexo (masculino - femenino -no binario),
cantidad de materias(entre 1 y 5),
Nota promedio del alumno(entre 0 y 10),
edad (validar).
Se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.*/





function mostrar() {
  let nombre;
  let edad;
  let carrera;
  let sexo;
  let materia;
  let alumnaMasJoven;
  let edadMenor;
  let notaPromedio;
  let mejorPromedio;
  let flagJoven = 1;
  let flagPromedio =1;
  let flagMayorMateria = 1;
  let nombreMejorPromedio;
  let nombreMasMaterias;
  let edadMasMateria;
  let porcentajeQuimica = 0;
  let porcentajeFisica = 0;
  let porcentajeSistemas = 0;
  let contFisica = 0;
  let contQuimica = 0;
  let contSistema = 0;
  
 for(let i = 0; i < 500 ; i++){
    nombre = prompt("Ingrese nombre: ").toLowerCase();
    while (nombre.length < 3 || nombre.length > 10) {
      nombre = prompt("Error ! , Ingrese nombre: ").toLowerCase();
    }
    edad = parseInt(prompt("Ingrese edad:"));
    while ((isNaN(edad < 12))) {
      edad = parseInt(prompt("Ingrese edad:"));
    }
    sexo = prompt("Ingrese sexo : (masculino-femenino-no binario)").toLowerCase()
    while (!(sexo == "masculino" || sexo == "femenino" || sexo == "no binario")) {
      sexo = prompt("Error, Ingrese sexo : masculino-femenino-no binario)").toLowerCase()
    }

    carrera = prompt("Ingrese carrera: (quimica-fisica-sistemas)").toLowerCase();
    while (!(carrera == "quimica" || carrera == "fisica" || carrera == "sistemas")) {
      carrera = prompt("Error! . Ingrese una carrera: ").toLowerCase();
    }
    materia = parseInt(prompt("ingrese cantidad de materia: 1-5"));
    while (isNaN(materia) || materia < 1 || materia > 5) {
      materia = prompt("Error. ingrese cantidad de materia: 1-5");
    }
    notaPromedio = parseInt(prompt("Ingrese nota : 0-10"));
    while(isNaN(notaPromedio)|| notaPromedio < 0 || notaPromedio > 10)
    {
      notaPromedio = parseInt(prompt("Error!. Ingrese nota : 0-10"));
    }
    if (sexo == "femenino" && (flagJoven || edadMenor > edad)){
      edadMenor = edad;
      alumnaMasJoven = nombre;
     
    }

    switch (carrera) {
      case "sistemas":
        contSistema++;
        break;
      case "fisica":
        contFisica++;
        if(flagPromedio || mejorPromedio < notaPromedio)
        {
          mejorPromedio = notaPromedio;
          nombreMejorPromedio = nombre;
        }
      case "quimica":
        contQuimica++;
        break;

    }
    if (carrera != "quimica" ) {
      acumMateria += materia;
    }
   
    if((flagMayorMateria || acumMateria < materia))
    {
      nombreMasMaterias = nombre;
      edadMasMateria = edad;

    }

    respuesta = prompt("Desea seguir ingresando? : s/n");
  }

  porcentajeFisica = contFisica * 100 / 3;
  porcentajeQuimica = contQuimica * 100 /3;
  porcentajeSistemas = contSistema * 100/3;

  //a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
  document.write("El nombre del mejor promedio que estudia fisica es: " + nombreMejorPromedio + "</br>");

  //b) El nombre de la alumna mas joven.
  document.write("El nombre de la aluman mas joven es: " + alumnaMasJoven + "</br>");
  
  //c) Porcentaje de estudiantes que estudia cada carrera.
  document.write("El porcenatje de alumnos que estudia cada carrera son: </br> " + porcentajeFisica + "% de fisica </br>" + porcentajeQuimica + "% de quimica </br>" + porcentajeSistemas + "% de sistema </br>");

  //d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica
  document.write("La edad edad y el nombre del estudiante que cursa mas materia menos quimica es: " + edadMasMateria + "anos y se llama: " + nombreMasMaterias + "</br>");



}
