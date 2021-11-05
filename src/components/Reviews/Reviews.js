import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import s from './Reviews.module.css';
import PropTypes from 'prop-types';
import { movieReviewsGet } from '../../services/moviesApi';
import PreLoader from '../Loader/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('pending');
  const { movieId } = useParams();

  useEffect(() => {
    setStatus('pending');
    movieReviewsGet(movieId).then(setReviews).finally(setStatus('success'));
  }, [movieId]);

  if (status === 'pending') {
    return <PreLoader />;
  }

  if (status === 'success') {
    return (
      <ul className={s.list}>
        {reviews && reviews.length > 0 ? (
          reviews.map(review => (
            <li key={review.id} className={s.item}>
              <h2>Author: {review.author}</h2>
              <p>Review:{review.content}</p>
            </li>
          ))
        ) : (
          <h2>There are not reviews for this movie</h2>
        )}
      </ul>
    );
  }
};

// Reviews.propTypes = {
//   movieId: PropTypes.object.isRequired,
// };
export default Reviews;
