import mongoose from 'mongoose';

mongoose.set("strictQuery", true); //to suppress warning
const Connection = async () => {
  // ATLAS => async (username , password) => {
  // const URL = `mongodb+srv://${username}:${password}@crud-users.pbc6bln.mongodb.net/?retryWrites=true&w=majority`;
  const URL = "mongodb://localhost:27017/CharacterDB";
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to database", error);
  }
};

export default Connection;