export const config = {
  user: '${BROWSERSTACK_USERNAME}',
  key: '${BROWSERSTACK_ACCESS_KEY}',
  
    updateJob: false,
    specs: [
      './test/specs/**.spec.ts'
    ],
    exclude: [],

    services: ['browserstack'],
  
    logLevel: 'error',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
  
    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 20000
    }
  };