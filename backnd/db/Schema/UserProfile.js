import { Schema, model } from "mongoose";
import { type } from "os";
// import { type } from "os";

const ProfileSchema = Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    job: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
    },
    reg: {
      type: Schema.Types.ObjectId,
      ref: "Person",
    },
    name: { type: String },
    gender: { type: String },
    religion: { type: String },
    motherTongue: { type: String },
    about: { type: String },
    horriscope: { type: String },
    height: { type: Number },
    weight: { type: Number },
    bodytype: { type: String },
    marrital: { type: String },
    education: { type: String },
    occupation: { type: String },
    income: { type: Number },
    passion: { type: String },
    futureplan: { type: String },
    fathername: { type: String },
    fatherjob: { type: String },
    mothername: { type: String },
    motherjob: { type: String },
    siblngs: { type: String },
    contact: { type: Number },
    email: { type: String },
    address: { type: String },
  },
  { timestamps: true }
);

const Profile = model("Profile", ProfileSchema);

export default Profile;
