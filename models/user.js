const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  email: {
    type: String,
    required: true, 
    unique: true,   
  },
  mobile: {
    type: String,
    required: true, 
    validate: {
      validator: function (value) {
        
        return /^\d{10}$/.test(value);
      },
      message: 'Mobile number must be 10 digits long.',
    },
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
