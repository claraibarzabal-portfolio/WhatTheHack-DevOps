# What The Hack - Modern development con DevOps y GitHub

## ¿Qué es What The Hack?

What The Hack es una iniciativa de Código Facilito auspiciada por Microsoft, donde enfrentaremos retos de diversas temáticas trabajando individualmente. La idea es resolver desafíos técnicos utilizando tecnología. Esto no es un taller; son retos que describen tareas a un nivel general para que puedas completarlas por tu cuenta. No son del todo laboratorios paso a paso. Lo que buscamos es que tengas una experiencia de aprendizaje colaborativa, donde puedas compartir con tus compañeros. 

Contarás con coaches y facilitadores que, en caso de que encuentres dificultades con alguna pregunta, podrán ayudarte a resolverla. No estás solo para enfrentar estos desafíos, tienes a tu equipo y a todos nosotros para ayudarte a superar los retos que presentamos. 

**¡Gracias y bienvenido a WhatTheHack!**

## Introducción del reto

Bienvenido a este desafío de What The Hack con Código Facilito. En este reto, nos centraremos en Modern Development con DevOps y GitHub. Nuestro objetivo es ayudarte a aumentar la velocidad de desarrollo e implementar procedimientos adecuados de DevOps en tu organización. GitHub ofrece un conjunto de herramientas para desarrolladores que permiten agilizar la creación de código, automatizar tareas y garantizar la seguridad del código. A lo largo de este reto, explorarás cómo implementar estos procesos de manera efectiva.

## El escenario del reto

Como parte de una campaña de ayudar a la comunidad, tu empresa está apoyando a un refugio local de animales actualizando, desplegando y gestionando una aplicación web para mostrar mascotas disponibles para adopción.


## Retos
Puedes iniciar por [acá](https://whatthehack-cf.github.io/WhatTheHack_retos/DevOps-GitHub/)

Reto 00: Prerrequisitos - En sus marcas, listos… ¡fuera!
Home - Siguiente reto >

Introducción
Gracias por participar en What The Hack en el reto Modern Development con DevOps y GitHub. En este desafio crearás un nuevo repositorio para el código, configurarás algunos procesos comunes de DevOps y escribirás algo de código. Pero antes de comenzar, asegurémonos de tener todo listo.

Prerrequisitos
Durante este desafio, utilizarás características que te permitirán programar y contribuir al proyecto sin necesidad de instalar herramientas localmente. Como resultado, solo necesitarás asegurarte de tener lo siguiente:

Comienza creando una cuenta de GitHub que puedas usar para este hackathon. Puedes usar una cuenta existente si ya tienes una.
Nota: Utiliza una cuenta personal de GitHub. Si tienes una cuenta de trabajo, por favor no uses esa. Usa una cuenta personal o crea una nueva, ya que algunos recursos que vamos a utilizar solo funcionan en cuentas personales. Vamos a usar Codespaces y, a veces, en las cuentas empresariales no está habilitado.

Continua creando una suscripción de Azure que puedas usar para este hackaton. Puedes usar una suscripción existente si ya tienes una.
Nota 1: Utiliza una suscripción personal de Azure. Si tienes una suscripción de trabajo, por favor no uses esa. Usa una suscripción personal o crea una nueva, ya que en una suscripión empresarial puede que no tengas habilitados los permisos necesarios para los recursos que vamos a crear más adelante.

Nota 2: Para iniciar sesión en Azure, por favor hazlo desde una ventana de incógnito. Por ahora, solo asegúrate de que puedes iniciar sesión en Azure. No necesitas crear nada todavía. Si tienes alguna duda, avísanos.

Descripción
El refugio ya cuenta con una aplicación creada por un proveedor que desean utilizar como base para su sitio web. El proyecto actualmente lo puedes encontrar en GitHub como una plantilla. El primer paso es obtener el código fuente y crear un repositorio en GitHub para mantener una copia separada. Los cambios que realices no se mezclaran con el repositorio original.

El proyecto es un proyecto de Next.js/React que utiliza MongoDB.

IMPORTANTE: Este desafio no requiere experiencia con JavaScript, React o Next.js.

Criterios de Éxito
Tienes una copia de la aplicación existente en un repositorio en tu cuenta.
No has creado un fork del repositorio existente. Recuerda la palabra clave: plantilla (template).
Recursos de Aprendizaje
Crear un repositorio desde una plantilla
¿Qué es DevOps?
¿Qué es GitHub?
Azure DevOps vs. GitHub - English

Reto 01 - Configura tu entorno de desarrollo
< Reto Anterior - Home - Siguiente reto >

Introducción
Con la copia del proyecto obtenida, es momento de centrar tu atención en configurar tu entorno de desarrollo. El refugio está interesado en asegurar que los desarrolladores puedan contribuir al proyecto de la manera más fluida posible, evitando configuraciones tediosas. Para cumplir con este requisito, configurar el proyecto de manera local no es la mejor opción. Deberás buscar una solución basada en la nube que permita un entorno de desarrollo configurado de manera centralizada 😉.

Descripción
Crearás un entorno de desarrollo que cumpla con las necesidades mencionadas anteriormente. Quieres poder comenzar a escribir código sin necesidad de instalar recursos localmente en tu máquina.

GitHub Codespaces es un entorno de desarrollo en la nube que nos ayudará a trabajar sin necesidad de instalar nada localmente en tu máquina, todo se hará en la nube. Aquí puedes ver más sobre lo que es un GitHub Codespace.

Durante el desarrollo (en un reto posterior), crearás recursos en Azure y configurarás tu repositorio en GitHub utilizando GitHub Actions, Azure CLI y GitHub CLI. No es necesario que crees recursos en Azure directamente desde el portal, ya que hemos preparado scripts que lo harán por ti. Solo necesitarás seguir las instrucciones y asegurarte de que todo esté correctamente configurado en tu repositorio de GitHub. Repetimos, sin embargo, que en este reto 01 de configuración NO crearás recursos de Azure, pues esto se realizará más adelante. De momento, considera esto solo como información complementaria.

La aplicación utiliza una variable de entorno llamada MONGODB_URI con el valor mongodb://localhost para conectarse a la base de datos MongoDB.

Por tanto, en primer lugar agrega este elemento en los Settings de tu repositorio, en la sección de Codespaces, como un secreto cifrado.

A continuación, crea un Codespace a partir del repositorio que se encuentra en tu cuenta de GitHub (Importante: El Codespace debe ser creado desde TU repositorio en TU cuenta).

Una vez dentro de tu Codespace, configúralo de acuerdo a las siguientes indicaciones:

Pasos para configurar tu Codespace:
Accede a la Paleta de Comandos presionando F1 o haciendo clic en el menú ☰ y seleccionando View → Command Palette.

Comienza a escribir dev container en la Paleta de Comandos.

Selecciona Codespaces: Add Development Container Configuration Files….

Selecciona Create a new configuration….

Selecciona From a predefined container configuration….

Desplázate hacia abajo y selecciona Node.js & Mongo DB.

Selecciona 22 (default) para la versión de Node.js.

En la siguiente pantalla, selecciona Azure CLI devcontainers y GitHub CLI devcontainers de las características adicionales y luego selecciona OK.

NOTA: Puedes escribir el nombre de la característica que deseas para filtrar la lista.
Selecciona Keep defaults.

Esto creará los archivos de definición del nuevo contenedor en la carpeta .devcontainer.
Abre la Paleta de Comandos nuevamente.

Escribe rebuild y selecciona Codespaces: Rebuild container.

Selecciona Rebuild Container en el cuadro de diálogo. Ahora tu contenedor se reconstruirá. No importa si eliges Rebuild o Full Rebuild, cualquiera de las dos opciones te permitirá reiniciar tu codespace con las herramientas necesarias para compilar tu aplicación.

IMPORTANTE: La reconstrucción del contenedor puede tardar varios minutos.
Una vez creado el Codespace y configurados los recursos, podrás ejecutar la aplicación con los siguientes comandos:

Primero:

npm install
Una vez instalados los paquetes, procede a ejecutar la aplicación:

npm run dev
En la pestaña Ports te aparecerá una dirección URL desde la cual puedes acceder a tu aplicación (clic derecho y elige la opción Abrir en Navegador).

NOTA: Si te aparece un error 502, en la pestaña Ports haz clic derecho en el puerto 3000, elige Stop Forwarding Port, luego regresa a la Terminal, presiona Ctrl C para cancelar y ejecuta de nuevo el comando npm run dev. Debería funcionar en esta segunda ocasión.

Criterios de Éxito
Has creado y configurado un entorno de desarrollo en la nube con los siguientes recursos instalados:
GitHub CLI
Azure CLI
MongoDB
Has creado un secreto encriptado para MONGODB_URI
Eres capaz de iniciar y ver la aplicación en el entorno de desarrollo basado en la nube.
Todos los cambios se fusionan en ‘main’ (debes confirmar los cambios y sincronizar).
No se instalaron recursos en tu máquina.
Recursos de Aprendizaje
GitHub Codespaces
Introducción a los contenedores dev
Configuración de un proyecto de Node.js para GitHub Codespaces
Adición de características a un archivo devcontainer.json
Reenviar puertos en tu codespace
Administración de secretos específicos de la cuenta para GitHub Codespaces
Desarrollar en un codespace
Precompilación de los codespaces
Tips
Ctl-` mostrará la ventana de la terminal en Codespaces.
Cmd-Shift-P (Mac) o Ctl-Shift-P (PC) abrirá la paleta de comandos.

Reto 02 - Añadir una Funcionalidad a la Aplicación Existente
< Reto Anterior - Home - Siguiente reto >

Introducción
El refugio sabe que hay mucho trabajo por hacer en la aplicación. Debido a que están intentando mover las cosas en la dirección correcta, quieren hacer un cambio rápido para asegurarse de que sus procesos de DevOps funcionen correctamente. Para lograrlo, el refugio desea mostrar las horas en las que el refugio está abierto durante el día actual. El refugio abre de 10 a.m. a 4 p.m. de lunes a viernes, y de 9 a.m. a 8 p.m. los sábados y domingos. Les gustaría tener esto como un nuevo componente de React en el proyecto para que pueda ser utilizado en diferentes lugares de la aplicación.

Descripción
Con el entorno de desarrollo creado y configurado, es hora de programar. Aunque el proyecto utiliza Next.js/React, no todos somos expertos en esos frameworks. Incluso los expertos pueden tener dificultades a veces para recordar la sintaxis. Y ningún desarrollador disfruta de las tareas tediosas que a menudo surgen al escribir código. GitHub Copilot es un programador auxiliar de IA entrenado con miles de millones de líneas de código y texto públicamente disponibles, diseñado para ofrecer sugerencias de código que mejoren y agilicen tu proceso de desarrollo.

IMPORTANTE: Como se destacó anteriormente, no se requiere experiencia en programación para este reto. Si necesitas la solución, sigue leyendo y encontrarás el código necesario. Intenta hacerlo por ti mismo y, si te atoras, como último recurso, revisa el código proporcionado más abajo.

Para este desafío, crearás un nuevo componente React llamado Hours.js en la carpeta components. Añadirás el código necesario para mostrar las horas del día actual de la semana. Después de crear el componente, actualizarás index.js en la carpeta pages para importar el componente recién creado y mostrarlo en la página.

IMPORTANTE: NO hagas commit de los archivos en la rama main. En un desafío próximo crearás un pull request. Por ello, se recomienda que primero crees una nueva rama (branch) y en ella realices la siguiente implementación:

Agrega el código del componente Hours (el archivo se llama Hours.js en la carpeta components).
Recuerda que te podemos proveer el archivo ya listo si tienes dudas.
La sintaxis para importar el componente Hours en index.js es import Hours from '../components/Hours';, y se puede colocar debajo de la línea que dice // TODO: Import Hours component.
La sintaxis para mostrar el componente Hours en index.js es <Hours />, y se puede añadir inmediatamente debajo de la línea que dice {/* TODO: Display Hours component */}.
Para los propósitos de este desafío, puedes leer el día actual desde el navegador sin tener en cuenta la zona horaria del usuario.
Criterios de Éxito
Has creado un nuevo componente llamado Hours que muestra las horas del día actual.
El componente Hours es llamado en index.js.
El horario del día actual se muestra correctamente en el sitio.
Recursos de Aprendizaje
Comenzando con React
Introducción a GitHub Copilot
Prueba Gratuita por 30 días de GitHub Copilot
Obtención de acceso gratuito a Copilot como estudiante, profesor o mantenedor de código abierto
Tips
Todos los componentes de React necesitan `import React from ‘react’; en la parte superior del archivo.
GitHub Copilot ofrece sugerencias basadas tanto en código como en comentarios. Puedes describir en lenguaje natural la tarea que estás intentando realizar y Copilot ofrecerá sugerencias.
Reescribir comentarios puede ayudar a que Copilot ofrezca diferentes sugerencias más cercanas a lo que estás buscando.
No te preocupes si no tienes experiencia programando. Aquí puedes encontrar un link para el archivo Hours.js.
Puedes obtener una prueba gratuita de un mes de GitHub Copilot para ayudarte en este reto.

Reto 03 - Integración continua y seguridad
< Reto Anterior - Home - Siguiente reto >

Introducción
El refugio ha visto muchas noticias preocupantes sobre brechas de seguridad en diversas aplicaciones, incluidas las gestionadas por organizaciones sin fines de lucro. De hecho, las organizaciones que tradicionalmente pueden no haber invertido en infraestructura pueden ser objetivos populares para los atacantes. El refugio quiere asegurarse de que su aplicación no contenga vulnerabilidades que puedan ser explotadas.

Descripción
Para este desafío, deberas configurar el escaneo para toda la cadena de suministro de software de la aplicación. Específicamente, deseas escanear tu código en busca de problemas potenciales cuando se realiza un pull request a la rama main. También quieres confirmar que los paquetes que utiliza el proyecto estén libres de vulnerabilidades conocidas. Finalmente, una vez que hayas configurado la seguridad, crearás un pull request con las actualizaciones de código que realizaste en el reto anterior.

El escaneo de vulnerabilidades, la ejecución de pruebas y la verificación de que el código compila típicamente se automatizan como parte de un proceso llamado integración continua (CI). La CI permite a los equipos validar rápidamente que el nuevo código no introduzca problemas en la base de código existente, mejorando tu capacidad para responder a las solicitudes de los clientes y reducir la sobrecarga de desarrollo. Para este hack, habilitarás GitHub Advanced Security, que es una parte común de un proceso completo de CI.

Criterios de Éxito
Demostrar que la revisión de dependencias está habilitada para el repositorio.
Demostrar que el escaneo de código está configurado para ejecutarse en todas los solicitudes de pull requests realizadas a main.
Verificar que la rama main esté configurada para requerir pull requests, y que tanto el escaneo de código como la revisión de dependencias deben aprobarse para que se complete un merge.
Demostrar que se ha realizado una solicitud de pull request a main y que todas las verificaciones han pasado.
IMPORTANTE: Realizarás el merge del PR en main en un reto posterior.

Recursos de Aprendizaje
Entender las GitHub Actions
Acerca del escaneo de código
Configurando el escaneo de código en un repositorio
Acerca de la revisión de dependencias
Configuración de la revisión de dependencias
Acerca de las ramas protegidas
Administrar una regla de protección de rama
Utilizar el control de código fuente en tu codespace
Tips
Para este hackaton, primero habilita la revisión de dependencias para el repositorio, espera a que se generen los pull-request correspondientes a las actualizaciones de los paquetes con vulnerabilidades (deberían ser 3). Luego, puedes proceder a habilitar el escaneo de código.
El motivo del orden anterior se debe a que con la configuración predeterminada de escaneo de código, éste no se ejecutará con los pull requests generados por la revisión de dependencias, ocasionando una advertencia. En caso de obtener la advertencia, simplemente ignórala y continúa con tu trabajo.

Reto 04 - Crear un Entorno de Despliegue
< Reto Anterior - Home - Siguiente reto >

Introducción
Con la aplicación actualizada, ¡el refugio está listo para comenzar a configurar el despliegue! Han elegido usar Azure para alojar la aplicación. El sitio web se alojará en Azure Container Apps y la base de datos en Azure Cosmos DB para MongoDB.

El primer paso será crear y configurar el entorno en Azure. En un reto posterior, configurarás el despliegue continuo para el proyecto.

Descripción
Para este reto, crearás un GitHub workflow que utiliza un archivo Azure Bicep para configurar los recursos necesarios en Azure. Antes de ello, crearás un grupo de recursos para alojar los recursos de Azure, configurarás una identidad de servicio para otorgar los permisos necesarios a la Action, crearás la Action y la ejecutarás para crear los recursos.

La Configuración como Código (CaC), o configuración como código, es un enfoque para gestionar la configuración del sistema que implica definir los ajustes de configuración en archivos o scripts legibles por máquinas. Esto permite una gestión más eficiente, automatizada y consistente de la configuración del sistema, ya que los cambios pueden realizarse y desplegarse más fácilmente y con mayor control. Con la configuración como código, los ajustes de configuración se almacenan en archivos controlados por versiones, utilizando a menudo una sintaxis declarativa como YAML, JSON o HCL. Estos archivos pueden almacenarse junto con el código de la aplicación, facilitando la gestión de todo el ciclo de vida del desarrollo del software.

Este desafío utiliza Azure Bicep, que es un lenguaje específico de dominio para definir la infraestructura de Azure. Ya se ha creado un archivo Bicep para que lo uses (se localiza en la carpeta config de tu repositorio). El archivo Bicep:

Crea una instancia serverless de Azure Cosmos DB para MongoDB.
Crea los recursos para soportar una Azure Container App.
Crea la Azure Container App con una imagen predeterminada.
Configura la Azure Container App con la cadena de conexión para Azure Cosmos DB para MongoDB.
El archivo Bicep requiere un parámetro llamado namePrefix, que debe configurarse con 5 caracteres alfanuméricos aleatorios en minúsculas. Es importante mencionar que utilices 5 letras que te ayuden a identificar rápidamente los recursos, como por ejemplo las iniciales de tu nombre. Esto asegurará que todos los recursos tengan un nombre único.

Tips
Tip 1. Debes crear un grupo de recursos en tu suscripción de Azure. Como el nombre lo sugiere, un grupo de recursos sirve para agrupar recursos relacionados en un solo lugar. Puedes crearlo directamente desde el Portal de Azure o utilizar Azure CLI en una Terminal de tu GitHub Codespace. A continuación, se muestran los pasos para hacerlo desde la Terminal:

Inicia sesión en Azure introduciendo el siguiente comando:

 az login --use-device-code
Sigue las instrucciones en pantalla para completar el proceso de autenticación introduciendo el código indicado.

Crea un grupo de recursos denominado pets-workshop en la región West US ingresando el siguiente comando:

 az group create -n pets-workshop -l westus
Puedes utilizar otro nombre para el grupo de recursos y otra región para la ubicación. Sin embargo, se recomienda usar estos valores dado que, por ejemplo, actualmente algunas regiones de Azure presentan problemas de limitación de servicio (como East US) ocasionando que algunos recursos no puedan ser creados, en especial CosmosDB.

Registra los proveedores necesarios para los recursos que vas a crear, ejecutando los siguientes comandos uno por uno:

 az provider register --namespace Microsoft.OperationalInsights
 az provider register --namespace Microsoft.ContainerRegistry
 az provider register --namespace Microsoft.DocumentDB
 az provider register --namespace Microsoft.App
Tip 2. Debes crear un service principal, el cual es una identidad de seguridad que utilizan las aplicaciones, los servicios y las herramientas de automatización creados por el usuario para acceder a recursos específicos de Azure. Puedes hacerlo desde el Portal de Azure o en una Terminal de tu GitHub Codespace. A continuación, se muestran los pasos para hacerlo desde la Terminal:

Obtén el ID de tu suscripción de Azure ingresando el siguiente comando (copia el valor devuelto y pégalo en un bloc de notas para utilizarlo en el siguiente paso):

 az account show --query id -o tsv
Crea el service principal que se usará para administrar el grupo de recursos introduciendo el siguiente comando, reemplazando SUBSCRIPTION_ID con el ID de suscripción obtenido en el paso anterior (además, observa que se usa el grupo de recursos pets-workshop, modifica dicho valor en el comando si utilizaste un nombre distinto al crear el grupo):

 az ad sp create-for-rbac --name pets-workshop-app --role contributor --scopes /subscriptions/SUBSCRIPTION_ID/resourceGroups/pets-workshop --sdk-auth
Este comando devuelve un objeto JSON que sirve como credenciales utilizadas para crear los recursos en Azure e implementar la aplicación.

Copia la cadena JSON en un bloc de notas. Utilizarás este valor para registrarlo en un secreto en el paso siguiente.

Tip 3. Debes agregar en el repositorio los secretos y variables requeridos en la sección de Actions.

Secretos a agregar:
AZURE_CREDENTIALS: Este es un JSON que contiene las credenciales para administrar los recursos de Azure en el workflow.
AZURE_SUBSCRIPTION: Una cadena que representa el ID de tu suscripción a Azure.
Variables a agregar:
AZURE_RG: El nombre del grupo de recursos en Azure, por ejemplo, pets-workshop.
AZURE_PREFIX: Recuerda usar tus iniciales o una combinación de 5 caracteres alfanuméricos en minúsculas que te identifiquen para poder diferenciar tu proyecto.
Para agregar los secretos y variables:

Ve a la sección de “Secrets and Variables” en tu repositorio de GitHub.
Selecciona “New repository secret” o “New variable” según corresponda.
Introduce los valores necesarios y guarda los cambios.
Tip 4. Ahora sí, debes crear el workflow (GitHub Action) para desplegar los recursos en Azure a partir del archivo Bicep existente en combinación con los secretos y variables configurados. Este workflow debe correr bajo demanda (manualmente). Consulta los Recursos de Aprendizaje de este reto para determinar el código a escribir en el archivo .yml. Además, no olvides que el archivo Bicep existente en el repositorio requiere un parámetro namePrefix.

Tip adicional:
Si estás saturado, aquí puedes encontrar un ejemplo del archivo que puedes usar como referencia. Te pedimos que intentes hacerlo por ti mismo antes de utilizar el ejemplo.
Notas adicionales:
Este archivo debe guardarse en la ruta .github/workflows.
Este achivo debe existir en la rama main, por lo que si estás trabajando en una rama, deberás hacer un pull-request, confirmarlo y hacer merge.
Para ejecutar manualmente el workflow, debes dar clic en la pestaña Actions de tu repositorio, luego en el menú del lado izquierdo busca un workflow llamado Create Azure resources (o el nombre que hayas asignado en el archivo), a continuación del lado derecho da clic en el botón Run workflow y da clic en el botón verde Run workflow.
Una vez ejecutado con éxito tu workflow, accede al Portal de Azure para obtener la URL de tu aplicación. Dicha URL se encuentra en Inicio > Navegar > Grupos de recursos > pets-workshop > Busca tu recurso de tipo Aplicación contenedora > Información general > Dirección URL de la aplicación.
Criterios de Éxito
Demuestra que has creado un grupo de recursos en Azure para los recursos en la nube a utilizar por la aplicación.
Demuestra que has almacenado correctamente los valores necesarios para el flujo de trabajo en el repositorio, cifrando los valores que son sensibles.
Demuestra que has creado un nuevo GitHub workflow llamado create-azure-resources.yml con las siguientes opciones:
El GitHub workflow puede ser ejecutado manualmente.
Lee el prefijo y otros parámetros desde secretos y variables.
Demuestra que al navegar a la URL de la Aplicación Contenedor de Azure se muestra una pantalla con el mensaje Welcome to Azure Container Apps.
IMPORTANTE: La imagen predeterminada en el archivo Bicep incluye todos los recursos necesarios para desplegar la aplicación predeterminada. NO actualices el código del archivo Bicep en este reto 04.

Recursos de Aprendizaje
¿Qué es la infraestructura como código (IaC)?
Entender las GitHub Actions
Guía de inicio rápido: implementación de archivos de Bicep mediante Acciones de GitHub
Ejecutar un flujo de trabajo manualmente
Contextos de GitHub Actions
Uso de secretos en Acciones de GitHub
Variables de GitHub Actions
Crear secretos de Actions usando GitHub CLI

Reto 05 - Despliegue del proyecto
< Reto Anterior - Home

Introducción
El refugio está bastante satisfecho. Has actualizado la aplicación con una nueva característica, configurado controles de seguridad y creado un entorno en Azure para alojar el proyecto. ¡Ha llegado el momento de desplegar el proyecto!

Dado que la aplicación continuará creciendo con nuevas características en un futuro cercano, el refugio desea asegurar que el proceso de despliegue sea eficiente. Siempre que se envíe nuevo código a main, este debería ser desplegado en producción.

Descripción
Completarás este hack creando una última GitHub Action para desplegar el proyecto en Azure. Desplegar un proyecto puede ser bastante complejo dependiendo de los servicios utilizados y del acuerdo de nivel de servicio (SLA) que se necesita cumplir. Por ejemplo, es posible que necesites configurar un despliegue azul/verde para asegurar que no haya tiempo de inactividad cuando se publiquen nuevas características. Puedes hablar sobre diferentes escenarios con los mentores coach.

Para los propósitos de este hack, desplegarás en el entorno que creaste anteriormente cuando el código se envíe (push) a main.

Nota: En el archivo Bicep, hay que hacer un cambio que está comentado. Búscalo, haz el cambio y asegurando que estés en la rama main. IMPORTANTE: Para que el cambio surja efecto, debes ejecutar manualmente de nuevo el workflow del reto anterior antes de hacer este despliegue.

Si te sientes abrumado con la action a crear, aquí puedes encontrar un ejemplo de la acción a crear. Te pedimos que intentes hacerlo por ti mismo antes de utilizar el ejemplo.

Criterios de Éxito
Demuestra que se ha creado un GitHub Action que despliega el sitio web en Azure Container Apps cuando el código se envía a main.
Verifica que la PR que creaste anteriormente se haya enviado a main.
Demuestra que el sitio público muestra la aplicación del refugio, incluyendo la información de horarios del componente que creaste anteriormente.
Recursos de Aprendizaje
Entender las GitHub Actions
Activar un flujo de trabajo
Implementación en Azure Container Apps con Acciones de GitHub
Azure Container Apps Build and Deploy - GitHub Actions
Contextos de GitHub Actions
Uso de secretos en GitHub Actions
Tips
El nombre del ‘Azure Container Registry’ será <your_prefix>acr
El nombre de la ‘Azure Container App’ será <your_prefix>containerapp
El nombre de la ‘Azure Container App’ será <your_prefix>containerappenvironment
<your_prefix> se refiere a la variable AZURE_PREFIX creada en el reto anterior.
Puedes concatenar cadenas al definir un workflow usando secretos o variables y literales de cadena.
Resumen y próximos pasos
¡Felicitaciones! Has explorado los componentes principales de DevOps y cómo GitHub puede respaldar un ciclo de vida de desarrollo común. Comenzaste creando un repositorio y luego habilitando las configuraciones para proteger tu código. Creaste un entorno en el cual codificar y habilitaste la integración continua. Modificaste el código y exploraste el flujo de GitHub. Y, por último, implementaste tu aplicación en la nube. Con estas habilidades, puedes seguir desarrollando y aumentando tu conocimiento de DevOps.

IMPORTANTE:: Recuerda tomar una captura de pantalla de tu aplicación ejecutándose en Azure. Debe mostrar la URL así como una mascota con tu nombre completo. Una vez que ya no vayas a usar los recursos implementados en Azure, puedes eliminarlos ejecutando el siguiente comando en la Terminal de tu GitHub Codespace:

az group delete -n pets-workshop --yes

La eliminación de recursos puede demorar varios minutos.

--
Soluciones

Paso 1: Clonar el Repositorio y Configurar un Codespace
Clona el Repositorio en tu Cuenta de GitHub:

Si aún no lo has hecho, clona el repositorio que necesitas a tu propia cuenta de GitHub.
Accede a la Configuración de Codespaces en tu Repositorio:

Ve al repositorio clonado en tu cuenta de GitHub.
Haz clic en la pestaña "Settings" (Configuración).
En el menú de la izquierda, desplázate hacia abajo y selecciona "Codespaces".
Configura la variable de entorno MONGODB_URI como un secreto cifrado con el valor mongodb://localhost.
Crear un Codespace:

En la misma página de "Codespaces", haz clic en "New Codespace".
Asegúrate de crear el Codespace desde TU repositorio en TU cuenta.
Paso 2: Configurar el Entorno de Desarrollo en Codespaces
Abre la Paleta de Comandos:

Una vez dentro de tu Codespace, presiona F1 o haz clic en el menú ☰ en la parte superior izquierda, luego selecciona View → Command Palette.
Agregar Archivos de Configuración del Contenedor de Desarrollo:

Escribe dev container en la Paleta de Comandos.
Selecciona Codespaces: Add Development Container Configuration Files….
Luego selecciona Create a new configuration….
Escoge From a predefined container configuration….
Desplázate hacia abajo y selecciona Node.js & Mongo DB.
Seleccionar la Versión de Node.js:

Selecciona 22 (default) para la versión de Node.js.
Agregar Características Adicionales:

En la pantalla siguiente, selecciona Azure CLI devcontainers y GitHub CLI devcontainers como características adicionales.
Luego, selecciona OK.
Mantener los Valores Predeterminados:

Selecciona Keep defaults. Esto creará los archivos de definición del nuevo contenedor en la carpeta .devcontainer.
Reconstruir el Contenedor:

Abre la Paleta de Comandos nuevamente (F1).
Escribe rebuild y selecciona Codespaces: Rebuild container.
Selecciona Rebuild Container en el cuadro de diálogo que aparece. Esto reiniciará tu Codespace con las herramientas necesarias.
Paso 3: Ejecutar la Aplicación
Instalar las Dependencias:

Una vez que el contenedor esté listo, ejecuta el siguiente comando en la terminal de Codespace para instalar las dependencias:
bash
Copiar código
npm install
Ejecutar la Aplicación:

Luego, ejecuta la aplicación con el siguiente comando:
bash
Copiar código
npm run dev
Acceder a la Aplicación:

En la pestaña "Ports" de Codespaces, verás una URL generada para tu aplicación.
Haz clic derecho en el puerto 3000 y selecciona "Open in Browser" (Abrir en Navegador).
Notas Importantes:
Si encuentras un error 502, detén el forwarding del puerto 3000 en la pestaña "Ports", luego vuelve a ejecutar npm run dev en la terminal. Debería funcionar en la segunda ocasión.
La reconstrucción del contenedor puede tardar algunos minutos, así que ten paciencia.

Paso 2: Configurar la Variable de Entorno MONGODB_URI
Configura el Secreto Cifrado:
Ve al repositorio en tu cuenta de GitHub.
Haz clic en la pestaña "Settings" (Configuración).
En el menú de la izquierda, desplázate hacia abajo hasta la sección "Security" y selecciona "Secrets and variables".
Haz clic en "Actions" y luego en "New repository secret".
En "Name", escribe MONGODB_URI.
En "Value", ingresa mongodb://localhost.
Haz clic en "Add secret" para guardar.
Paso 3: Configurar el Entorno de Desarrollo en Codespaces
Abrir la Command Palette:

Dentro de tu Codespace, presiona F1 o haz clic en el menú ☰ en la esquina superior izquierda.
Selecciona View → Command Palette.
Agregar Archivos de Configuración del Contenedor de Desarrollo:

En la Command Palette, escribe dev container.
Selecciona Codespaces: Add Development Container Configuration Files….
Luego selecciona Create a new configuration….
Escoge From a predefined container configuration….
Desplázate hacia abajo y selecciona Node.js & Mongo DB.
Seleccionar la Versión de Node.js:

Selecciona 22 (default) para la versión de Node.js.
Agregar Características Adicionales:

En la siguiente pantalla, selecciona Azure CLI devcontainers y GitHub CLI devcontainers.
Luego, selecciona OK.
Mantener los Valores Predeterminados:

Selecciona Keep defaults. Esto creará los archivos de definición del contenedor en la carpeta .devcontainer.
Reconstruir el Contenedor:

Abre la Command Palette nuevamente (F1).
Escribe rebuild y selecciona Codespaces: Rebuild container.
Selecciona Rebuild Container en el cuadro de diálogo. Esto iniciará la reconstrucción del contenedor, que puede tardar varios minutos.
Paso 4: Ejecutar la Aplicación
Instalar las Dependencias:

Una vez que el contenedor esté listo, ejecuta el siguiente comando en la terminal de Codespace para instalar las dependencias:
bash
Copiar código
npm install
Ejecutar la Aplicación:

Luego, ejecuta la aplicación con el siguiente comando:
bash
Copiar código
npm run dev
Acceder a la Aplicación:

En la pestaña "Ports" de Codespaces, verás una URL generada para tu aplicación.
Haz clic derecho en el puerto 3000 y selecciona "Open in Browser" (Abrir en Navegador).

# Reto 2

Paso 1: Crear una Nueva Rama
Crear una Nueva Rama:
En tu terminal dentro de Codespaces, crea una nueva rama para trabajar en este reto:
bash
Copiar código
git checkout -b feature/add-hours-component
Paso 2: Crear el Componente Hours.js
Crear el Archivo del Componente:

Navega a la carpeta components en tu proyecto y crea un nuevo archivo llamado Hours.js.
Escribir el Código del Componente:

Abre el archivo Hours.js y agrega el siguiente código:
javascript
Copiar código
import React from 'react';

const Hours = () => {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 es domingo, 6 es sábado
    
    let hours;
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        hours = 'El refugio está abierto de 10 a.m. a 4 p.m. hoy.';
    } else {
        hours = 'El refugio está abierto de 9 a.m. a 8 p.m. hoy.';
    }

    return (
        <div>
            <h2>Horas de Operación</h2>
            <p>{hours}</p>
        </div>
    );
};

export default Hours;
Este componente determina el día de la semana y muestra el horario de apertura correspondiente.

Paso 3: Integrar el Componente en index.js
Importar el Componente Hours:

Abre el archivo index.js en la carpeta pages.
Agrega la siguiente línea de código debajo de la línea // TODO: Import Hours component:
javascript
Copiar código
import Hours from '../components/Hours';
Mostrar el Componente Hours:

Dentro del archivo index.js, coloca el componente en el lugar deseado. Por ejemplo, justo debajo de la línea {/* TODO: Display Hours component */}:
javascript
Copiar código
<Hours />
Paso 4: Verificar que Funciona
Ejecutar la Aplicación:

Si aún no has iniciado la aplicación, instálala y ejecútala:
bash
Copiar código
npm install
npm run dev
Verificar en el Navegador:

Abre la aplicación en el navegador desde la URL proporcionada en la pestaña "Ports".
Deberías ver el horario de operación del refugio según el día actual.
Paso 5: No Hacer Commit en la Rama main
Guardar tu Trabajo en la Nueva Rama:

Asegúrate de estar en la rama feature/add-hours-component:
bash
Copiar código
git status
Si todo está correcto, agrega y haz commit de los cambios:
bash
Copiar código
git add .
git commit -m "Add Hours component and integrate with index.js"
Subir la Rama a GitHub:

Sube tu rama a tu repositorio en GitHub:
bash
Copiar código
git push origin feature/add-hours-component
