# Schema Rockets

**URL** : `https://api.spacexdata.com/v3/rockets`

| Campo               | Tipo     | Descripción                                |
| ------------------- | -------- | ------------------------------------------ |
| name                | String   | Nombre de la nave espacial                 |
| type                | String   | Tipo de la nave espacial                   |
| active              | Boolean  | Estado de activación                       |
| stages              | Number   | Número de etapas                           |
| boosters            | Number   | Número de impulsores                       |
| cost_per_launch     | Number   | Costo por lanzamiento                      |
| success_rate_pct    | Number   | Tasa de éxito en porcentaje                |
| first_flight        | String   | Fecha del primer vuelo                     |
| country             | String   | País de origen                             |
| company             | String   | Compañía fabricante                        |
| height              |          | Dimensiones de altura (metros y pies)      |
| - meters            | Number   | Altura en metros                           |
| - feet              | Number   | Altura en pies                             |
| diameter            |          | Dimensiones de diámetro (metros y pies)    |
| - meters            | Number   | Diámetro en metros                         |
| - feet              | Number   | Diámetro en pies                           |
| mass                |          | Masa (kg y lb)                             |
| - kg                | Number   | Masa en kilogramos                         |
| - lb                | Number   | Masa en libras                             |
| payload_weights     | Object   | Pesos de carga útil (objetos)              |
| first_stage         |          | Detalles de la primera etapa               |
| - reusable          | Boolean  | Reutilizable                               |
| - engines           | Number   | Número de motores                          |
| - fuel_amount_tons  | Number   | Cantidad de combustible en toneladas       |
| - burn_time_sec     | Number   | Tiempo de combustión en segundos           |
| - thrust_sea_level  |          | Empuje a nivel del mar (kN y lbf)          |
| - kN                | Number   | Empuje en kN                               |
| - lbf               | Number   | Empuje en lbf                              |
| - thrust_vacuum     |          | Empuje en el vacío (kN y lbf)              |
| - kN                | Number   | Empuje en kN                               |
| - lbf               | Number   | Empuje en lbf                              |
| second_stage        |          | Detalles de la segunda etapa               |
| - reusable          | Boolean  | Reutilizable                               |
| - engines           | Number   | Número de motores                          |
| - fuel_amount_tons  | Number   | Cantidad de combustible en toneladas       |
| - burn_time_sec     | Number   | Tiempo de combustión en segundos           |
| - thrust            |          | Empuje (kN y lbf)                          |
| - kN                | Number   | Empuje en kN                               |
| - lbf               | Number   | Empuje en lbf                              |
| - payloads          |          | Cargas útiles                              |
| - option_1          | String   | Opción 1 de carga útil                     |
| - composite_fairing |          | Carenado compuesto                         |
| - height            |          | Dimensiones de altura (metros y pies)      |
| - meters            | Number   | Altura en metros                           |
| - feet              | Number   | Altura en pies                             |
| - diameter          |          | Dimensiones de diámetro (metros y pies)    |
| - meters            | Number   | Diámetro en metros                         |
| - feet              | Number   | Diámetro en pies                           |
| engines             |          | Detalles del motor                         |
| - number            | Number   | Número de motores                          |
| - type              | String   | Tipo de motor                              |
| - version           | String   | Versión del motor                          |
| - layout            | String   | Diseño del motor                           |
| - isp               |          | Impulso específico (nivel del mar y vacío) |
| - sea_level         | Number   | ISP a nivel del mar                        |
| - vacuum            | Number   | ISP en el vacío                            |
| - engine_loss_max   | Number   | Pérdida máxima del motor                   |
| - propellant_1      | String   | Propulsor 1                                |
| - propellant_2      | String   | Propulsor 2                                |
| - thrust_sea_level  |          | Empuje a nivel del mar (kN y lbf)          |
| - kN                | Number   | Empuje en kN                               |
| - lbf               | Number   | Empuje en lbf                              |
| - thrust_vacuum     |          | Empuje en el vacío (kN y lbf)              |
| - kN                | Number   | Empuje en kN                               |
| - lbf               | Number   | Empuje en lbf                              |
| - thrust_to_weight  | Number   | Relación empuje-peso                       |
| landing_legs        |          | Patas de aterrizaje                        |
| - number            | Number   | Número de patas                            |
| - material          | Object   | Material de las patas                      |
| flickr_images       | String[] | Imágenes de Flickr                         |
| wikipedia           | String   | Enlace a Wikipedia                         |
| description         | String   | Descripción de la nave espacial            |
