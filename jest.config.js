const path = require("path")

const rootDir = path.join(__dirname)

module.exports = {
    testMatch: [path.join(rootDir, "**/*.spec.js")],
    testPathIgnorePatterns: ["node_modules/"],
    rootDir,
    setupFilesAfterEnv: [path.join(rootDir, "jest.setup.js")],
    testEnvironment: "node",
}
