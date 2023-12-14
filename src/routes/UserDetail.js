import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "/src/styles.css";

function UserDetail() {
  const [user, setUser] = useState(null);
  const [albums, setAlbums] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data));

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
      .then((response) => response.json())
      .then((data) => setAlbums(data));
  }, [userId]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="user-detail-div">
      <div className="user-info-div">
        <h2>User Detail</h2>
        <h3>{user.name}</h3>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
      </div>
      <AlbumDetail albums={albums} user={user} />
    </div>
  );
}

export default UserDetail;
