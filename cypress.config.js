const { defineConfig } = require("cypress");


module.exports = defineConfig({
  viewportHeight: 900,
  viewportWidth: 1500,
  defaultCommandTimeout: 2000,
  //openMode = local / runMode = remote
  retries: {openMode: 1, runMode:1},

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //folder were test files are located
    specPattern: 'cypress/integration/**',
    //folder to be ignored at tests
    //excludeSpecPattern: '',
    //global url to run test files
    //baseUrl: '',
  },
});
