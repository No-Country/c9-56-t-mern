import { connect, set } from "mongoose"

const connectToDatabase = () => {
  const dbUri = process.env.DB_URI

  set("strictQuery", false)
  void connect(dbUri)
}

export { connectToDatabase }
