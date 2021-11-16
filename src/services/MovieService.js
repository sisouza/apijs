const Movie = require("../models/Movie.js");
const Genre = require("../models/Genre.js");

class MovieService {

    async register(MovieData) {

        const findMovie = await Movie.findOne({ where: { name: MovieData.name}});
        
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
        const listMovies = await Movie.findAll({include: ["genre"]});

        if (!listMovies) {
            return 'unable to list Movies';
        }      
        return listMovies;
    }

    async update(id, movieData) {

        const movieExists =  await Movie.findByPk(id);
        
        if (!movieExists) {
            return 'Could Not Find Movie to edit';
        }

        const updateMovie = {
            name: movieData.name,
            sinopse: movieData.sinopse,  
            year: movieData.year,
            poster: movieData.poster,
            box_office: movieData.box_office,
            genreId: movieData.genreId
         };
         
        const update = await Movie.update(updateMovie, { where: { id: id } });
         
        if (!update) {
            return 'Could not update Movie';
        }
         
        return update;
        
    }

   async remove(movieId) {
        const movieExists = await Movie.findByPk(movieId);

        if (!movieExists) {
            return false;
        }
       
        const remove = await Movie.destroy({where:{id: movieId }})
        
       if (!remove) {
           return 'Movie could not be deleted'
       }

       return 'Movie deleted with success';
   }
}

module.exports = new MovieService;