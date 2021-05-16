const {
    cleanUpNetworkRequestMocking,
    setUpNetworkRequestMocking,
    tearDownNetworkRequestMocking,
} = require("mock-inspect")

beforeEach(() => {
    cleanUpNetworkRequestMocking()
})

beforeAll(() => {
    setUpNetworkRequestMocking({
        allowUnmockedRequestsOnNetwork: true,
    })
})

afterAll(() => {
    tearDownNetworkRequestMocking()
})
