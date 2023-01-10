import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Card } from '../Card/Card';
import axios from 'axios';

export const PersonalPost = ({ username }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(`/posts/profile/${username}`);
      setPosts(response.data);
    };
    fetchPosts();
  }, [username]);
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
  padding-bottom: 75px;
`;

const SUserArea = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  grid-gap: 3px 3px;
`;
