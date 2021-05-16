const request = require("request-promise")
const contract = require("../../contracts/v1/cities_you_can_fly_to.json")
// Used to auto-generate a request payload from the contract's JSON schema
const jsonSchemaFaker = require("json-schema-faker")
// Used to validate that the response body matches the contract's JSON schema
const AJV = require("ajv")
const ajv = new AJV({allErrors: true})

describe("Provider Contract Test", () => {
    it("Provides the correct properties matching the contract", async () => {
        const result = await request({
            url: contract.request.url,
            method: contract.request.method,
            headers: contract.request.headers,
            body: jsonSchemaFaker.generate(contract.request.payload),
            resolveWithFullResponse: true,
            json: true,
        })

        expect(result.statusCode).toBe(contract.response.statusCode)
        for (const header in contract.response.headers) {
            expect(result.headers[header]).toBe(
                contract.response.headers[header],
            )
        }

        const validator = ajv.compile(contract.response.body)
        const isValid = validator(result.body)
        if (!isValid) {
            throw new Error(
                "Our provider did not send a response body matching" +
                    "the contract response body.",
            )
        }
    })
})
