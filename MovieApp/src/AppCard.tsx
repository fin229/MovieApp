import { FunctionComponent } from "react";

interface AppCardProps {
    movie: {
      poster_path: string;
      original_title: string;
      vote_average: number;
      overview: string;
    };
  }

const AppCard:FunctionComponent<AppCardProps>=({movie})=>{
    return (
        <div className="movies__card">
          <div className="card__image">
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="Poster" />
          </div>
          <div className="card__title">{movie.original_title}</div>
          <div className="card__rating">{movie.vote_average}/10</div>
          <div className="card__plot">{movie.overview.substring(0, 120)}...</div>
          <div className="card__actions">
            <a href="#" className="btn btn-primary">Details</a>
          </div>
        </div>
    );
}

export default AppCard;