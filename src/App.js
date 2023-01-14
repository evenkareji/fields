import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { AddPost } from './components/AddPost/AddPost';
import { Login } from './components/pages/Login';
import { Register } from './components/pages/Register';
import { Post } from './components/pages/Post';
import { Profile } from './components/pages/Profile';
import { FollowUserInfo } from './components/organisms/FollowUserInfo';
import { AuthContext } from './state/AuthContext';
import { useContext } from 'react';

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={user ? <Post /> : <Login />} />
      <Route path="/profile/:username" element={<Profile />} />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/addpost" element={<AddPost />} />
      <Route path="/follow" element={<FollowUserInfo />} />
    </Routes>
  );
}

export default App;
