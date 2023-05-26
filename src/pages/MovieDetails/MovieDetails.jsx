import { Link, Outlet, useParams } from 'react-router-dom';
import { movieDetails } from 'services/movie-details-API';
import { useEffect, useState } from 'react';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    movieDetails(movieId).then(films => {
      setMovie(films);
    });
  }, [movieId]);
  let genres = [];
  if (movie.genres) {
    genres = movie.genres.map(genre => genre.name).join(', ');
  }

  return (
    <div>
      <img
        src={
          movie.poster_path &&
          `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        }
        alt={movie.original_title}
      />
      <h2>{movie.original_title}</h2>
      <p>User score: {(movie.vote_average * 10).toFixed(0)}%</p>
      <p>Overview: {movie.overview}</p>
      <p>Genres: {genres}</p>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Review</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
export default MovieDetails;
