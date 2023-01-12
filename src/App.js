import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AddPost } from './components/AddPost/AddPost';
import { Login } from './components/pages/Login';
import { Register } from './components/pages/Register';
import { Post } from './components/pages/Post';
import { Profile } from './components/pages/Profile';
import { FollowUserInfo } from './components/organisms/FollowUserInfo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Post />} />
      <Route path="/profile/:username" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/addpost" element={<AddPost />} />
      <Route path="/follow" element={<FollowUserInfo />} />
    </Routes>
  );
}

export default App;
