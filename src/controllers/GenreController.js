const genreService = require("../services/GenreService");
 
/**
* Controller Responsible for Genre Entity
* @returns an instance of Genre
*/
class GenreController{
  
    /**
    * @param req 
    * name: @String 
    * @param {*} res 
    * @returns an instance of Genre
    */
    async create(req, res) {
        const { name } = req.body

        const genreData = {
            name: name
        }

        try {
            const genre = await genreService.register(genreData);
            return res.json({"message":"Genre created"}).status(201)
        } catch (error) {
            return res.send(error).status(500);
        }    
    }

    /**
     * 
     * @param req 
     * id: @String
     * @param {*} res 
     * @returns a single instance of Genre
     */
    async getById(req, res) {
        const { id } = req.params;
        
        try {
            const findGenre = await genreService.getById(id);
            return res.json({ findGenre });
        } catch (error) {
            return res.send(error).status(500);
        }
    }
    
    /**
    * @param req 
    * @param {*} res 
    * @returns an array of Genres
    */
    async getAll(req, res) {
        try {
            const genres = await genreService.getAll();
            return res.send(genres).status(200);
        } catch (error) {
            return res.send(error).status(500);
        }
    }


    /**
    * @param req 
    * id: @String
    * name: @String 
    * @param {*} res 
    * @returns an updated instance of Genre
    */ 
    async update(req, res) {
        const { id } = req.params;
        const { name} = req.body
        
        try {
            const genreUpdate = await genreService.update(id, name);
            return res.json({ "message": "Genre Updated with success"}).status(200);
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
            const deleteGenre = await genreService.remove(id);

            if (!deleteGenre) {
                return res.send('Genre could not be deleted').status(400);
            }

            return res.send('Genre deleted with success').status(200);
        } catch (error) {
            return res.send(error).status(500);
        }
    }
    
}
module.exports = new GenreController;