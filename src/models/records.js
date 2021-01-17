const mongoose = require('mongoose');

const RecordSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
    index: true,
  },
  createdAt: { type: Date, required: true, index: true },
  counts: [Number],
  value: { type: String, required: true },
});

module.exports = mongoose.model('Records', RecordSchema);
