const got = require('got')
async function test () {
        let response = await got({
                url: "http://127.0.0.1:5000/api/calculate",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                json: {
                    address1: "3700 Midland Ave Unit 110, Scarborough, ON M1V 4V3",
                    address2: "5071 Highway #7, Unit 1, Markham, ON L3R 1N3",
                    carMake: "Bugatti",
                    carModel: "Chiron Pur Sport",
                    carPool: 'false'
                }
            });
        console.log(response.body);

}

test ()