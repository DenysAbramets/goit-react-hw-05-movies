import { useParams } from 'react-router-dom';
import { getCastDetails } from 'services/cast-details-API';
import { useEffect, useState } from 'react';
const Cast = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  console.log(movieId);
  useEffect(() => {
    getCastDetails(movieId).then(films => {
      setMovie(films.cast);
    });
  }, [movieId]);
  return (
    <div>
      <ul>
        {movie.map(hero => {
          return (
            <li key={hero.id}>
              <img
                src={
                  hero.profile_path &&
                  `https://image.tmdb.org/t/p/w500/${hero.profile_path}`
                }
                alt={hero.name}
                width="50"
              />
              <p>{hero.name}</p>
              <p> Character: {hero.character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Cast;
