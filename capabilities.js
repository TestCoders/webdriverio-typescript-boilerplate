const browsers = {
    chrome: 'chrome',
    firefox: 'firefox'
}

const chromeCapability = {
  'browserName': browsers.chrome,
  'maxInstances': 5
}

const firefoxCapability = {
  'browserName': browsers.firefox,
  'maxInstances': 5
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

  capability.maxInstances = instances

  if (headless) {
      if (browser && browser === browsers.firefox) {
          capability['moz:firefoxOptions'] = {
              args: ['-headless', '--window-size=1280,800']
          }
      } else {
          capability['goog:chromeOptions'] = {
              args: ['--headless', '--disable-gpu', '--window-size=1280,800']
          }
      }
  }

  return capability
}

module.exports = getCapability
