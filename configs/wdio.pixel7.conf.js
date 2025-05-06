import { config as baseConfig } from '../wdio.conf.js';

export const config = {
  ...baseConfig,

  capabilities: [{
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:app': 'bs://d89cb2880f33f037cb59b7554fbb1ee4d79d48a8',

    'bstack:options': {
      deviceName: 'Google Pixel 7 Pro',
      osVersion: '13.0',
      projectName: 'Webdriverio Android Project',
      buildName: 'Webdriverio Android Pixel 7 Pro',
      sessionName: 'Tests on Pixel 7 Pro',
      debug: true,
      networkLogs: true
    }
  }]
};