const path = require('path');

module.exports = {
  resolve: {
    
      
 

    fallback: {
      https: false,
      querystring: require.resolve('querystring-es3'),
      os: require.resolve('os-browserify/browser'),
      stream: require.resolve('stream-browserify'),
      crypto: require.resolve('crypto-browserify'),
    },
  },
  entry: './src/index.js', // Replace with the entry file of your application
  output: {
    filename: 'bundle.js', // Replace with the desired output bundle filename
    path: path.resolve(__dirname, 'dist'), // Replace with the desired output directory path
  },
  // Other webpack configuration options can be added here
};
