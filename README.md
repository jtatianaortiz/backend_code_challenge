# Sendifico

## Backend code challenge - PokeAPI Connector

### ¡Bienvenidos / as!

### Tabla de Contenido

- [Introducción](#introducción)
- [Instrucciones de la Prueba Técnica](#instrucciones-de-la-prueba-técnica)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Dependencia](#dependencia)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Documentación de la API](#documentación-de-la-api)
  - [EndPoints](#endpoints)
- [Instalación](#instalación)
  - [Clonar el repositorio](#clonar-el-repositorio)
  - [Environment](#environment)
  - [Ejecutar con npm](#ejecutar-con-npm)
  - [Scripts disponibles](#scripts-disponibles)
- [Acceso a la API en Render](#acceso-a-la-api-en-render)

- [Desarrollador ✒️](#desarrollador-✒️)

## Introducción

Esta prueba técnica fue realizada con Node.js, TypeScript y Express para construir una API que interactúa con la [PokeAPI](https://pokeapi.co/docs/v2), una API pública que proporciona datos detallados sobre los Pokémon, incluyendo sus características, tipos, habilidades, movimientos, entre otros.

## Instrucciones de la Prueba Técnica

[Detalles de la prueba técnica](https://drive.google.com/file/d/1OjTy463p1QfxLvLk9_StydQd1cQ7VjHx/view?usp=sharing)

## Tecnologías Utilizadas

- Node.js
- Express
- Axios
- TypeScript

## Dependencia

Al ejecutar este proyecto, las versiones y dependencias son las siguientes:

- [axios](https://axios-http.com/docs/intro) - **1.7.7**
- [cors](https://www.npmjs.com/package/cors#installation) - **2.8.5**
- [dotenv](https://www.dotenv.org/docs/) - **16.4.5**
- [express](https://expressjs.com/) - **4.21.0**
- [node.js](https://nodejs.org/en) - **20.15.0**
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev) - **2.0.0**
- [typescript](https://www.typescriptlang.org/) - **5.6.2**

## Estructura del proyecto

La estructura del proyecto se basó en la Arquitectura Limpia o Clean Architecture. Esto nos brinda un diseño robusto y mantenible.

```
├── src
│   ├── application
│       └── services
│   ├── config
│   ├── domain
│   ├── interfaces
│       ├── controllers
│       └── routes
│   ├── utils
│   ├── app.ts
│   └── server.ts
├── .env
├── .env.example
├── .gitignore
├── package-lock.json
└── package.json
├── README.md
└── tsconfig.json
```

## Documentación de la API

## EndPoints

### Obtener Información de los 100 primeros Pokémon

- **Método**: `GET`
- **Ruta**: `/api/pokemon`
- **Descripción**: Devuelve los 100 primeros Pokémon, con su _nombre_ y _url_.
- **Respuesta**:
  ```
    {
      "results": [
          {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/"
          },
          {
            "name": "ivysaur",
            "url": "https://pokeapi.co/api/v2/pokemon/2/"
          },
          {
            "name": "voltorb",
            "url": "https://pokeapi.co/api/v2/pokemon/100/"
          }
      ]
    }
  ```

### Obtener Información de un Pokémon por ID

- **Método**: `GET`
- **Ruta**: `/api/pokemon/{id}`
- **Parámetros**:
  - `id`: El ID del Pokémon (número entero).
- **Descripción**: Devuelve información especifica de un Pokémon basado en su ID.
- **Respuesta**:
  ```
    {
      "name": "bulbasaur",
      "types": [
        {
          "slot": 1,
          "type": {
            "name": "grass",
            "url": "https://pokeapi.co/api/v2/type/12/"
          }
        },
        {
          "slot": 2,
          "type": {
            "name": "poison",
            "url": "https://pokeapi.co/api/v2/type/4/"
          }
        }
      ]
    }
  ```

### Obtener Información de un Pokémon junto con su traducción

- **Método**: `GET`
- **Ruta**: `/api/pokemonAndTypes/{id}`
- **Parámetros**:
  - `id`: El ID del Pokémon (número entero).
- **Descripción**: Devuelve información específica de un Pokémon basado en su ID, junto con las traducciones al español y japonés de cada uno de sus tipos.
- **Respuesta**:
  ```
    {
      "name": "bulbasaur",
      "types": [
        {
          "slot": 1,
          "type": {
            "name": "grass",
            "url": "https://pokeapi.co/api/v2/type/12/",
            "names": [
              {
                "language": {
                  "name": "es",
                  "url": "https://pokeapi.co/api/v2/language/7/"
                },
                "name": "Planta"
              },
              {
                "language": {
                  "name": "ja",
                  "url": "https://pokeapi.co/api/v2/language/11/"
                },
                "name": "くさ"
              }
            ]
          }
        },
        {
          "slot": 2,
          "type": {
            "name": "poison",
            "url": "https://pokeapi.co/api/v2/type/4/",
            "names": [
              {
                "language": {
                  "name": "es",
                  "url": "https://pokeapi.co/api/v2/language/7/"
                },
                "name": "Veneno"
              },
              {
                "language": {
                  "name": "ja",
                  "url": "https://pokeapi.co/api/v2/language/11/"
                },
                "name": "どく"
              }
            ]
          }
        }
      ]
    }
  ```

## Instalación

## Clonar el repositorio

1. Clonar el repositorio en tu maquina local.
2. Navegar a la carpeta del proyecto.

```

git clone https://github.com/jtatianaortiz/backend_code_challenge.git

```

## Environment

Se requiere la configuración de las variables de entorno del proyecto:

1. Duplicar el archivo **.env.example**
2. Cambiar el nombre del archivo duplicado a **.env**

## Ejecutar con npm

1. Verificar la versión de Node.js.
2. Abrir la terminal y ejecutar los siguientes comandos:

   - Instala las dependencias del proyecto.
     ```
     $ npm i
     ```
   - Inicia la aplicación.
     ```
     $ npm run dev
     ```

**Nota:** En tal caso que la versión de Node.js no coincida y se tenga una versión diferente, se puede instalar **NVM**, el cual nos permitirá administrar múltiples versiones de Node.js.

## Scripts disponibles

- Ejecuta la aplicación en un entorne de producción.
- Actualmente esta compilando y ejecutando el proyecto en un solo comando.

```
$ npm run start
```

- Ejecuta la aplicación en un entorno de desarrollo.

```
$ npm run dev
```

- Permite la compilación y preparación de la aplicación. Compila el código TypeScript a JavaScript en la carpeta dist.

```
$ npm run build
```

## Acceso a la API en Render

La prueba técnica fue desplegada en [Render](https://render.com) y se puede acceder a ella a través de la siguiente URL:

**URL**: [https://backend-code-challenge-x6tm.onrender.com](https://backend-code-challenge-x6tm.onrender.com)

Se puede utilizar para hacer solicitudes a la API desde herramientas como: Postman, curl, o desde cualquier aplicación frontend que consuma esta API.

### Ejemplos de Uso

#### Usando `curl`

```
curl https://backend-code-challenge-x6tm.onrender.com/api/pokemon/1
```

## Desarrollador ✒️

- **Tatiana Ortiz** - _[Software Developer 💻](https://www.linkedin.com/in/jtatianaortiz/)_
