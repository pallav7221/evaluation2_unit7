const mongoose = require("mongoose")

async function connectDB(){
    try {
        mongoose.connect(`mongodb://localhost:27017/notes`)
    } catch (error) {
        console.log(error)
        throw error
    }
}
module.exports={
    connectDB
}