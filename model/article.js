import mongoose from "mongoose";
mongoose.set("strictQuery", true);

const { Schema } = mongoose;

let articleSchema = new Schema(
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
 

export default mongoose.model("Article", articleSchema);
