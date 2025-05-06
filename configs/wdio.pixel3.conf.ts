import { config as base } from '../wdio.conf.ts';

export const config = {
  ...base,
  capabilities: [{
    project: 'Webdriverio Android Project',
    build: 'Webdriverio Android Pixel 3',
    name: 'Tests on Pixel 3',
    device: 'Google Pixel 3',
    os_version: '10.0',
    app: 'bs://custom-id:NativeDemoApp',
    'browserstack.debug': true
  }]
};