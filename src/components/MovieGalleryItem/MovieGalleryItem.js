import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import s from './MovieGalleryItem.module.css';

export default function MovieGalleryItem({ movie }) {
  const { url } = useRouteMatch();
  return (
    <li className={s.item}>
      <Link to={`/${url}/${movie.id}`}>{movie.title}</Link>
    </li>
  );
}
