# Schema Cores

**URL** : `https://api.spacexdata.com/v3/cores`

| Campo         | Tipo   | Único | Requerido | Por Defecto | Valores Enumerados                                 |
| ------------- | ------ | ----- | --------- | ----------- | -------------------------------------------------- |
| serial        | String | true  | true      |             |                                                    |
| block         | Number |       |           | null        |                                                    |
| status        | String |       | true      |             | active, inactive, unknown, expended, lost, retired |
| reuse_count   | Number |       |           | 0           |                                                    |
| rtls_attempts | Number |       |           | 0           |                                                    |
| rtls_landings | Number |       |           | 0           |                                                    |
| asds_attempts | Number |       |           | 0           |                                                    |
| asds_landings | Number |       |           | 0           |                                                    |
| last_update   | String |       |           | null        |                                                    |
| launches      | UUID   |       |           |             |                                                    |
