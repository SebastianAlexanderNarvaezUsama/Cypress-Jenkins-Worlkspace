const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'zem7ia',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
