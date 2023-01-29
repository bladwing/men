import mongoose from "mongoose";
mongoose.set("strictQuery", false);

const { Schema } = mongoose;

let studentSchema = new Schema(
  {
    title: {
      type: String,
    },
    article: {
      type: String,
    },
  },
  {
    collection: "article",
  }
);
 

export default mongoose.model("Articles", studentSchema);
