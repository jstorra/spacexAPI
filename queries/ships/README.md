# Consulta para obtener todas las imagenes de los ships

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

```json
[
  "img": [
    "https://i.imgur.com/woCxpkj.jpg",
    "https://i.imgur.com/jmj8Sh2.jpg",
    ...
  ]
]
```

## Error Responses

**Code** : `400 Bad Request`

**Content** : Mongoose error is shown, with suggestions to fix the query.
