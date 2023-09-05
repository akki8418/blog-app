const mongoose = require ('mongoose');
const colors = require ('colors');

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected to mongodb database ${mongoose.connection.host}`.bgBlue.white)

    }catch(error){
        console.log(`mongo connect error ${error}`.bgRed.white)
    }
};

module.exports = connectDB;