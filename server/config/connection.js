const mongoose = require('mongoose');

// tell mongoose which database to connect to
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pet-adoption', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;