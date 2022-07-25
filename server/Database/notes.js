const mongoose = require("mongoose");
const { Users } = require("./user");

const notesSchema = new mongoose.Schema({
    title:String,
    note:String,
    label:String,
     user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Users
    }
},
    {
        timestamps: true,
    }
)

const Note = mongoose.model("Note", notesSchema);

module.exports = {
    Note
}
