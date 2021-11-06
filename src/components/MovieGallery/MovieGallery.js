import React from 'react';
import s from './MovieGallery.module.css';
import MovieGalleryItem from '../MovieGalleryItem';

export default function MovieGallery({ movies }) {
  return (
    <ul className={s.list}>
      {movies.map(item => (
        <MovieGalleryItem movie={item} key={item.id} />
      ))}
    </ul>
  );
}
