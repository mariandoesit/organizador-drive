//funcion principal para mostrar la interfaz
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
  .setTitle('Organizador de Google Drive')
  .setWidth(400)
  .setHeight(300);
}

//funcion para crear la estructura de carpetas
function crearEstructuraMensual(mes, año) {
  try {
    const carpetaRaiz = DriveApp.getFolderById("TU_CARPETA_AQUI");

    //crear la carpeta mes
    const nombreCarpetaMes = `${mes}`;
    const carpetaMes = carpetaRaiz.createFolder(nombreCarpetaMes);

    //crear las subcarpetas
    const categorias = ['EXPENSAS', 'ALQUILER', 'SERVICIOS', 'IMPUESTOS'];

    categorias.forEach(categoria => {
      carpetaMes.createFolder(categoria);
    });

    //obtener ID y URL de la carpeta creada
    const carpetaId = carpetaMes.getId();
    const carpetaUrl = carpetaMes.getUrl();

    return {
      success: true,
      mensaje: `Estructura creada exitosamente: ${nombreCarpetaMes}`,
      url: carpetaUrl
    };
  
  } catch (error) {
    return {
      success: false,
      mensaje: `Error: ${error.message}`
    };
  }
}
