const mongoose = require ('mongoose');


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:[true,'username is required']
    },
    email:{
        type:String,
        require:[true,'email is require']
    },
    password:{
        type:String,
        required:[true, 'password is required']
    },
    blogs:[
        {
            type:mongoose.Types.ObjectId,
            ref:'Blog'
        }
    ]
},{timestamps:true})
const userModel = mongoose.model('User',userSchema);

module.exports = userModel;