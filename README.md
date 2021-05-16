This repository is a companion piece [to my blog article](https://rickschubert.net/blog/posts/mock-inspect-contract-testing) in which I outline how the open-source Node.js testing library [mock-inspect](https://github.com/trayio/mock-inspect) can be used to facilitate contract testing, completely without the need of complicated frameworks like PACT!

The directories `provider` and `consumer` hold two different apps which interact with each other. Each of these apps has a set of tests (`tests/` directory) which are connected to each other using contracts.

## Trying out the tests
- Install dependencies: `npm install`
- Start the provider server (necessary for the provider tests): `node provider`
- Run tests: `npm test`
