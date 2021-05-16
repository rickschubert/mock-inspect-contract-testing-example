const request = require("request-promise")

const printPossibleLocations = async () => {
    const apiToken = "my_API_token_was_used"
    const response = await request({
        url: "http://localhost:5000/v1/cities_you_can_fly_to",
        method: "POST",
        auth: {bearer: apiToken},
        body: {filterByCountry: "England"},
        resolveWithFullResponse: true,
        json: true,
    })
    for (const city in response.body) {
        if (response.body[city] === true) {
            console.log(`I can fly to ${city}`)
        } else {
            console.log(`I cannot fly to ${city}`)
        }
    }
}

module.exports = {
    printPossibleLocations,
}
