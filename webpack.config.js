const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'custom_swiper_bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/, // This will apply to both .css files
        use: ['style-loader', 'css-loader'] // Use these loaders in this order
      }
    ]
  }
};
