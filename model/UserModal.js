import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Optional: ensure no duplicate emails
  },
});

export default mongoose.model('User', userSchema);
