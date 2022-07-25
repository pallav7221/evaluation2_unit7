const express = require("express");
const { createNote, updateNote, deleteNote,getAllNote } = require("../Handlers/notes");


const noteRouter = express.Router();

noteRouter.get('/note/all', getAllNote);
noteRouter.post('/note', createNote);
noteRouter.patch('/note/:id', updateNote);
noteRouter.delete('/note/:id', deleteNote);


module.exports=noteRouter;