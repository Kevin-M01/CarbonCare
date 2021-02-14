'use strict'

const Fastify = require('fastify')({
    logger: true
});
const mercurius = require('mercurius');
const got = require('got');
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

const schema = `
    type CalculatedEmissions {
        make: String
        model: String
        score: Int 
    }

    type Query {
        determineEmissions(address1: String, address2: String, carMake: String, carModel: String, carPool: String): [CalculatedEmissions]
    }
`;

const resolvers = {
    Query: {
        determineEmissions: async (_, {
            address1,
            address2,
            carMake,
            carModel,
            carPool
        }) => {
            let distance = 0;
            try {
                let options = {
                    method: "GET",
                    url: `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${encodeURIComponent(address1)}&destinations=${encodeURIComponent(address2)}&key=AIzaSyA6VG3bbQS1_CAdA3sfpAumnZEyyxSKowM`,
                    headers: {
                        "Accept": "application/json"
                    },
                    decompress: true,
                    ignoreInvalidCookies: true,
                    responseType: "json",
                    dnsCache: true,
                    https2: true,
                    timeout: 1000
                };

                let response = await got(options);

                switch (response.statusCode) {
                    case 200:
                        distance = response.body.rows[0].elements[0].distance.value / 1000;
                        break;
                    default:
                        // Error Handling
                        break;
                }
            } catch (e) {
                // Error Handling
            }
            let tempEmissionData = null;
            if (carPool == "false") {
                tempEmissionData = await client.query(`
                WITH cte_1 AS (
                    SELECT 
                        model, 
                        make,
                        co2_emissions_g*${distance} AS emission_in_grams,
                        ROW_NUMBER() OVER(ORDER BY co2_emissions_g*${distance} DESC)rank_emissions,
                        co2_emissions_g*${distance}/vehicle_class AS emission_per_person
                    FROM
                        co2_data
                    ORDER BY rank_emissions
                ),
                     cte_2 AS(
                SELECT *
                FROM cte_1
                WHERE rank_emissions>=(SELECT rank_emissions
                FROM cte_1
                WHERE model LIKE '${carModel}' AND make LIKE '${carMake}')
                LIMIT 4
                ),
                
                     cte_3 AS(
                SELECT *
                FROM cte_1
                WHERE rank_emissions<((SELECT rank_emissions
                FROM cte_1
                WHERE model LIKE '${carModel}' AND make LIKE '${carMake}'))
                ORDER BY rank_emissions DESC
                LIMIT 3
                
                )
                SELECT * FROM cte_2
                UNION ALL
                SELECT * FROM cte_3
                ORDER BY rank_emissions;`);
            } else {
                tempEmissionData = await client.query(`
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
                WHERE model LIKE '${carModel}' AND make LIKE '${carMake}')
                LIMIT 4
                ),

                cte_3 AS(
                SELECT *
                FROM cte_1
                WHERE rank_emissions<((SELECT rank_emissions
                FROM cte_1
                WHERE model LIKE '${carModel}' AND make LIKE '${carMake}'))
                ORDER BY rank_emissions DESC
                LIMIT 3

                )
                SELECT * FROM cte_2
                UNION ALL
                SELECT * FROM cte_3
                ORDER BY rank_emissions;`);
            }
            let tempData = [];
            let rowLength = tempEmissionData.rows.length;
            for (let x = 0; x < rowLength; x++) {
                tempData.push({
                    name: tempEmissionData.rows[x].make + " " + tempEmissionData.rows[x].model,
                    value: parseInt(tempEmissionData.rows[x].emission_in_grams)
                });
            }
            return tempData;
        }
    }
}

Fastify.register(mercurius, {
    schema,
    resolvers
})

Fastify.register(require('fastify-rate-limit'), {
    max: 100,
    timeWindow: '1 minute'
})

Fastify.post('/api/calculate', async function (req, reply) {
    try {
        const query = `{ determineEmissions(address1: "${req.body.address1}" , address2: "${req.body.address2}", carMake: "${req.body.carMake}", carModel: "${req.body.carModel}", carPool: ${req.body.carPool}) {make, model, score} }`
        return reply.graphql(query);
    } catch (e) {
        console.log(e)
    }
})

Fastify.get('/', function (req, reply) {
    return reply.send({
        hello: 'world'
    })
})

Fastify.listen(process.env.PORT, '0.0.0.0');