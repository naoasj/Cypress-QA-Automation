const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qauto.forstudy.space',
    fixturesFolder: "cypress/fixtures",
    specPattern: "**/*.cy.{js,jsx,ts,tsx}",
    viewportWidth: 1440,
    viewportHeight: 900,
    defaultCommandTimeout: 8000,
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    screenshotOnRunFailure: true
  },
});