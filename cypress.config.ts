import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    videoUploadOnPasses: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
