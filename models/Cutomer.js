const mongoose = require("mongoose");

const Customer = new mongoose.Schema({
  id: Number,
  firstName: String,
  lastName: String,
  email: String,
  whatsAppnumber: String,
  phone: String,
  meetingLink: String,
  classId: String,
  timeZoneId: String,
  numberOfStudents: Number,
  customerId: String,
  country: String,
  placeOfStay: String,
  classStatusId: String,
  proposedAmount: Number,
  proposedCurrencyId: String,
  welcomeCall: Boolean,
  welcomeChat: Boolean,
  welcomeEmail: Boolean,
  studyMaterialSent: Boolean,
  agentId: String,
  oneToOne: Boolean,
  teacherId: String,
});

module.exports = mongoose.model("Customer", Customer);
