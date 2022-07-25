const { Note } = require("../Database/notes");
const jwt = require("jsonwebtoken");
const { use } = require("../Routes/notes");




async function getAllNote(req, res, next) {
  try {
        let {token} = req.headers;
        let user = jwt.decode(token);
        console.log(user.id)
        let note = await Note.find({user:user.id});
        console.log(note)
        res.status(200).send({note})
    } catch (error) {
        res.status(400).send({
            message:"something wrong"
        })
    }
}


async function createNote(req, res, next) {
     try { 
       
        const {token} =  req.headers;
    
        let user = jwt.decode(token)
        let {note} = req.body;
        note.user = user.id;
        
        note = new Note(note);
        console.log(note)
        await note.save();
        return res.status(200).send(note);

    } catch (error) {
        res.status(400).send({
            message:"Something wrong"
        })
    }
}

async function updateNote(req, res, next) {
    let { id } = req.params;
     const {token} =  req.headers;
     let user = jwt.decode(token)
    let { note: noteData } = req.body;

    let note = await Note.findById(id);
    if (note) {
        if (checkPostBelongToUser(note, user)) {
            return res.status(401).send({
                error: "This note does not belong to you. You can not update this note."
            })
        }
    } else {
        res.status(404).send({
            error: "note does not exist"
        })
    }

    for (const [key, value] of Object.entries(noteData)) {
        note[key] = value;
    }

    await note.save();

    return res.send({
        data: note
    })
}
function checkPostBelongToUser(note,user){
    // console.log(note.user +"    "+user.id)
    if (note.user.toString() != user.id.toString()) {
        return true;
    }
    return false;
}
async function deleteNote(req, res, next) {
    let { id } = req.params;
    // console.log(id)
     const {token} =  req.headers;
     let user = jwt.decode(token)
    console.log(user)
    const note = await Note.findById(id)
    if(note){
        if(checkPostBelongToUser(note,user)){
            return res.status(401).send({
                error: "This note does not belong to you. You can not delete this note."
            })
        }
    }else{
        res.status(404).send({
            error:"note does not exist"})
    }
   

    await Note.findByIdAndDelete(id);

    return res.send({
        message: "note has been deleted."
    })

}

module.exports = {
    getAllNote,
    createNote,
    updateNote,
    deleteNote,
}