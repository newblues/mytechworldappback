const mongoose = require('mongoose');

const dbUrl = 'mongodb://master:master123@ds239903.mlab.com:39903/mytechworldapp ';

const options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true
};

mongoose.connect(dbUrl, options, error => {
  if (error) {
    console.error(error);
  } else {
    console.log('Your database is operational...')
  }
});

module.exports = {
  mongoose: mongoose,
}
