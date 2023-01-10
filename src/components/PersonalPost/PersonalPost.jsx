import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Card } from '../Card/Card';
import axios from 'axios';

export const PersonalPost = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get('/posts/profile/mafin');
      console.log(response);
      setPosts(response.data);
    };
    fetchPost();
  }, []);
  return (
    <SPersonalPost>
      <SUserArea>
        {posts.map((post) => (
          <Card post={post} key={post._id} />
        ))}
      </SUserArea>
    </SPersonalPost>
  );
};

const SPersonalPost = styled.div`
  padding-top: 30px;
`;

const SUserArea = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 3px 3px;
`;
