import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
export const Card = ({ post }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users?userId=${post.userId}`);

      setUser(response.data);
    };
    fetchUser();
  }, [post.userId]);
  return (
    <SCard key={post._id}>
      <SProfileText key={post._id}>{post.desc}</SProfileText>
    </SCard>
  );
};
const SCard = styled.div`
  background-color: #ebeafc;
  border: 1px solid #000;
  padding: 70px 16px;
  height: 250px;
`;
const SProfileText = styled.div`
  font-family: 'Hannari';
  margin: 0 auto;
  font-size: 20px;
  width: 80%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-wrap: break-word;
`;
