import mongoose from 'mongoose';

const connectDB = (url) => {
    mongoose.set('strictQuery', true);

    mongoose.connect(url)
        .then(() => {
            console.log('Successfully connected to MongoDB')
        })
        .catch((err) => {
            console.log('Error in connecting to MongoDB');
            console.log(err);
        });
};

export default connectDB;