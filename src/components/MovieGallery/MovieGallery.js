import React, { lazy } from 'react';
// import MovieGalleryItem from '../MovieGalleryItem';
import s from './MovieGallery.module.css';

const MovieGalleryItem = lazy(() =>
  import('../MovieGalleryItem' /* webpackChunkName: "movie" */),
);

export default function MovieGallery({ movies }) {
  return (
    <ul className={s.list}>
      {movies.map(item => (
        <MovieGalleryItem movie={item} key={item.id} />
      ))}
    </ul>
  );
}
