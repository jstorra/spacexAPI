# Consulta para obtener todas las imagenes de los patch de las capsules

**Method** : `POST`

**Version** : `v4`

**URL** : `https://api.spacexdata.com/v4/capsules/query`

**Storage** : `v4.js`

**Modulo** : `getAllImgCapsules`

**Query** :

```js
{
  options: {
    select: "launches",
    populate: {
      path: "launches",
      select: "links.patch"
    }
  }
}
```

**Auth required** : `False`

## Success Responses

**Code** : `200 OK`

```json
[
  "images": [
    {
      "large_patch": "https://images2.imgbox.com/5b/02/QcxHUb5V_o.png",
      "small_patch": "https://images2.imgbox.com/94/f2/NN6Ph45r_o.png"
    },
  ...
  ],
...
]
```

## Error Responses

**Code** : `400 Bad Request`

**Content** : Mongoose error is shown, with suggestions to fix the query.
