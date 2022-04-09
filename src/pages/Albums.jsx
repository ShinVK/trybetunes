import React from 'react';
import { Link } from 'react-router-dom';

export default function Albums({ data }) {
  // const
  return (
    data.map((album) => (
      <div key={ album.collectionId }>
        <img src={ album.artworkUrl100 } alt={ album.collectionName } />
        <h2>{ album.artistName }</h2>
        <Link
          to={ {
            pathname: `/album/${album.collectionId}`,
            query: { idCol: album.collectionId },
          } }
          data-testid={ `link-to-album-${album.collectionId}` }
        >
          { album.collectionName }
        </Link>
      </div>
    ))
  );
}
