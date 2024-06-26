import { Schema, model } from "mongoose";
// import { type } from "os";

const ProfileSchema = Schema({
  name: { type: String },
  gender: { type: Boolean },
  dob: { type: Date },
  religion: { type: String },
  motherTongue: { type: String },
  about: { type: String },
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
  drinking: { type: Boolean },
  smoking: { type: Boolean },
  intrests: { type: String },
});

const Profile = model("Profile", ProfileSchema);

export default Profile;
