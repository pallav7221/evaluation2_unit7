const { Users } = require("../Database/user");
const jwt = require("jsonwebtoken")




async function createUser(req, res, next) {
    try {
        let {user} = req.body;
        // console.log(user)
        let exist = await Users.findOne({ email: user.email })
        if (exist) {
            return res.status(400).send({
                message: "User Already exist"
            })
        }
        let userData = await Users.create(user)
        console.log(userData)
        res.status(200).send({
            user: userData
        })


    }
    catch (error) {
        res.send({
            message: "something went wrong"
        })
    }
}

async function loginUser(req, res) {
    try {
        let { email, password } = req.body;

        let data = await Users.find({ email }).populate('password')
        console.log(data[0])
        if (!data[0]) {
           return res.status(404).send({
                message: "Please Register First"
            })
        } else {
            if (data[0].password === password) {
                
                const token = jwt.sign({ email: data[0].email, id: data[0]._id, name: data[0].name }, 'SFG()ASG#@1963XYZ');
               return res.status(200).send({ token })
            }
            else {
                return res.status(400).send({
                    message: "password does not match"
                })
            }
        }
        
    } catch (error) {
        return res.status(404).send({
            error: "something went wrong"
        })
    }
}

module.exports = {
    createUser,
    loginUser
}