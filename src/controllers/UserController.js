const userService = require("../services/UserService");
 
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
    *  name: @String 
    * email: @String
    * password: @String
    * }
    * @param {*} res 
    * @returns an instance of User
    */
    async create(req, res) {
        const { fullname, email, password } = req.body
        
        const userData = {
            fullname: fullname,
            email: email,
            password: password
        }

        try {
            const user = await userService.register(userData);
            return res.json({ "message": "user created"})
        } catch (error) {
            return res.send(error).status(500);
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
            const findUser = await userService.getById(id);
            return res.json({ findUser });
        } catch (error) {
            return res.send(error).status(500);
        }
    }
    
    /**
     * 
     * @param req 
     * @param {*} res 
     * @returns an array of Users
     */
    async getAll(req, res) {
        try {
            const users = await userService.getAll();
            return res.send(users).status(200);
        } catch (error) {
            return res.send(error).status(500);
        }
    }


    /**
    * 
    * @param req 
    * id: @String
    * userData {
    *  name: @String 
    *  email: @String
    *  password: @String
    * }
     * @param {*} res 
     * @returns an updated instance of User
     */ 
    async update(req, res) {
        const { id } = req.params;
        const { fullname, email } = req.body
        
        const userData = {
            fullname: fullname,
            email: email,
        }
        
        try {
            const userUpdate = await userService.update(id, userData);
            return res.json({ "message": "User Updated with success"}).status(200);
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
        let { id } = req.params;

        try {
            const deleteUser = await userService.remove(id);

            if (!deleteUser) {
                return res.send('User could not be deleted').status(400);
            }

            return res.send('User deleted with success').status(200);
        } catch (error) {
            return res.send(error).status(500);
        }
    }
    
}
module.exports = new UserController;