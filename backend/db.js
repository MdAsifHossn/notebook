// const mongoose = require("mongoose");
// const mongoURI = "mongodb://localhost:27017";
// const connectToMongo = () => {
//   mongoose.connect(mongoURI, () => {
//     console.log("Connected to mongo");
//   });
// };
// module.exports = connectToMongo;



const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");


  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectToMongo;



