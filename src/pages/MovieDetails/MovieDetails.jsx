import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { AvatarGenerator } from 'random-avatar-generator';
import { BASE_URL, API_KEY } from 'api';
import styled from 'styled-components';


import {
  Description,
  Button,
  MovieDetTittle,
  MovieDetText,
  MovieDetSubTittle,
  MovieDetlsDesc,
  MovieDetPageSubTittle,
  InfoList,
} from './MovieDetails.styled';
import { LoadingText } from 'components/Layout/Layout.styled';


export const generator = new AvatarGenerator();

const StyledLinkInfo = styled(Link)`
  color: #020250;
  text-decoration: none;
  font-size: 24px;

  &:active {
    color: #e0e005;
    font-weight: 500;
    opacity: 0.5;
  }
`;

  

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
      .then(({ data }) => setMovieDetails(data))
      .catch(error => setError(error));
  }, [movieId]);

 

  return (
    <>
      <Button to={backLinkLocationRef.current}>Go back</Button>
      {error && <p>{error.message}</p>}
      {movieDetails && (
        <Description>
          <div>
            <img
              src={
                movieDetails.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
                  : generator.generateRandomAvatar()
              }
              width="200px"
              alt={movieDetails.title}
            />
          </div>
          <div>
            <MovieDetTittle>
              {movieDetails.title}
              {' ('}
              {movieDetails.release_date &&
                movieDetails.release_date.slice(0, 4)}
              {')'}
            </MovieDetTittle>
            <MovieDetText>
              User score: {Math.round(movieDetails.vote_average * 10)}%
            </MovieDetText>
            <MovieDetSubTittle>Overview</MovieDetSubTittle>
            <MovieDetlsDesc>{movieDetails.overview}</MovieDetlsDesc>
            <MovieDetSubTittle>Genres</MovieDetSubTittle>
            <MovieDetlsDesc>
              {movieDetails.genres &&
                movieDetails.genres.map(i => i.name + ' ')}
            </MovieDetlsDesc>
          </div>
        </Description>
      )}
      <MovieDetPageSubTittle>
        Additional information
      </MovieDetPageSubTittle>
      <InfoList>
        <li>
          <StyledLinkInfo to="cast">Cast</StyledLinkInfo>
        </li>
        <li>
          <StyledLinkInfo to="reviews">Reviews</StyledLinkInfo>
        </li>
      </InfoList>
      <Suspense fallback={<LoadingText>Loading...</LoadingText>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails ;