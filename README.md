# PresupuestoControlado

Este proyecto es una aplicación diseñada para el control de gastos desde un presupuesto definido, se basa directamente en el registro de un presupuesto y los correspondientes gastos, avisando así cuanto dinero le queda al usuario y cuando debería tener cuidado.\

El enfoque principal es cuando nos referimos a avisar cuando se debería tener cuidado, ya que el aplicativo avisa con un cambio de color de fondo cuando el dinero restante es menor al 50% del inicial como nivel medio, o cuando es menor al 25% del inicial como nivel bajo.

## ¿De dónde surge el proyecto?

La iniciativa de este proyecto entra cuando se encuentra una problematica muy grande en el control de el dinero de las personas. Es decir, mucha gente cuando posee dinero no calcula muy bien cuanto debería gastar; Y aunque no nos enfoquemos en hacer estos calculos, logramos presentar una señal de que se debería a pensar más en que se gasta el dinero.

## ¿Cómo funciona el proyecto?

### En términos funcionales

La aplicación contiene un principal formulario donde se pone el presupuesto inicial, al digitar el presupuesto inicial nos lleva al apartado de control de registros, donde ya queda a nuestra disposición registrar cada gasto.\ 

Para este apartado de control nos encontramos un formulario donde nos permite digitar el gasto ( nombre del gasto ) y el valor ( valor del gasto ). También se encuentra un contenedor de el presupuesto inicial y el presupuesto restante. Y por último tenemos la lista de los gastos.\ 

Se busca que cada registro se guarde correctamente, por lo cual es obligatorio registrar el gasto y el valor. Al registrar el dato, se descuenta del presupuesto restante, el valor del gasto actuado, y se calcula si el presupuesto restante es inferior al 50% ó 25% del presupuesto inical. Y claramanete se agrega a la lista de gastos.\ 

Cuando el presupuesto restante llega a 0, se pasa a una interfaz de elección donde nos permite poner otro presupuesto y comenzar todo el proceso nuevamente, o ver el registro para tener presente el recorrido y sus gastos, y así fácilitar una retroalimentación y concientización.\

ACLARACION: Los datos no se gestionan en ninguna base de datos, por lo cual solamente lo puede ver el usuario

### En términos técnicos

El proyecto fue desarrollado con JavaScript y su framework ReactJS ( hooks ), JSX para el simulador del HTML, CSS y CSS-in-JS en las hojas de estilos de los componentes, Bootstrap y React-Bootstrap como bibliotecas de estilos CSS./

Como se dijo anteriormente, en ReactJS se trabajó en su absoluto con hooks básicos. El almacenamiento de los registros, presupuesto inicial y presupuesto restante se guarda en el localStorage, por lo tanto la aplicación es solo frontend, y no tiene servidor, ni base de datos.

Las unicas dependencias adicionales son bootstrap, react-bootstrap ( ya explicadas anteriormente ) y shortid que nos funciona para crear identificadores unicos de cada gasto y poder iterarlos.

## ¿Cómo descargar el proyecto?

### `VS CODE, GIT y NODE`

Principalmente tenemos que tener descargados VS CODE, GIT y NODE ( npm ).
Recomiendo que se investigue acerca del uso de GIT y la instalación VS CODE y NODE, ya que acá no indagaremos mucho en esto.

### `git clone https://github.com/JakoPapaFrita/presupuesto`

Para comenzar la descarga, tenemos que crear una carpeta nueva ( donde vayamos a guardar la aplicación ) y en la consola de GIT poner este comando. Así se clonará este repositorio y tendremos el código a nuestra mano.

### `npm install`

Para instalar todas las dependencias y el proyecto, se debe ejecutar este comando en la consola de VS CODE o de nuestro ordenador ubicado en la carpeta donde está el repositorio clonado.

### `npm start`

Para iniciar la aplicación ejecutamos este comando en la consola seleccionada anteriormente, y en el navegador se nos abrirá el proyecto, en caso de que no sea así puedes buscar en el navegador: 'http://localhost:3000/'

## Preguntas, problemas ó sugerencias

Esta aplicación es libre de descarga para cualquier persona.

Cualquier problema, pregunta ó sugerencia puede ser comunicado a este correo: 'jacouribe2003@gmail.com'



