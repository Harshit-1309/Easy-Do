import mongoose from "mongoose"

const connectToDatabase = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://harsh13:Harsh1998@harshcluster.4rgtm44.mongodb.net/?retryWrites=true&w=majority"
    )
    if (connection) {
      console.log("Connection established")
    }
  } catch (error) {
    console.log("error in connectToDatabase", error)
    throw error
  }
}

export default connectToDatabase