// frontend/craco.config.js
const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/components/pages"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@images": path.resolve(__dirname, "src/images"),
      "@fonts": path.resolve(__dirname, "src/fonts")
    }
  }
};
