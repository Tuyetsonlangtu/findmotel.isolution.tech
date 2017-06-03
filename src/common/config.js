
if (process.env.BROWSER) {
  throw new Error('Do not import `config.js` from inside the client-side code.');
}

const port = 4000;
module.exports = {
  // Node.js app
  port: process.env.PORT || port,

  // API Gateway
  api: {
    // API URL to be used in the client-side code
    clientUrl: process.env.API_CLIENT_URL || '',
    // API URL to be used in the server-side code
    serverUrl: process.env.API_SERVER_URL || `http://localhost:${process.env.PORT || port}`,
  },

  analytics: {
    googleTrackingId: process.env.GOOGLE_TRACKING_ID, // UA-XXXXX-X
  },

  database: {
    mongoose: {
      databaseURI : "mongodb://10.0.15.5:27017/ISolution-FindMotel",
      logging: false
    }
  }
};
