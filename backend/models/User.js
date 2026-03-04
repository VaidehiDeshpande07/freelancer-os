const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  creditScore: { type: Number, default: 50 }
}, { timestamps: true });

// This prevents the "MoverWrite" error if the model is already compiled
module.exports = mongoose.models.User || mongoose.model('User', UserSchema);