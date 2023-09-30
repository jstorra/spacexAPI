# Consulta para obtener todas las imagenes de los rockets

**Method** : `POST`

**Version** : `v4`

**URL** : `https://api.spacexdata.com/v4/rockets/query`

**Storage** : `v4.js`

**Modulo** : `getAllImgRockets`

**Query** :

```js
{
  options: {
    select: {
      flickr_images: 1;
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
    "https://imgur.com/DaCfMsj.jpg",
    "https://imgur.com/azYafd8.jpg"
  ],
...
]
```

## Error Responses

**Code** : `400 Bad Request`

**Content** : Mongoose error is shown, with suggestions to fix the query.
