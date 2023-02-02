import mongoose from "mongoose";
mongoose.set("strictQuery", true);

const { Schema } = mongoose;

let articleSchema = new Schema(
  {
    title: { type: String },
    article: { type: String },
    category: { type: String },
  },
  {
    collection: "article",
    timestamps: true 
  },

);

export default mongoose.model("Article", articleSchema);
