const {printPossibleLocations} = require("..")
const contract = require("../../contracts/v1/cities_you_can_fly_to.json")
// Used to mock the network request going to the API
const {mockRequest} = require("mock-inspect")
// Used to auto-generate a response from the contract's JSON schema
const jsonSchemaFaker = require("json-schema-faker")
// Used to validate that the request payload matches the contract's JSON schema
const AJV = require("ajv")
const ajv = new AJV({allErrors: true})

describe("Consumer Contract Test", () => {
    it("Calls the API as specified in contract", async () => {
        const citiesRequest = mockRequest({
            requestPattern: contract.request.url,
            requestMethod: contract.request.method,
            responseBody: jsonSchemaFaker.generate(contract.response.body),
            responseStatus: contract.response.statusCode,
            responseHeaders: contract.response.headers,
        })

        await printPossibleLocations()

        const {requestBody, requestHeaders} = citiesRequest.inspect()

        for (const header in contract.request.headers) {
            expect(requestHeaders[header]).toBe(
                contract.request.headers[header],
            )
        }

        const validator = ajv.compile(contract.request.payload)
        const isValid = validator(requestBody)
        if (!isValid) {
            throw new Error(
                "Our consumer did not send a request payload matching" +
                    "the contract request payload.",
            )
        }
    })
})
