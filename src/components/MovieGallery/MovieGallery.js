import React from 'react';
import MovieGalleryItem from '../MovieGalleryItem';
import s from './MovieGallery.module.css';

export default function MovieGallery({ movies }) {
  return (
    <ul className={s.list}>
      {movies.map(item => (
        <MovieGalleryItem movie={item} key={item.id} />
      ))}
    </ul>
  );
}
