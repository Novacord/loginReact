import db from "../config/connectionMongo.js";
const users = db.getInstance().changeCollection('users').connect()
export default class Login{
    static async loginUser(req, res) {
        let user = await users.findOne({ username: req.body.username, password: req.body.password});
        if(user === null){
            res.status(200).send({ status: 200, message: "No entro" })
        } else {
            res.status(200).send({ status: 200, message: "Entro", data: user.username})
        }
    }
}