const mongoose = require('mongoose');

const connectDB = async (url) => {
 try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to the database.');
    } catch (error) {
        console.error('Connection to the database failed.', error);
        process.exit(1); // Exit the process with a failure code
    }
};

module.exports = connectDB;
