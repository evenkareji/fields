import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AddPost } from './components/AddPost/AddPost';
import { HeartIcon } from './components/atoms/HeartIcon/HeartIcon';
import { Home } from './components/Home/FooterHome';
import { Login } from './components/molecules/Login';
import { Register } from './components/molecules/Register';
import { PersonalPost } from './components/PersonalPost/PersonalPost';
import { Post } from './components/Post/Post';
import { Profile } from './components/Profile/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Post />} />
      <Route path="/mafin" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/addpost" element={<AddPost />} />
      <Route path="/personalpost" element={<PersonalPost />} />
    </Routes>
  );
}

export default App;
