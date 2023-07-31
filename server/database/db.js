import mongoose from "mongoose";


export const Connection = async (username,password) =>{

    const URL = `mongodb+srv://${username}:${password}@ecommerce-web.a0aduim.mongodb.net/?retryWrites=true&w=majority`;

    try{
        await mongoose.connect(URL,{ useUnifiedTopology: true , useNewUrlParser: true})
        console.log('Database connected successfully');
    }
    catch(error){
        console.log('Errot while connecting with the',error.message);
    }
}

export default Connection;