const { required } = require("forms/lib/validators");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const videoGameSchema = new Schema({
    game_title: {
      type: String,
      required: true,
    },
    game_developers: {
      type: String,
      required: true
    },
    release_date:{
        type: String,
        required: true
    },
    platform: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  })

  mongoose.model("games", videoGameSchema);