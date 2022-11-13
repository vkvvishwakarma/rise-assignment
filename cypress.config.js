const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://www.saucedemo.com/",
      "chromeWebSecurity": false, // to avoid cross origin problem
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
})