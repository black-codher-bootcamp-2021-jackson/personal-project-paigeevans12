const mongoose = require("mongoose");
const { Schema } = mongoose;

const userProfileSchema = new Schema({
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true
    },
    user_name:{
        type: String,
        required: true
    },
    password: {
      type: String,
      required: true
    },
    platforms: {
      type: String,
      required: true
    },
    gamer_tags: {
        type: String,
        required: true
      }
  })

  mongoose.model("profiles", userProfileSchema);