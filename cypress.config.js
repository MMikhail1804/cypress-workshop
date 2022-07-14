const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  video: false,
  screenshotOnRunFailure: false,
  chromeWebSecurity: false,
  retries: 3,
  viewportWidth: 1920,
  viewportHeight: 1080,

  e2e: {
    baseUrl: 'https://demoqa.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});