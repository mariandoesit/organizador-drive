# Organizador de Carpetas para Google Drive

Aplicación web simple para crear estructura de carpetas mensuales en Google Drive.


## ✧ Funcionalidad ✧

Crea la siguiente estructura dentro de una carpeta padre:

[Mes]/
  ├── Expensas/
  ├── Alquiler/
  ├── Servicios/
  └── Impuestos/


## ✧ Instalación ✧

1. Ir a Google Apps Scripts (https://script.google.com)
2. Crear un nuevo proyecto
3. Copia el contenido de `codigo.gs` en el archivo principal
4. Ir a Archivo > Nuevo > Atributo HTML
5. Nombrarlo como "Index"
6. Copiar el contenido de `index.html`


## ✧ Configuración ✧
En `codigo.gs` modificar el nombre de la carpeta padre o usar su ID en donde dice "TU_CARPETA_AQUI"


## ✧ Implementación ✧

1. Hacer click en Implementar > Nueva implementación
2. Tipo: "Aplicación Web"
3. Ejecutar como: Tu cuenta
4. Quien tiene acceso: Solo yo
5. Copiar la URL generada


## ✧ Uso ✧
1. Abrir la URL de la aplicación
2. Seleccionar mes y año
3. Hacer click en "Crear estructura"
4. ✨Las carpetas se crearán automáticamente✨