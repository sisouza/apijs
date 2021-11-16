const movieService = require("../services/MovieService");
 
/**
* Controller Responsible for Movie Entity
* 
* @returns an instance of Movie
*/
class MovieController{
  
    /**
    * @param req 
    * name: @String 
    * sinopse: @Text  
    * year: @Int
    * poster: @String
    * box_office: @Decimal
    * genreId: @String
    * @param {*} res 
    * @returns an instance of Movie
    */
    async create(req, res) {
        const { name, sinopse, year, poster, box_office, genreId } = req.body
        
        const movieData = {
            name: name,
            sinopse: sinopse,  
            year: year,
            poster: poster,
            box_office: box_office,
            genreId: genreId
        }

        try {
            const Movie = await movieService.register(movieData);
            return res.json({ "message": "Movie created"})
        } catch (error) {
            return res.send(error).status(500);
        }    
    }

    /**
    * @param req 
    * id: @String
    * @param {*} res 
    * @returns a single instance of Movie
    */
    async getById(req, res) {
        const { id } = req.params;
        
        try {
            const findMovie = await movieService.getById(id);
            return res.json({ findMovie });
        } catch (error) {
            return res.send(error).status(500);
        }
    }
    
    /**
     * 
     * @param req 
     * @param {*} res 
     * @returns an array of Movies
     */
    async getAll(req, res) {
        try {
            const Movies = await movieService.getAll();
            return res.send(Movies).status(200);
        } catch (error) {
            return res.send(error).status(500);
        }
    }


    /**
    * @param req 
    * name: @String 
    * sinopse: @Text  
    * year: @Int
    * poster: @String
    * box_office: @Decimal
    * genreId: @String
    * @param {*} res 
    * @param {*} res 
    * @returns an updated instance of Movie
    */ 
    async update(req, res) {
        const { id } = req.params;
        const { name, sinopse, year, poster, box_office, genreId } = req.body
        
        const movieData = {
            name: name,
            sinopse: sinopse,  
            year: year,
            poster: poster,
            box_office: box_office,
            genreId: genreId
        }
        
        try {
            const movieUpdate = await movieService.update(id, movieData);
            return res.json({ "message": "Movie Updated with success"}).status(200);
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
            const deleteMovie = await movieService.remove(id);

            if (!deleteMovie) {
                return res.send('Movie could not be deleted').status(400);
            }

            return res.send('Movie deleted with success').status(200);
        } catch (error) {
            return res.send(error).status(500);
        }
    }
    
}
module.exports = new MovieController;