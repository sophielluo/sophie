module.exports = {
    root: true, // Prevents ESLint from looking in parent directories
    extends: [
      'react-app'
    ],
    settings: {
      react: {
        version: 'detect'
      }
    },
    plugins: ['react'],
    rules: {}
  };