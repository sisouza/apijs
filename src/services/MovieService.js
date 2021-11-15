const Movie = require("../models/Movie.js");
const Genre = require("../models/Genre.js");

class MovieService {

    async register(MovieData) {

        const findMovie = await Movie.findOne({ where: { email: MovieData.email}});
        
        if (findMovie > 1) {
            return false;
        }

        const movie = await Movie.create(MovieData);

        return movie;
    }


   async getById(idMovie) {
        const movieExists = await Movie.findByPk(idMovie);
        
        if (!movieExists) {
            return false;
        }
        
       const movie = Movie.findAll({ where: { id: idMovie } }, { include: ["genre"] });

        return movie;
    }


    async getAll() {
        const listMovies = await Movie.indAll({include: ["genre"]});

        if (!listMovies) {
            return 'unable to list Movies';
        }      
        return listMovies;
    }

    async update(id, Movie) {

        const MovieExists =  await Movie.findByPk(id);
        
        if (!MovieExists) {
            return 'Could Not Find Movie to edit';
        }

        const updateMovie = {
            fullname: Movie.fullname,
            email: Movie.email,               
         };
         
        const update = await  Movie.update(updateMovie, { where: { id: id } });
         
        if (!update) {
            return 'Could not update Movie';
        }
         
        return update;
        
     }

   async remove(MovieId) {
        const MovieExists = await Movie.findByPk(MovieId);

        if (!MovieExists) {
            return false;
        }
       
        const remove = await Movie.destroy({where:{id:MovieId }})
        
       if (!remove) {
           return 'Movie could not be deleted'
       }

       return 'Movie deleted with success';
   }
}

module.exports = new MovieService;