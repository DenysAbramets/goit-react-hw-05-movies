import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { axiosGetFilms } from 'services/trend-movies-API';

const Home = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    axiosGetFilms().then(films => {
      setFilms(films.results);
    });
  }, []);

  return (
    <div>
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <Link to={`movies/${film.id}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Home;
