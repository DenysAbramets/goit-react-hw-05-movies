import { useSearchParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSearchResults } from 'services/movie-search-API';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    getSearchResults(query)
      .then(data => setFilms(data.results))
      .catch(error => console.log(error));
  }, [query, searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    const search = e.target.elements.search.value;
    console.log(e.target.elements.search.value);
    setSearchParams({ query: search });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Enter name of film you want to find"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Movies;
