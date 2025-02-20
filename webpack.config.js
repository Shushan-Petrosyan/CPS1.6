const path = require('path');

module.exports = {
  entry: './assets/js/index.js', // Entry point for your project
  output: {
    path: path.resolve(__dirname, 'dist'), // Output folder
    filename: 'bundle.js', // Output file
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // This will target all .scss files
        use: [
          'style-loader', // Inject CSS into the DOM
          'css-loader',   // Interpret CSS files
          'sass-loader',  // Compile SCSS to CSS
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.scss'], // Add .scss extension for imports
  },
};