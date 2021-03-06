const getCapability = require('./capabilities')
const testLocation = './test/**/*.ts'

const config = {
    specs: [testLocation],
    exclude: [],
    maxInstances: 5,
    capabilities: [getCapability()],
    logLevel: 'debug',
    outputDir: './wdio-output/',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        compilers: [
            'tsconfig-paths/register'
        ]
    },
    before(capabilities, specs) {
        require('ts-node').register({ files: true })
        browser.addCommand('globalTimeout', function () {
            return process.env.ENVIRONMENT === 'prodction' ? 3000 : 5000
        })
    }
}

exports.config = config
