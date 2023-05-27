import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getReviews } from 'services/reviews-details-API';
import { Container, Content, List, ListItem } from './Rewiew.styled';

const Review = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    getReviews(movieId)
      .then(films => {
        setMovie(films.results);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <Container>
      <List>
        {movie.map(review => {
          return (
            <ListItem key={review.id}>
              <Content>{review.content}</Content>
            </ListItem>
          );
        })}
      </List>
      {movie.length === 0 && <p>We don't have any reviews for this movie</p>}
    </Container>
  );
};
export default Review;
