import { Schema, model } from "mongoose";

const ChatSchema = Schema({
  profileId: {
    type: Schema.Types.ObjectId,
    ref: "Profile",
  },
});
const Chat = model("Chat", ChatSchema);

export default Chat;
