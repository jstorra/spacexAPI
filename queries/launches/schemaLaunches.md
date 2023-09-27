# Schema Launches

**URL** : `https://api.spacexdata.com/v3/launches`

| Campo                 | Tipo    | Requerido | Único | Por defecto | Valores Enumerados                    |
| --------------------- | ------- | --------- | ----- | ----------- | ------------------------------------- |
| flight_number         | Number  | true      |       |             |                                       |
| name                  | String  | true      | true  |             |                                       |
| date_utc              | String  | true      |       |             |                                       |
| date_unix             | Number  | true      |       |             |                                       |
| date_local            | String  | true      |       |             |                                       |
| date_precision        | String  | true      |       |             | half, quarter, year, month, day, hour |
| static_fire_date_utc  | String  |           |       | null        |                                       |
| static_fire_date_unix | Number  |           |       | null        |                                       |
| tdb                   | Boolean |           |       | false       |                                       |
| net                   | Boolean |           |       | false       |                                       |
| window                | Number  |           |       | null        |                                       |
| rocket                | UUID    |           |       | null        |                                       |
| success               | Boolean |           |       | null        |                                       |
| failures              | Object  |           |       |             |                                       |
| - time                | Number  |           |       |             |                                       |
| - altitude            | Number  |           |       |             |                                       |
| - reason              | String  |           |       |             |                                       |
| upcoming              | Boolean | true      |       |             |                                       |
| details               | String  |           |       | null        |                                       |
| fairings              | Object  |           |       |             |                                       |
| - reused              | Boolean |           |       | null        |                                       |
| - recovery_attempt    | Boolean |           |       | null        |                                       |
| - recovered           | Boolean |           |       | null        |                                       |
| - ships               | UUID    |           |       |             |                                       |
| crew                  | Array   |           |       |             |                                       |
| -                     | UUID    |           |       |             |                                       |
| ships                 | Array   |           |       |             |                                       |
| -                     | UUID    |           |       |             |                                       |
| capsules              | Array   |           |       |             |                                       |
| -                     | UUID    |           |       |             |                                       |
| payloads              | Array   |           |       |             |                                       |
| -                     | UUID    |           |       |             |                                       |
| launchpad             | UUID    |           |       | null        |                                       |
| cores                 | Array   |           |       |             |                                       |
| -                     | Object  |           |       |             |                                       |
| - core                | UUID    |           |       | null        |                                       |
| - flight              | Number  |           |       | null        |                                       |
| - gridfins            | Boolean |           |       | null        |                                       |
| - legs                | Boolean |           |       | null        |                                       |
| - reused              | Boolean |           |       | null        |                                       |
| - landing_attempt     | Boolean |           |       | null        |                                       |
| - landing_success     | Boolean |           |       | null        |                                       |
| - landing_type        | String  |           |       | null        |                                       |
| - landpad             | UUID    |           |       | null        |                                       |
| links                 | Object  |           |       |             |                                       |
| - patch               | Object  |           |       |             |                                       |
| - small               | String  |           |       | null        |                                       |
| - large               | String  |           |       | null        |                                       |
| - reddit              | Object  |           |       |             |                                       |
| - campaign            | String  |           |       | null        |                                       |
| - launch              | String  |           |       | null        |                                       |
| - media               | String  |           |       | null        |                                       |
| - recovery            | String  |           |       | null        |                                       |
| - flickr              | Object  |           |       |             |                                       |
| - small               | Array   |           |       |             |                                       |
| - original            | Array   |           |       |             |                                       |
| - presskit            | String  |           |       | null        |                                       |
| - webcast             | String  |           |       | null        |                                       |
| - youtube_id          | String  |           |       | null        |                                       |
| - article             | String  |           |       | null        |                                       |
| - wikipedia           | String  |           |       | null        |                                       |
| auto_update           | Boolean |           |       | true        |                                       |
