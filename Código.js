let HOJA = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

function doGet(){
  let web = HtmlService.createTemplateFromFile('index').evaluate();
  return web
}
function doPost(){
  let web = HtmlService.createTemplateFromFile('index').evaluate();
  return web
}
function obtenerWeb(nombre){
  return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}
function numerosDisponibles(){
  let range = HOJA.getRange("A2:A101").getValues();
  return range;
}
function guardarDatos(data){ 
  let ult =  HOJA.getRange("C"+(HOJA.getLastRow()+1)).getNextDataCell(SpreadsheetApp.Direction.UP).getRow()+1;  
  
  let numero = data.numero;
  let nombre = data.nombre;
  let apellido = data.apellido;
  let celular = data.celular;
  let correo = data.correo;

  // Crea un arreglo con los datos
  let datos = [[numero, nombre, apellido, correo, celular]];

  // Define el rango en el que deseas pegar los datos (C2:G2)
  let rango = HOJA.getRange("C" + ult + ":g" + ult);

  // Pega los datos en el rango especificado
  rango.setValues(datos);

  let numEliminar = (numero*1) + 2;
  HOJA.getRange(numEliminar,1).clearContent();

}

function reiniciar(){
  for(let i = 0; i < 100; i++ ){
    fila = i + 2
    HOJA.getRange(fila,1).setValue(i);
    HOJA.getRange(2,1).setValue('00');
  }
  HOJA.getRange(2,3,100,5).clearContent();
}
