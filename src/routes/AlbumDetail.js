import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function AlbumDetail({ albums, user }) {
  const [loading, setLoading] = useState(true);
  const [album, setAlbum] = useState(null);
  const [photos, setPhotos] = useState([]);
  const { albumId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
      .then((response) => response.json())
      .then((data) => setAlbum(data));

    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .finally(() => setLoading(false));
  }, [albumId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {album && (
        <div>
          <h2>Album: {album.title}</h2>
          <p>Created By: {user.name}</p>
        </div>
      )}
      <h3>Photos</h3>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumDetail;