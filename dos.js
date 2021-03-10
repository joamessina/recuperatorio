/**
Realizar el algoritmo que permita ingresar los datos de los 500
            alumnos de la UTN FRA, los datos solicitados son:
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
            
            d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.
 */

function mostrar()
{
    var nombre;
    var carrera;
    var sexo;
    var cantidadDeMaterias;
    var edad;
    var notaPromedioAlumno;

    var contadorQuimica = 0;
    var contadorFisica = 0;
    var contadorSistemas = 0;

    var flagPromedioFisica = 0;
    var mejorPromedioFisica;
    var nombreMejorAlumnoFisica;

    var nombreAlumnaJoven;
    var flagFemenino = 0;
    var edadFemeninaMasJoven;
    var flagCarreras = 0;
    var cantidadMateriasMax;
    var nombreMateriasMax;
    var edadMateriasMax;

    var totalAlumnos;
    var porcentajeQuimica;
    var porcentajeFisica;
    var porcentajeSistemas;

    for (let i = 0; i < 500; i++) {
        
        do{
            nombre = prompt("ingrese su nombre");
        } while(isNaN(nombre)==false);

        do{
            edad = parseInt(prompt("Ingrese su edad"));
        }while(isNaN(edad)== true || edad < 18 || edad > 100);

        do{
            carrera = prompt("Ingrese su carrera: quimica, fisica, sistemas");
        } while(carrera != "quimica" && carrera != "fisica" && carrera != "sistemas");

        do{
            sexo = prompt("Ingrese su sexo: masculino - femenino - no binario");
        }while(sexo != "masculino" && sexo != "femenino" && sexo != "no binario");

        do{
            cantidadDeMaterias = parseInt(prompt("ingrese la cantidad de materias : 1 - 5"));
        }while(isNaN(cantidadDeMaterias)==true || cantidadDeMaterias < 1 || cantidadDeMaterias > 5);

        do{
            notaPromedioAlumno = parseInt(prompt("ingresar nota promedio entre 0 y 10"));
        }while(isNaN(notaPromedioAlumno)== true || notaPromedioAlumno < 0 || notaPromedioAlumno > 10);


        switch (carrera) {
            case "quimica":
                contadorQuimica++
                break;
            case "fisica":
                contadorFisica++;
                    if (flagPromedioFisica == 0 || notaPromedioAlumno > mejorPromedioFisica) {
                        mejorPromedioFisica = notaPromedioAlumno;
                        nombreMejorAlumnoFisica = nombre;
                        flagPromedioFisica++;
                    }
                break;
            case "sistemas":
                contadorSistemas++
                break;
        }

        if (sexo == "femenino") {
            if (flagFemenino == 0 || edad < edadFemeninaMasJoven) {
                edadFemeninaMasJoven = edad;
                nombreAlumnaJoven = nombre;
                flagFemenino++;
            }
        }

        if (carrera != "quimica") {
            if (flagCarreras == 0 || cantidadDeMaterias > cantidadMateriasMax) {
                cantidadMateriasMax = cantidadDeMaterias;
                nombreMateriasMax = nombre;
                edadMateriasMax = edad;
                flagCarreras++;
            }
        }
    }//termina el for


    if (flagPromedioFisica > 0) {
        document.write("<br>El nombre del mejor promedio de fisica es: " + nombreMejorAlumnoFisica);
    } else{
        document.write("<br> No se ingresaron alumnos de fisica");
    }

    if (flagFemenino > 0) {
        document.write("<br> el nombre de la alumna mas joven es: "+ nombreAlumnaJoven);
    }else{
        document.write("<br> No se ingreso alumnas mujeres");
    }

    totalAlumnos = contadorSistemas+ contadorQuimica+ contadorFisica;
    if (contadorFisica == 0) {
        document.write("<br> No se ingresaron alumnos en Fisica");
    } else {
        porcentajeFisica = (contadorFisica*100)/totalAlumnos;
        document.write("<br> El porcentaje de alumnos en fisica es del: " + porcentajeFisica + "%");
    }

    if (contadorQuimica == 0) {
        document.write("No se ingresaron alumnos en Quimica");
    }else{
        porcentajeQuimica = (contadorQuimica*100)/totalAlumnos;
        document.write("<br> El porcentaje de alumnos en quimica es del: " + porcentajeQuimica + "%");
    }

    if (contadorSistemas == 0) {
        document.write("<br> No se ingresaron alumnos en Sistemas");
    } else {
        porcentajeSistemas = (contadorSistemas*100)/totalAlumnos;
        document.write("<br> El porcentaje de alumnos en Sistemas es de: " + porcentajeSistemas + "%");
    }

    if (flagCarreras == 0) {
        document.write("<br> No se ingresaron alumnos en las carreras de sistemas, fisica")
    } else{
        document.write("<br> La edad y el nombre del estudiante con mas materias es: " + edadMateriasMax + " " + nombreMateriasMax);
    }
}

    /** 
        a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
        b) El nombre de la alumna mas joven.
        c) Porcentaje de estudiantes que estudia cada carrera.
        d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.            
     */
