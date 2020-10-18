import moogoose from "mongoose";

const whatsappSchema = moogoose.Schema({
  message: String,
  name: String,
  timestamp: String,
  received: Boolean,
});

export default moogoose.model("messagecontents", whatsappSchema);
