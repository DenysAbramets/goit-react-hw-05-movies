import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import Movies from 'pages/Movies';
import Cast from './Cast/Cast';
import Review from './Rewiew/Review';
import Layout from './Layout/Layout';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
export default App;
