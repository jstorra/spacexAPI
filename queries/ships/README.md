# Consulta para obtener todas las imagenes los ships

**Method** : `POST`

**Version** : `v4`

**URL** : `https://api.spacexdata.com/v4/ships/query`

**Storage** : `v4.js`

**Modulo** : `getAllImgShips`

**Query** :

```js
{
  options: {
    select: {
      image: 1;
    }
  }
}
```

**Auth required** : `False`

## Success Responses

**Code** : `200 OK`

```js
[
  img: [
    "https://imgur.com/DaCfMsj.jpg",
    "https://imgur.com/azYafd8.jpg",
    ...
  ]
]
```
