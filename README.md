💻 Automatizacion Loin y Registro Inlaze
🔍 Descripcion
-Se realizaran pruebas automatizadas usando 2e2 para la pagina https://test-qa.inlaze.com/auth/sign-in de las pantallas de incio de sesion y registro de un usuario. para este proyecto se utilizo xpath selectorpara localizar en el navegador elementos y validar los diferentes flujos.

✏️ Lenhuajes y herramientas utlizadas
Cypress: Framework de pruebas 2E2

JavaScript: Lenguje de programacion principal
Xpath: Para la localizacion avanzada de elementos
Visual Estudio Code: Entorno de desarrollo
📝 Requisitos para la ejecución y validación de la automatización
Node.js (v14 o superior)
npm (v6 o superior)
Visual Studio Code (V1.90.0 o superior)
Cypress
🖥️ Instalación
Clonar el siguiente proyecto https://github.com/AndresGarcia2003/Inlaze-Automatizacion
Al clonar el proyecto lo podemos abrir en visual estudio code y en la terminal colocar el siguiente comando para ejecutarlo: npx cypress open
💡 Explicacione de las carpetas del proyecto
e2e/base/: Contiene BasePage.js, una clase base con métodos comunes utilizados en diferentes páginas (por ejemplo, navegación, clics y esperas).
e2e/page/: Contiene los objetos de página (Page Objects). Cada archivo representa una página de la aplicación web y encapsula la lógica de interacción con esa página, como:
PageLogin.js
PageLogout.js
PageRegister.js
e2e/tests/: Contiene las pruebas .cy.js que validan el comportamiento de la aplicación
Login.cy.js
Logout.cy.js
register.cy.js
fixtures/: Almacena datos estáticos o de prueba en formato JSON, útiles para alimentar las pruebas sin codificar valores directamente en los archivos de prueba.
reports/: Contiene los reportes de pruebas generados automáticamente (por ejemplo, con Mochawesome o Allure).
support/: Carpeta con comandos personalizados o configuraciones de Cypress.
cypress.config.js: Archivo de configuración principal de Cypress. Aquí se definen rutas, timeouts, plugins, entre otros.
