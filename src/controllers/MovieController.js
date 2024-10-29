import MovieService from "../services/MovieService.js";

class MovieController {
    static async getMoviePlot (req, res) {
        const movieName = req.query.movie;
        try {
            const moviePlot = await MovieService.getMovieInfo(movieName);
            res.status(200).json(moviePlot);
        }catch (error) {
            res.status(500).json({message: error.message});
        }
    }
}

export default MovieController;
