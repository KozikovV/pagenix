var path = require('path');

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'kozikov.js',
    path: path.resolve(__dirname, 'public/js')
  }
};