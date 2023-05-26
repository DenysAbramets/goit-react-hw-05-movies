import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getSearchResults } from 'services/movie-search-API';

function MovieList({ filter = '' }) {
  const [films, setfilms] = useState([]);

  useEffect(() => {
    const queryResult = filter ? getSearchResults(filter) : getSearchResults();
    queryResult.then(data => setfilms(data.results));
  }, [filter]);

  return (
    <ul>
      {films.map(film => (
        <li key={film.id}>
          <Link to={`/movies/${film.id}`}>{film.title}</Link>
        </li>
      ))}
    </ul>
  );
}

// ListFilms.propTypes = {
//   filter: PropTypes.string,
// };

export default MovieList;
