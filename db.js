const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
let isConnected;
const uriString = process.env.SWEEZY_COOKING_MONGODB_URI;

module.exports = connectToDatabaseModule = async () => {
  if (isConnected) {
    // console.log("=> using existing database connection");
    return Promise.resolve();
  }

  // console.log("=> using new database connection");
  return mongoose
    .connect(uriString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((db) => {
      isConnected = db.connections[0].readyState;
    });
};
