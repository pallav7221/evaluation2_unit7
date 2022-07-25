const express = require("express")
const { connectDB } = require("./Database");
const cors = require("cors");
const userRouter = require("./Routes/user");
const noteRouter = require("./Routes/notes");

let app = express();
app.use(express.json());
app.use(cors())
// app.use(logger);

app.use(userRouter);
app.use(noteRouter)
// function logger (req, res, next) {
//     console.info(`${req.method} , ${req.path}`);
//     next();
// }


connectDB().then(()=>{
    app.listen(8080,()=>{
        console.log("server is running on port 8080")
    })
})