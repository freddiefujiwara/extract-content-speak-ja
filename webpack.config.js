const path = require('path');
module.exports = {
  mode: 'production',
  entry: './src/bookmarklet.js',
  output: {
    filename: 'bookmarklet.min.js',
    path: path.join(__dirname, 'dist/')
  }
};
