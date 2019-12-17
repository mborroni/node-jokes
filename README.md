# Project 4: Node Jokes

En este ejercicio vamos a construir una pequeña **aplicación de línea de comandos (CLI)**, utilizando los módulos `fs` y `request` de la _API de Node_, que nos permita [realizar _requests_ a una _API_](https://github.com/undefinedschool/notes-nodejs/blob/master/README.md#haciendo-requests-con-node) y almacenar el resultado en un archivo de texto. Además, vamos a utilizar los paquetes [`chalk`](https://www.npmjs.com/package/chalk) para loguear algunos mensajes por consola con diferentes formatos y [`prompt`](https://www.npmjs.com/package/prompt) para solicitar input del usuario.

**Nota:** para los _requests_ también pueden utilizar el paquete [`request`](https://www.npmjs.com/package/request) de NPM, que tiene una API mucho más simple

## Parte 1

Esta aplicación debe solicitar inout al usuario utilizando [`prompt`](https://www.npmjs.com/package/prompt). Este argumento será una _keyword_ que vamos a utilizar como término de búsqueda. La aplicación hará un _request_ al endpoint `/search` de la [_dad joke API_](https://icanhazdadjoke.com/api) (en formato JSON) para buscar algún chiste basado en esta keyword: si encuentra alguno, debe loguearlo por consola (en color verde, entre comillas) y guardarlo en el archivo `jokes.txt`. Si no encuentra ningún chiste, debe loguear por consola (en color rojo, entre comillas) el mensaje `"Acá no hacemos chistes con esas cosas."`

Cada nuevo chiste que agregamos al archivo `jokes.txt` debe escribirse dejando una línea en blanco respecto del anterior

```
Chiste 1
[LINEA EN BLANCO]
Chiste 2
[LINEA EN BLANCO]
Chiste 3
...
```

El código debe estar organizado en los siguientes módulos:

- un archivo `input.js`, donde escribiremos el código necesario para obtener el input del usuario
- un archivo `api.js`, donde escribiremos el código para hacer el request a la API y retornaremos el resultado en formato JSON
- un archivo `output.js`, donde escribiremos el código necesario para loguear los mensajes en consola, con los colores correspondientes.
- un archivo `index.js`, donde importaremos los módulos correspondientes y escribiremos el código necesario para correr la aplicación

```
|
|- api.js
|- index.js
|- input.js
|_ output.js
```

**Tip 1 :** usar [`nodemon`](https://www.npmjs.com/package/nodemon) y crear el script `dev: nodemon index.js` en el `package.json` para desarrollar

**Tip 2:** chequear estrategias en [callbackhell.com](http://callbackhell.com/) para lidiar con los callbacks anidados y reducir la complejidad. Siempre que se pueda, modularizar el código en funnciones que hagan 1 cosa. Los callbacks pueden ser funciones auxiliares definidas aparte.

## Parte 2 (un poco más difícil)

Si el programa recibe además el string `leaderboard` como parte del input (ej: `medialunas leaderboard`), la aplicación debe loguear entre comillas y sin formato extra, el chiste más popular de los obtenidos, basado en cuántas veces aparece en el archivo `jokes.txt`, seguido del texto `"#ElMasPopular"`, en color azul claro. Ver ejemplo debajo

![](https://i.imgur.com/7t0jOQn.png)

En el caso de que no haya un chiste más popular que el resto, obtener uno de forma aleatoria.

Para resolver esta segunda parte, agregaremos el módulo `leaderboard.js` para escribir la lógica correspondiente

```
|
|- api.js
|- index.js
|- input.js
|- leaderboard.js
|_ output.js
```

### Nota

En el caso de que lo consideren necesario, se pueden agregar más módulos, siempre y cuando estén los requeridos. Tener en cuenta siempre las buenas prácticas y refactorizar el código cuando sea necesario para mejorar la claridad y legibilidad del mismo.
