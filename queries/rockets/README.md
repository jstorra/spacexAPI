# Consulta para obtener todas las imagenes los cohetes

**Method** : `POST`

**Version** : `v4`

**URL** : `https://api.spacexdata.com/v4/rockets/query`

**Storage**   :  `v4.js`

**Modulo** :  `getAllImgRoc`

**Query** :  

```js
{
    options: {
        select: {
            flickr_images: 1
        }
    }
}
```

**Auth required** : `False`

## Success Responses

**Code** : `200 OK`

```json
[    
	{
        img: [
            "https://imgur.com/DaCfMsj.jpg"
            "https://imgur.com/azYafd8.jpg"
        ]
    },
    ...
]
```