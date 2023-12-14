import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h2>404</h2>
      <p>Page Not Found</p>
      <p>Go to page
        <Link to="/albums"> Albums</Link>
      </p>
    </div>
  );
}

export default NotFound; 