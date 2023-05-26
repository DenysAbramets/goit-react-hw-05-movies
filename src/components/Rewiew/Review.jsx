import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getReviews } from 'services/reviews-details-API';

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
    <div>
      <ul>
        {movie.map(review => {
          return (
            <li key={review.id}>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
      {movie.length === 0 && <p>We don't have any reviews for this movie</p>}
    </div>
  );
};
export default Review;
