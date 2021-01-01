class Movie {
    constructor(palinMovieOrName,length,poster,director,stars) {
        if (typeof palinActorOrfname === 'object' ){

            this.movieName = palinMovieOrName.fname;
            this.length = palinMovieOrName.length;    
            this.poster = palinMovieOrName.poster;
            this.director = palinMovieOrName.director;
            this.stars = palinMovieOrName.stars;
        } else{
            this.movieName = palinMovieOrName;
            this.length = length;    
            this.poster = poster;
            this.director = director;
            this.stars = stars;
        }
    }
  
}

export default Movie;