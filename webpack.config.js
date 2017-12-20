// have to add this before using 'npm run build' in terminal
const config = {
  entry: `${ __dirname }/client/src/app.js`, // entry point of app
  output: {
    filename: 'bundle.js',
    path: `${ __dirname }/client/public`
  },
  devtool: 'source-map' // makes errors point to the source code, not the bundle.js file.
};

module.exports = config;
