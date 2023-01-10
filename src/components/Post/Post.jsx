import styled from 'styled-components';
import insta from '../../images/insta.png';
import { Text } from '../Text/Text';
import Home from '@mui/icons-material/Home';
import { FooterHome } from '../Home/FooterHome';
import { Posts } from '../../dummyData.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
export const Post = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get('/posts');
      console.log(response);
      setPosts(response.data);
    };
    fetchPost();
  }, []);
  return (
    <SPostMain>
      <PostBg>
        <PostSlide>
          {posts.map((post) => (
            <Text post={post} key={post._id} />
          ))}

          {/* <Text user={user} />
          <Text user={user} />
          <Text user={user} /> */}
        </PostSlide>
      </PostBg>
      <FooterHome />
    </SPostMain>
  );
};
const SPostMain = styled.div`
  position: relative;
`;
const PostBg = styled.div`
  color: white;
  background-color: black;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const PostSlide = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100%;
  border-radius: 0;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 425px) {
    & {
      max-width: 400px;
      width: 100%;
      height: 95vh;
      border-radius: 20px;
    }
  }

  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  overflow: scroll;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
`;
