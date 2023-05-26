import axios from 'axios';
export const getReviews = async id => {
  const options = {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDIzZjg0NjRlZGNmNjdiNmIxZGM3ZTc5ZTBjMTQxNCIsInN1YiI6IjY0NmY0OWZiMDcyMTY2MDBkZDY4YjYxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8dcIbWOLk3O9m3eyavEh53grUtKkiK3URKPgD8_5seQ',
    },
  };
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews`,
    options
  );
  const array = response.data;
  return array;
};
