# Schema Ships

**URL** : `https://api.spacexdata.com/v3/ships`

| Campo           | Tipo     | Único | Requerido | Predeterminado |
| --------------- | -------- | ----- | --------- | -------------- |
| name            | String   | true  | true      | -              |
| legacy_id       | String   |       |           | null           |
| model           | String   |       |           | null           |
| type            | String   |       |           | null           |
| roles           | String[] |       |           |                |
| active          | Boolean  | true  | true      | -              |
| imo             | Number   |       |           | null           |
| mmsi            | Number   |       |           | null           |
| abs             | Number   |       |           | null           |
| class           | Number   |       |           | null           |
| mass_kg         | Number   |       |           | null           |
| mass_lbs        | Number   |       |           | null           |
| year_built      | Number   |       |           | null           |
| home_port       | String   |       |           | null           |
| status          | String   |       |           | null           |
| speed_kn        | Number   |       |           | null           |
| course_deg      | Number   |       |           | null           |
| latitude        | Number   |       |           | null           |
| longitude       | Number   |       |           | null           |
| last_ais_update | String   |       |           | null           |
| link            | String   |       |           | null           |
| image           | String   |       |           | null           |
| launches        | UUID[]   |       |           |                |
