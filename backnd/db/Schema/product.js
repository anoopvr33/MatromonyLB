import { Schema } from "mongoose";
const ProductSchema = Schema({
  pName: {
    type: String,
  },
  pPrice: {
    type: Number,
  },
  pDescription: {
    type: String,
  },
  pCompany: {
    type: String,
  },
  pImage: {
    type: String,
  },
});
