import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import { Login } from './components/pages/Login';
import { Register } from './components/pages/Register';
import { Post } from './components/pages/Post';
import { Profile } from './components/pages/Profile';
import { FollowUserInfo } from './components/organisms/FollowUserInfo';
import { AuthContext } from './state/AuthContext';
import { useContext } from 'react';
import { FollowTab } from './components/pages/FollowTab';
import { AddPost } from './components/templates/AddPost/AddPost';
function App() {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={user ? <Post /> : <Login />} />
      <Route path="/profile/:username" element={<Profile />} />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/follow" element={<FollowUserInfo />} />
      <Route path="/addpost" element={<AddPost />} />
    </Routes>
  );
}

export default App;
