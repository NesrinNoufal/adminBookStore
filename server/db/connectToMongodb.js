import mongoose from 'mongoose'
const connectToMongoDB = async () => {
    try{
        await mongoose.connect ("mongodb+srv://NESRIN:Nesrin123@cluster0.l7zr73s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("connection established");
    }
    catch(error) {
        console.log("error:" ,error.message);
    }
}

export default connectToMongoDB;