const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Use an environment variable, fallback to local only if necessary
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/smartride');

    console.log(`🚀 MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`❌ Database Connection Error: ${err.message}`);
    
    // Exit process with failure
    process.exit(1);
  }
};

// Handle connection events for better monitoring
mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected!');
});

module.exports = connectDB;