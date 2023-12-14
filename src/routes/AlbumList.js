import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function AlbumList() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(data => setAlbums(data));
  }, []);

  return (
    <div>
      <h2>Albums</h2>
      <ul>
        {albums.map(album => (
          <li key={album.id}>
            <NavLink to={`/albums/${album.id}`} activeClassName="active">{album.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumList;