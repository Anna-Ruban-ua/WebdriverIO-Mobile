import { config as base } from '../wdio.conf.ts';

export const config = {
  ...base,
  capabilities: [{
    project: 'Webdriverio Android Project',
    build: 'Webdriverio Android Pixel 7 Pro',
    name: 'Tests on Pixel 7 Pro',
    device: 'Google Pixel 7 Pro',
    os_version: '13.0',
    app: 'bs://custom-id:NativeDemoApp',
    'browserstack.debug': true
  }]
};