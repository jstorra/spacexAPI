# Schema Capsules

**URL** : `https://api.spacexdata.com/v3/capsules`

| Campo          | Tipo   | Requerido | Valor por Defecto | Valores Permitidos                  |
| -------------- | ------ | --------- | ----------------- | ----------------------------------- |
| serial         | String | true      |                   |                                     |
| status         | String | true      |                   | unknown, active, retired, destroyed |
| type           | String | true      |                   | Dragon 1.0, Dragon 1.1, Dragon 2.0  |
| dragon         | UUID   |           |                   |                                     |
| reuse_count    | Number |           | 0                 |                                     |
| water_landings | Number |           | 0                 |                                     |
| land_landings  | Number |           | 0                 |                                     |
| last_update    | String |           | null              |                                     |
| launches       | UUID[] |           |                   |                                     |
