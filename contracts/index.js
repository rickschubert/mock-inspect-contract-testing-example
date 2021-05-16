const getCitiesExample = {
    response: {
        statusCode: 200,
        body: [
            {
                id: "904d1a6d-daa1-41c0-8c8e-2746eb35f3fc",
                name: "Chicago",
                country: "USA",
            },
        ],
        headers: {
            "content-type": "application/json",
        },
    },
    request: {
        url: "http://localhost:5000/cities",
        method: "GET",
        headers: {
            authorization: "Bearer authorized_in_third_party_app",
        },
    },
}

const getChicagoWeatherExample = {
    response: {
        statusCode: 200,
        body: {
            id: "904d1a6d-daa1-41c0-8c8e-2746eb35f3fc",
            current: 4,
            chanceOfRain: 45,
        },
        headers: {
            "content-type": "application/json",
        },
    },
    request: {
        url: "http://localhost:5000/cities/904d1a6d-daa1-41c0-8c8e-2746eb35f3fc/weather",
        method: "GET",
        headers: {
            authorization: "Bearer authorized_in_third_party_app",
        },
    },
}

module.exports = {
    getCitiesExample,
    getChicagoWeatherExample,
}
