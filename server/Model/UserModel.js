const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
     
  },
  mobile: {
    type: Number,
    require: true,
    unique: true,
  },
  dob: {
    type: Date,
    require: true,
  },
  password: {
    type: String,
    require: true,
    minlength: [6],
  },
  profile: {
    name: {
      type: String,
      require: true,
    },
    currentAddress: {
      type: String,
      require: true,
    },
    longlive: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
  work: {
    currentWorkingStatus: {
      type: String,
      require: true,
    },
    additionalSaving: {
      type: String,
      require: true,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("users", userSchema);
