import mongoose from 'mongoose'


const userSchema = new mongoose.Schema ({
    fullName:{
        type:String
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
   
  
},{timestamps:true}
);

const AuthUser = mongoose.model('AuthUser',userSchema);

export default AuthUser;