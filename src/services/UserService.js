const User = require("../models/User.js");

class UserService {

    async register(userData) {

        const findUser = await User.findOne({ where: { email: userData.email}});
        
        if (findUser > 1) {
            return false;
        }

        const user = await User.create(userData);

        return user;
    }


   async getById(idUser) {
        const userExists = await User.findByPk(idUser);
        
        if (!userExists) {
            return false;
        }
        
        const user = User.findAll({ where: { id: idUser}});

        return user;
    }


    async getAll() {
        const listUsers = await User.findAll();

        if (!listUsers) {
            return 'unable to list users';
        }      
        return listUsers;
    }

    async update(id, user) {

        const userExists =  await User.findByPk(id);
        
        if (!userExists) {
            return 'Could Not Find User to edit';
        }

        const updateUser = {
            fullname: user.fullname,
            email: user.email,               
         };
         
        const update = await  User.update(updateUser, { where: { id: id } });
         
        if (!update) {
            return 'Could not update User';
        }
         
        return update;
        
     }

   async remove(userId) {
        const userExists = await User.findByPk(userId);

        if (!userExists) {
            return false;
        }
       
        const remove = await User.destroy({where:{id:userId }})
        
       if (!remove) {
           return 'user could not be deleted'
       }

       return 'user deleted with success';
   }
}

module.exports = new UserService;