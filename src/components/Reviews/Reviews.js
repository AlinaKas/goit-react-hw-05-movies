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
              <p className={s.author}>
                Author: <span className={s.authorName}>{review.author}</span>{' '}
              </p>
              <p className={s.review}>
                Review: <span className={s.reviewText}>{review.content}</span>
              </p>
            </li>
          ))
        ) : (
          <p className={s.message}>There are no reviews for this movie</p>
        )}
      </ul>
    );
  }
};

// Reviews.propTypes = {
//   movieId: PropTypes.object.isRequired,
// };
export default Reviews;
