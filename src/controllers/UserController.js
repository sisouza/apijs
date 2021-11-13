const User = require("../models/User.js");

/**
* Controller Responsible for User Entity
* 
* @returns an instance of User
*/
class UserController{
  
    /**
    * 
    * @param req 
    * UserData {
    * fullname: @String 
    * email: @String
    * password: @String
    * }
    * @param {*} res 
    * @returns an instance of User
    */
    async create(req, res) {
        const userData = {
            email,
            fullname,
            password } = req.body;

        const userExist = User.findOne(userData.email);

        if (userExist) {
            res.json({ "message": "User already exists" })
        }
        
        try {
            const user = await User.create(userData);
            return res.json({ "message": "User Created", user}).status(201);
        } catch (err) {
            return res.json(error).status(500);
        }
    }

       
    /**
     * 
     * @param req 
     * id: @String
     * @param {*} res 
     * @returns a single instance of User
     */
    async getById(req, res) {
        const { id } = req.params;
        
        try {
            const findUser = await User.findOne({ where: { id: id } });
            return res.json(findUser).status(200);
        } catch (error) {
            return res.json(error).status(500);
        }
    }
    

    async getAll(req, res) {
        try {
            const Users = await User.findAll();
            return res.json(Users[0]).status(200);
        } catch (error) {
            return res.json(error).status(500);
        }
    }


     /**
     * 
     * @param req 
     * id: @String
     * UserData {
        *  name: @String 
        * email: @String
        * password: @String
     * }
     * @param {*} res 
     * @returns an updated instance of User
     */ 
    async update(req, res) {
        const { id } = req.params;

        const userData = {
            fullname,
            email,
            password
        } = req.body
        
        const userExist = await User.findOne({ where: { email: userData.email } });

        if (!userExist) {
            res.json({ "message": "User does not exists" })
        }

        try {
            const updatedUser = await User.update(userData, { where: { id: id } });
            return res.json(updatedUser).status(200);
        } catch (error) {
            return res.send(error).status(500);
        }
    }              
       
     /**
     * 
     * @param req 
     * id: @String
     * @param {*} res 
     * @returns Boolean
     */
    async remove(req, res) {
        const { id } = req.params;

        const userExist = await User.findByPk({ where: { id: id } });
        
        if (!userExist) {
            res.json({ "message": "User not found exists" })
        }
        
        try {
            const deleteUser = await User.destroy({ where: { id: userId } });
            return res.json({ "message": "User deleted with success" }).status(200);
        } catch (error) {
            return res.send(error).status(500);
        }
    }
    
}
module.exports = new UserController;