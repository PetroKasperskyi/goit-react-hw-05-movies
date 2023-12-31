import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL, API_KEY } from 'api';
import {
  ItemReviews,
  ListReviews,
  TextReviews,
  TitleReviews,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsList, setReviewsList] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    axios
      .get(`${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`)
      .then(({ data }) => setReviewsList(data.results))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <>
      <ListReviews>
        {reviewsList.length > 0 ? (
          reviewsList.map(i => (
            <ItemReviews key={i.id}>
              <TitleReviews>Author: {i.author.toUpperCase()}</TitleReviews>
              <TextReviews>{i.content}</TextReviews>
            </ItemReviews>
          ))
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </ListReviews>
    </>
  );
};

export default Reviews;
