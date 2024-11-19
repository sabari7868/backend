// db connection
require("dotenv").config();
const logger = require('../utils/logger.util');


const mongoose = require("mongoose");


const dbConnection = process.env.DB_CONNECTION;
const dbName = process.env.DB_NAME;


async function connectToDatabase() {
try {
const connectionUri = `${dbConnection}/${dbName}`;
await mongoose.connect(connectionUri, {
authSource: "admin",
retryWrites: false
 });
logger.info("Connected to MongoDB");
 } catch (err) {
logger.error(`Error connecting to MongoDB: ${err.stack}`);
 }
}


connectToDatabase();
