import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './components/Login/Login';
import { Post } from './components/Post/Post';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Post />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
