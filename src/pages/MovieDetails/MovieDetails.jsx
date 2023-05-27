/* eslint-disable react/jsx-no-undef */
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';

import { movieDetails } from 'services/movie-details-API';
import { Suspense, useEffect, useState } from 'react';
import { useRef } from 'react';
import {
  Button,
  Capture,
  Genres,
  Image,
  Overview,
  Vote,
  Container,
  Card,
  List,
  ListItem,
  StyledLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');

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
    <>
      <Link to={backLinkHref.current}>
        <Button>Go back</Button>
      </Link>
      <Container>
        <Card>
          <Image
            src={
              movie.poster_path &&
              `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
            }
            alt={movie.original_title}
          />
          <Capture>{movie.original_title}</Capture>
          <Vote>User score: {(movie.vote_average * 10).toFixed(0)}%</Vote>
          <Overview>Overview: {movie.overview}</Overview>
          <Genres>Genres: {genres}</Genres>
        </Card>

        <List>
          <ListItem>
            <StyledLink to="cast">Cast</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="reviews">Review</StyledLink>
          </ListItem>
        </List>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
export default MovieDetails;
