const mongoose = require('mongoose');

mongoose.connect('mongodb://muhammadhamza:hamza123@ac-7eqpmyw-shard-00-00.ejy7buo.mongodb.net:27017,ac-7eqpmyw-shard-00-01.ejy7buo.mongodb.net:27017,ac-7eqpmyw-shard-00-02.ejy7buo.mongodb.net:27017/jobtal?ssl=true&replicaSet=atlas-5y798y-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database connection successful');
}).catch((err) => {
  console.error('Database connection error:', err);
});