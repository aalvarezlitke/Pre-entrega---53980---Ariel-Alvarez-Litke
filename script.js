function imprimirAlert(mensaje) {
	alert(mensaje);
}

function promedioPorAlumno(primernota, segundanota, tercernota) {
	return (primernota + segundanota + tercernota) / 3;
}

alert("Se ingresaran los nombres de los alumnos y sus respectivas notas.En caso de no tener mas alumnos Ingresar la palabra ESC");
let nombreAlumno = prompt("Ingrese nombre del alumno");

let notasAlumnos = 0;
let conteo = 0;
let promedioTotal;

while (nombreAlumno != "ESC") {
	
	let nota1 = Number(prompt("Ingrese Primer Nota"));
	let nota2 = Number(prompt("Ingrese Segunda Nota"));
    let nota3 = Number(prompt("Ingrese Tercer Nota"));
    
    let promedio = promedioPorAlumno(nota1, nota2, nota3);
    

    imprimirAlert(`El promedio de ${nombreAlumno} es ${promedio}`);
    
    conteo = conteo + 1;
    notasAlumnos = notasAlumnos + promedio;
    console.log(notasAlumnos);
    
	nombreAlumno = prompt("Ingrese Nombre ALumno");
}

	if (nombreAlumno == "ESC") {
	promediototal = notasAlumnos / conteo;
		imprimirAlert(`Se ingresaron ${conteo} alumnos y el promedio total de todos los alumnos es ${promediototal}`);
	}