import { connect, set } from "mongoose"

const connectToDatabase = () => {
  const dbUri = process.env.DB_URI

  if (!dbUri) {
    throw new Error("DB_URI environment variable is required")
  }

  set("strictQuery", false)
  void connect(dbUri)
}

export { connectToDatabase }
