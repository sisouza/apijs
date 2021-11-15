const Genre = require("../models/Genre.js");

class GenreService {

    async register(genreData) {

        const findGenre = await Genre.findOne({ where: { name: genreData.name}});
        
        if (findGenre > 1) {
            return false;
        } 

        const genre = await Genre.create(genreData);
        return genre;
    }


   async getById(idGenre) {
        const genreExists = await Genre.findByPk(idGenre);
        
        if (!genreExists) {
            return false;
        }
        
        const genre = genre.findAll({ where: { id: idGenre}});

        return genre;
    }


    async getAll() {
        const listGenres = await Genre.findAll();

        if (!listGenres) {
            return 'unable to list Genres';
        }      
        return listGenres;
    }

    async update(id, genre) {

        const genreExists =  await Genre.findByPk(id);
        
        if (!genreExists) {
            return 'Could Not Find Genre to edit';
        }

        const updateGenre = {
            fullname: genre.fullname,
            email: genre.email,               
         };
         
        const update = await Genre.update(updateGenre, { where: { id: id } });
         
        if (!update) {
            return 'Could not update Genre';
        }
         
        return update;
        
     }

   async remove(genreId) {
        const genreExists = await Genre.findByPk(genreId);

        if (!genreExists) {
            return false;
        }
       
        const remove = await Genre.destroy({where:{id:genreId }})
        
       if (!remove) {
           return 'Genre could not be deleted'
       }

       return 'Genre deleted with success';
   }
}

module.exports = new GenreService;