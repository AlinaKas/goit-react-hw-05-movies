import React from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import s from './MovieGalleryItem.module.css';

export default function MovieGalleryItem({ movie }) {
  const location = useLocation();
  // const { url } = useRouteMatch();
  return (
    <li className={s.item}>
      <Link
        className={s.link}
        exact
        to={{
          pathname: `/movies/${movie.id}`,
          state: { from: location, label: 'Back to search' },
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.original_title}
          width="300"
          className={s.image}
        />
        <div className={s.titleWrap}>
          <h3 className={s.title}>{movie.original_title}</h3>
        </div>
      </Link>
    </li>
  );
}
