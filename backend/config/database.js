import mongoose from "mongoose";

const connectDatabase = () => {
  mongoose.connect(process.env.DB_MONGO_URI).then((con) => {
    console.log(`MongoDb connected with host ${con.connection.host}`);
  });
};

export default connectDatabase;
