/*
Una software factor	y registra la siguiente informacion de sus
            empleados:
            Nombre,
			edad (validar), 
			sexo (masculino - femenino - no binario),
			puesto (programador - analista - Qa),
			sueldo (entre 15000 y 70000).
			La empresa desea saber: se debe informar de existir, o
			informar que no existe , en el caso que corresponda.
			a) promedio de sueldos para cada puesto> 
			b) el sexo del que percibe el mayor sueldo
			c) el nombre del empleado femenino con mas sueldo> 
			d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000
*/
function mostrar()
{
	var nombre;
	var edad;
	var puesto;
	var sueldo;
	var sexo;
	var continuar = true;

	var contadorProgramador = 0;
	var contadorAnalista = 0;
	var contadorQa = 0;

	var acumuladorSueldoProgramador = 0;
	var acumuladorSueldoAnalista = 0;
	var acumuladorSueldoQa = 0;

	var contadorProgramadorNoBin = 0;
	var flagSueldoMax = 0;
	var sueldoMax;
	var sexoSueldoMax;

	var flagFemenino = 0;
	var femeninoSueldoMax;
	var nombreFemeninoSueldoMax;
	var promedioProgramador;
	var promedioAnalista;
	var promedioQa;

	var acumuladorQa;
	var acumuladorAnalista;
	do {
		
		do{
		nombre = prompt("ingrese su nombre");
		}while(isNaN(nombre)==false);

		do{
			edad = parseInt(prompt("Ingrese su edad"));
		}while (isNaN(edad)==true || edad <18 || edad >100 );

		do{
			sexo = prompt("Ingrese su sexo: masculino, femenino , no binario");
		} while(sexo != "masculino" && sexo != "femenino" && sexo != "no binario");

		do{
			puesto = prompt("Ingrese su puesto: programador - analista - Qa");
		} while (puesto !="programador" && puesto != "analista" && puesto != "Qa"); 

		do{
			sueldo = parseInt(prompt("Ingrese su sueldo entre 15000 y 70000"));
		} while(isNaN(sueldo)== true || sueldo < 15000 || sueldo > 70000);

		

		/*a) promedio de sueldos para cada puesto> 
			b) el sexo del que percibe el mayor sueldo -->
			c) el nombre del empleado femenino con mas sueldo> 
			d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000 ---Listo*/


		switch (puesto) {
			case "programador":
				contadorProgramador++;
				acumuladorSueldoProgramador = acumuladorSueldoProgramador + sueldo;
				if (sexo == "no binario" && sueldo >= 20000 && sueldo <= 55000) {
					contadorProgramadorNoBin++;
				}
				break;
			case "analista":
				contadorAnalista++;
				acumuladorSueldoAnalista = acumuladorSueldoAnalista + sueldo;
				break;
			case "Qa":
				contadorQa++;
				acumuladorSueldoQa = acumuladorSueldoQa + sueldo;
				break;

		}

		if (flagSueldoMax == 0) {
			sueldoMax = sueldo;
			sexoSueldoMax = sexo;
			flagSueldoMax++;
		}

		if (flagFemenino == 0 && sexo == "femenino") {
				femeninoSueldoMax = sueldo;
				nombreFemeninoSueldoMax = nombre;
				flagFemenino++;
		} else if (sueldo > femeninoSueldoMax){
			femeninoSueldoMax = sueldo;
			nombreFemeninoSueldoMax = nombre;
		}

		continuar = confirm("Desea ingresar mas datos?");
	} while (continuar);

	if (contadorProgramador == 0) {
		document.write("<br>No se ingresaron programadores");
	} else {
		promedioProgramador = acumuladorSueldoProgramador/contadorProgramador;
		document.write("<br> El promedio de sueldo de programador es: " + promedioProgramador);
	}
	
	if (contadorQa > 0) {
		document.write("<br>no se ingresaron Qa");
	}else {
		promedioQa = acumuladorQa/contadorQa;
		document.write("<br> el promedio de sueldo de Qa es: " + promedioQa);
	}

	if (contadorAnalista > 0) {
		document.write("<br>no se ingresaron Analistas");
	} else {
		promedioAnalista = acumuladorAnalista/contadorAnalista;
		document.write("<br> el sueldo promedio de Analista es: " + promedioAnalista);
	}

	if (flagSueldoMax > 0) {
		document.write("<br> el sexo con el mayor sueldo es: "+ sexoSueldoMax);
	}else{
		document.write("<br> no hay un sueldo maximo");
	}

	if (flagFemenino > 0) {
		document.write("<br> el nombre del empleado femenino con mas sueldo es:" + nombreFemeninoSueldoMax);
	} else {
		document.write("<br> no se ingresaron femeninos");
	}

	if (contadorProgramadorNoBin == 0) {
		document.write("<br>No se ingresaron no Binarios");
	} else {
		document.write("<br> la cantidad de programadores no binarios que cobran entre 20 mil y 55 mil pesos son: " + contadorProgramadorNoBin);
	}
}
