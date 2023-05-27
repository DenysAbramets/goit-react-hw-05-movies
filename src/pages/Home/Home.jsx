import { useEffect, useState } from 'react';
import { axiosGetFilms } from 'services/trend-movies-API';
import { useLocation } from 'react-router-dom';
import { Film, HomeContainer, List, ListItem } from './Home.styled';

const Home = () => {
  const [films, setFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    axiosGetFilms()
      .then(films => {
        setFilms(films.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <HomeContainer>
      <List>
        {films.map(({ title, id }) => (
          <ListItem key={id}>
            <Film to={`movies/${id}`} state={{ from: location }}>
              {title}
            </Film>
          </ListItem>
        ))}
      </List>
    </HomeContainer>
  );
};
export default Home;
