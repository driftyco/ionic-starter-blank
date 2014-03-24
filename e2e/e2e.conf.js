exports.config = {

  chromeDriver: '../node_modules/protractor/selenium/chromedriver',

  chromeOnly: true,

  specs: [
    '*.js',
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000',
  
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 120000
  }
};
