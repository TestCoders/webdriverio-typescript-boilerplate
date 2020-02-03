const browsers = {
    chrome: 'chrome',
    firefox: 'firefox'
}

const chromeCapability = {
    maxInstances: 5,
    browserName: browsers.chrome,
}

const firefoxCapability = {
    maxInstances: 5,
    browserName: browsers.firefox,
}

const capabilities = {
    chromeCapability,
    firefoxCapability
}

function getCapability() {
    const headless = process.env.HEADLESS || null
    const browser = process.env.BROWSER || browsers.chrome
    const instances = process.env.INSTANCES || 1

    let capability = capabilities.chromeCapability

    if (browser === browsers.firefox) {
        capability = capabilities.firefoxCapability
    }

    if (headless && browser) {
        if (browser === browsers.chrome) {
            capability['goog:chromeOptions'] = {
                args: [
                    '--headless',
                    '--disable-gpu'
                ]
            }
        } else if (browser === browsers.firefox) {
            capability['moz:firefoxOptions'] = {
                args: [
                    '-headless',
                ]
            }
        }
    }

    capability.maxInstances = instances
    return capability
}

module.exports = getCapability