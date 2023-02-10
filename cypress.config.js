const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: '7t9x5k',
  viewportHeight: 900,
  viewportWidth: 1500,
  defaultCommandTimeout: 2000,
  //openMode = local / runMode = remote
  retries: {openMode: 1, runMode:1},

  reporter: 'mochawesome',
    reporterOptions: {
      reportFilename: "[name]-[status]_[datetime]-report",
      hmlt: true
    },

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
