# SpaceX Image Retrieval

Este repositorio contiene un conjunto de funciones JavaScript para recuperar imágenes relacionadas con lanzamientos espaciales, cohetes, naves, núcleos de cohetes y cápsulas de SpaceX utilizando la API de SpaceX.

## Contenido

- [Instrucciones de Uso](#instrucciones-de-uso)
- [Funciones Disponibles](#funciones-disponibles)
- [Storage de consultas](#storage-de-consultas)
- [Queries de consultas](#queries-de-consultas)
- [Uso de queries SpaceX v4](#uso-queries-spacex-v4)
- [Datos de consulta](#spacex-datos-de-consulta)

## Instrucciones de Uso

1. Clona este repositorio o descárgalo como archivo ZIP en tu computadora.

   ```bash
   git clone https://github.com/jstorra/spacexAPI.git
   ```

2. Asegúrate de tener un entorno de desarrollo JavaScript configurado.

3. Importa las funciones que necesitas en tu proyecto en el archivo `main.js`:

   ```js
   // importaciones por defecto
   import { getAllImgLaunches } from "./storage/v3.js";
   import {
     getAllImgRockets,
     getAllImgShips,
     getAllImgCores,
     getAllImgCapsules,
   } from "./storage/v4.js";
   ```

4. Utiliza las funciones según sea necesario para obtener las imágenes que deseas.

   ```js
   let res = await getAllImgCapsules();
   console.log(res);
   ```

5. Abre el archivo `index.html` en tu navegador web, inspecciona y en la consola se reflejaran los resultados.

## Funciones Disponibles

`getAllImgLaunches`: Recupera imágenes relacionadas con lanzamientos espaciales de SpaceX.

`getAllImgRockets`: Recupera imágenes de cohetes SpaceX.

`getAllImgShips`: Recupera imágenes de naves SpaceX.

`getAllImgCores`: Recupera imágenes de los patch de los launches en los que han estado los núcleos de cohetes SpaceX.

`getAllImgCapsules`: Recupera imágenes de los patch de los launches en los que han estado las cápsulas SpaceX.

## Storage de consultas

Uso de diferentes versiones segun las consultas:

- [V3](storage/v3.js)
- [V4](storage/v4.js)

## Queries de consultas

- [Launches](queries/launches)
- [Rockets](queries/rockets)
- [Cores](queries/cores)
- [Ships](queries/ships)
- [Capsules](queries/capsules)

## Uso queries SpaceX v4

En el siguiente **README** se especificara a detalle el uso de las queries para la version 4 de la API de SpaceX.

- [Queries Guide](queries/queries.md)

## SpaceX: Datos de consulta

[API V3](https://docs.spacexdata.com/)

[API V4](https://github.com/r-spacex/SpaceX-API/tree/master/docs#rspacex-api-docs)

- **Launches:** El endpoint `/launches` devuelve un listado de lanzamientos, cada uno de los cuales tiene una propiedad `links` que contiene un enlace a una imagen de la misión.
- **Rockets:** El endpoint `/rockets` devuelve un listado de cohetes, cada uno de los cuales tiene una propiedad `images` que contiene un array de imágenes del cohete.
- **Cores:** El endpoint `/cores` devuelve un listado de núcleos de cohetes, cada uno de los cuales tiene una propiedad `images` que contiene un array de imágenes del núcleo.
- **Ships:** El endpoint `/ships` devuelve un listado de naves espaciales, cada una de las cuales tiene una propiedad `images` que contiene un array de imágenes de la nave.
- **Capsules:** El endpoint `/capsules` devuelve un listado de cápsulas, cada una de las cuales tiene una propiedad `images` que contiene un array de imágenes de la cápsula.

Para obtener una imagen específica, se puede usar el siguiente formato de URL:

```
https://docs.spacexdata.com/api/v3/[endpoint]/[id]/image
```

Por ejemplo, para obtener la imagen del lanzamiento número 100, se puede usar la siguiente URL:

```
https://docs.spacexdata.com/api/v3/launches/100/image
```

Esta URL devolverá una imagen en formato JPEG.

- **Launches:** El endpoint `/launches` devuelve un listado de lanzamientos, cada uno de los cuales tiene una propiedad `crew` que contiene un array de objetos con los datos de los tripulantes. Cada objeto de tripulación tiene las siguientes propiedades:
  - `name`: El nombre del tripulante.
  - `role`: El rol del tripulante en la misión.
  - `agency`: La agencia espacial a la que pertenece el tripulante.
- **CrewedFlights:** El endpoint `/crewed_flights` devuelve un listado de misiones tripuladas, cada una de las cuales tiene una propiedad `crew` que contiene un array de objetos con los datos de los tripulantes. Cada objeto de tripulación tiene las mismas propiedades que en el endpoint `/launches`.

Para obtener los nombres de los tripulantes de una misión específica, se puede usar el siguiente formato de URL:

```
https://docs.spacexdata.com/api/v3/[endpoint]/[id]/crew
```

Por ejemplo, para obtener los nombres de los tripulantes del lanzamiento número 100, se puede usar la siguiente URL:

```
https://docs.spacexdata.com/api/v3/launches/100/crew
```

Esta URL devolverá un array de objetos con los datos de los tripulantes.

Según el API docs.spacexdata.com, el endpoint `/launches` tiene la descripción importante de cada misión. Este endpoint devuelve un listado de lanzamientos, cada uno de los cuales tiene una propiedad `details` que contiene un objeto con información adicional sobre la misión. La propiedad `details` tiene una propiedad `description` que contiene una descripción importante de la misión.

Para obtener la descripción importante de una misión específica, se puede usar el siguiente formato de URL:

```
https://docs.spacexdata.com/api/v3/launches/[id]/details
```

Por ejemplo, para obtener la descripción importante del lanzamiento número 100, se puede usar la siguiente URL:

```
https://docs.spacexdata.com/api/v3/launches/100/details
```

Esta URL devolverá un objeto con la información adicional sobre la misión, incluida la descripción importante.

- **Recursos**:

  https://www.youtube.com/watch?v=VOd-IgDQuGw&ab_channel=divcode

  https://www.youtube.com/watch?v=hYv6BM2fWd8&ab_channel=webdecoded

  https://www.youtube.com/watch?v=z4PVKtHeQmY&ab_channel=Mr.WebDesigner

  https://www.youtube.com/watch?v=00Ak_raFngc&ab_channel=AnimationCoding

---

<p align="center">Developed by <a href="https://github.com/jstorra">@jstorra</a></p>
