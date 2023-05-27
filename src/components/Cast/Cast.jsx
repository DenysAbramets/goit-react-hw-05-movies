import { useParams } from 'react-router-dom';
import { getCastDetails } from 'services/cast-details-API';
import { useEffect, useState } from 'react';
import {
  Character,
  Container,
  Image,
  List,
  ListItem,
  Name,
} from './Cast.styled';
const Cast = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  console.log(movieId);
  useEffect(() => {
    getCastDetails(movieId)
      .then(films => {
        setMovie(films.cast);
      })
      .catch(err => console.log(err));
  }, [movieId]);
  return (
    <Container>
      <List>
        {movie.map(hero => {
          return (
            <ListItem key={hero.id}>
              <Image
                src={
                  hero.profile_path &&
                  `https://image.tmdb.org/t/p/w500/${hero.profile_path}`
                }
                alt={hero.name}
                width="100px"
              />
              <Name> Actor:{hero.name}</Name>
              <Character> Character: {hero.character}</Character>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};
export default Cast;
