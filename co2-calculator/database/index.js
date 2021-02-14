const {
  Client
} = require('pg');

const client = new Client({
  connectionString: `postgres://kevinisawasteman:kevinisawasteman123@kevin.cblgt5fh0ugs.us-east-1.rds.amazonaws.com:5432/kevin`,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

const model = "Chiron Pur Sport";
const make = "Bugatti";
const distance = 100;

client.query(`
WITH cte_1 AS (
  SELECT 
      model, 
      make,
      co2_emissions_g*${distance} AS emission_in_grams,
      ROW_NUMBER() OVER(ORDER BY co2_emissions_g*${distance} DESC)rank_emissions
  FROM
      co2_data
  ORDER BY rank_emissions
),
   cte_2 AS(
SELECT *
FROM cte_1
WHERE rank_emissions>=(SELECT rank_emissions
FROM cte_1
WHERE model LIKE '${model}' AND make LIKE '${make}')
LIMIT 4
),

   cte_3 AS(
SELECT *
FROM cte_1
WHERE rank_emissions<((SELECT rank_emissions
FROM cte_1
WHERE model LIKE '${model}' AND make LIKE '${make}'))
ORDER BY rank_emissions DESC
LIMIT 3

)
SELECT * FROM cte_2
UNION ALL
SELECT * FROM cte_3
ORDER BY rank_emissions;`, (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log (JSON.stringify(row))
  }
});