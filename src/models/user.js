import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName:{
        type:String
    },
    lastNAme:{
        type:String
    },
    emailId:{
        type:String
    },
    password:{
        type:String
    },
    age:{
        type:Number
    },
    gender:{
        type: String
    }
});

// const User = mongoose.model("User",userSchema);
// module.exports = User;


module.exports = mongoose.model("User",userSchema);