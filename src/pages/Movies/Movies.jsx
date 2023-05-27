import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSearchResults } from 'services/movie-search-API';
import { useLocation } from 'react-router-dom';
import {
  Button,
  Film,
  Form,
  Input,
  List,
  ListItem,
  MovieContainer,
} from './Movies.styled';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

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
    e.target.elements.search.value = '';
  };

  return (
    <MovieContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="search"
          placeholder="Enter name of film you want to find"
        />
        <Button type="submit">Search</Button>
      </Form>

      <List>
        {films.map(({ title, id }) => (
          <ListItem key={id}>
            <Film to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Film>
          </ListItem>
        ))}
      </List>
    </MovieContainer>
  );
};
export default Movies;
