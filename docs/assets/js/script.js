//Declaracion de variables
let fecha, dia, diaMes, mesAnyo, any, data;

// En la variable fecha almacenamos la fecha completa del sistema
fecha = new Date();

// querySelector('div') selecciona todos los elementos <div> del documento HTML
// innerHTML asigna un nuevo valor al contenido del <div>

// fecha.getDay() nos muestra el número de día de la semana
// Siendo 0 el domingo y 6 el sábado
dia = fecha.getDay();
switch(dia){
  case 0: 
    dia = 'Domingo';
    break;
  case 1:
    dia = 'Lunes';
    break;
  case 2:
    dia = 'Martes';
    break;
  case 3:
    dia = 'Miércoles';
    break;
  case 4:
    dia = 'Jueves';
    break;
  case 5: 
    dia = 'Viernes';
    break;
  case 6:
    dia = 'Sábado';
    break;
}


// Día del mes
diaMes = fecha.getDate();


// Mes del año
// Devuelve un número, donde 0 es enero y 11 diciembre

mesAnyo = fecha.getMonth();
switch(mesAnyo){
  case 0:
    mesAnyo = 'Enero';
    break;
  case 1:
    mesAnyo = 'Febrero';
    break;
  case 2:
    mesAnyo = 'Marzo';
    break;
  case 3:
    mesAnyo = 'Abril';
    break;
  case 4:
    mesAnyo = 'Mayo';
    break;  
  case 5:
    mesAnyo = 'Junio';
    break;
  case 6:
    mesAnyo = 'Julio';
    break;
  case 7:
    mesAnyo = 'Agosto';
    break;
  case 8:
    mesAnyo = 'Septiembre';
    break;
  case 9:
    mesAnyo = 'Octubre';
    break;
  case 10:
    mesAnyo = 'Noviembre';
    break;
  case 11:
    mesAnyo = 'Diciembre';
    break;
}


// Obtener el número del año
any = fecha.getFullYear();


// Fecha Legible
document.querySelector('#fecha-legible').innerHTML = dia+', '+diaMes+' de '+mesAnyo+' de '+any;

