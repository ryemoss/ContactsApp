const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create contact Schema and model
const ContactSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  company: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  picture: {
    type: String,
    default: "./content/images/blank-profile.png"
  }
});

const Contact = mongoose.model('contact', ContactSchema);

module.exports = Contact;
