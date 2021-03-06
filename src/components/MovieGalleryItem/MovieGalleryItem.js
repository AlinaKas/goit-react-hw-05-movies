import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from './MovieGalleryItem.module.css';
import poster_default from '../../images/default_movie.png';

export default function MovieGalleryItem({ movie }) {
  const location = useLocation();
  const { original_title, poster_path } = movie;

  let poster = poster_path
    ? `https://image.tmdb.org/t/p/w300${poster_path}`
    : poster_default;

  return (
    <li className={s.item}>
      <Link
        className={s.link}
        to={{
          pathname: `movies/${movie.id}`,
          state: { from: location, label: 'BACK TO HOME' },
        }}
      >
        <img
          src={poster}
          alt={original_title}
          width="300"
          className={s.image}
        />
        <div className={s.titleWrap}>
          <h3 className={s.title}>{original_title}</h3>
        </div>
      </Link>
    </li>
  );
}
