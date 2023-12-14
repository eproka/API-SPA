import React from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import UserList from "./routes/UserList";
import UserDetail from "./routes/UserDetail";
import AlbumList from "./routes/AlbumList";
import AlbumDetail from "./routes/AlbumDetail";
import NotFound from "./routes/NotFound";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/users" activeClassName="active">
          Users
        </NavLink>

        <NavLink to="/albums" activeClassName="active">
          Albums
        </NavLink>
      </nav>

      <Routes>
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:userId" element={<UserDetail />} />
        <Route path="/albums" element={<AlbumList />} />
        <Route path="/albums/:albumId" element={<AlbumDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <hr />

      <footer>Created by Your Name | {getCurrentYear()}</footer>
    </BrowserRouter>
  );
}

export default App;
