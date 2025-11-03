import mongoose from "mongoose";

const LayoutSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  components: [String],
});

const layout =  mongoose.models.Layout ?? mongoose.model("Layout", LayoutSchema);

export default layout;
