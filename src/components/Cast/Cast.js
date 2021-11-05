import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { movieCastGet } from '../../services/moviesApi';
import default_avatar from '../../images/default_avatar.png';
import PreLoader from '../Loader/Loader';
import s from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState('pending');
  const { movieId } = useParams();

  useEffect(() => {
    movieCastGet(movieId).then(setCast).finally(setStatus('success'));
  }, [movieId]);

  if (status === 'pending') {
    return <PreLoader />;
  }
  if (status === 'success') {
    return (
      <ul className={s.list}>
        {cast && cast.length > 0 ? (
          cast.map(({ id, profile_path, name, character }) => (
            <li key={id} className={s.item}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w300${profile_path}`
                    : default_avatar
                }
                alt={name}
              />
              <h3 className={s.title}>{name}</h3>
              <p className={s.description}>{character}</p>
            </li>
          ))
        ) : (
          <h3>Nothing found</h3>
        )}
      </ul>
    );
  }
};

export default Cast;
