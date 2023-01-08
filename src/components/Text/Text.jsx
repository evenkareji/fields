import React, { useState } from 'react';
import styled from 'styled-components';
// import { IconButton } from '@material-ui/core';
import { OnFollowBtn } from '../atoms/OnFollowBtn';
import { UnFollowBtn } from '../atoms/UnFollowBtn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatIcon from '@mui/icons-material/Chat';
import { HeartIcon } from '../atoms/HeartIcon/HeartIcon';
import { IconButton } from '@mui/material';
export const Text = ({ user }) => {
  const [isGood, setIsGood] = useState(false);
  const [isFollow, setIsFollow] = useState(false);

  return (
    <PostBorder>
      {/* <SImg src={next} alt="" /> */}
      <SBg />
      <SPostContent>
        <SPostHeader>
          <SUserIconImg src={user.icon} />
          <Box>
            <SUserName>{user.name}</SUserName>
            <div onClick={() => setIsFollow(!isFollow)}>
              {isFollow ? (
                <OnFollowBtn>フォロー中</OnFollowBtn>
              ) : (
                <UnFollowBtn>フォロー</UnFollowBtn>
              )}
            </div>
          </Box>
        </SPostHeader>
        <SPostArticle>{user.text}</SPostArticle>
      </SPostContent>
      <SAside>
        <div onClick={() => setIsGood(!isGood)}>
          <HeartIcon isGood={isGood} />
        </div>
        <HeartCount>{user.heartCount}</HeartCount>
        <IconButton>
          <Chat sx={{ fontSize: 30 }} />
        </IconButton>
        <ChatCount>{user.chatCount}</ChatCount>
      </SAside>
    </PostBorder>
  );
};
const SPostContent = styled.div`
  position: absolute;
  top: 25%;
  left: 38px;
  width: 74%;
  height: 70%;
`;
const SPostArticle = styled.p`
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #000;
  margin: auto 0;
  font-family: 'Noto Serif JP';
  line-height: 2.4em;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
`;
const Box = styled.div`
  margin-left: 20px;
  /* margin-top: 10px; */
`;
const SPostHeader = styled.header`
  display: flex;
  align-items: center;
`;

const SUserIconImg = styled.img`
  object-fit: cover;
  border-radius: 100%;
  width: 46px;
  height: 46px;
  background-color: #fff;
`;
const SUserName = styled.h1`
  color: #000;
  font-size: 16px;
  font-weight: bold;
`;

const SAside = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 62%;
  align-items: center;
  right: 10px;
  padding: 20px;
  text-align: center;
`;

const Chat = styled(ChatIcon)`
  color: #000;
  font-size: 100px;
`;
const HeartCount = styled.span`
  margin-bottom: 18px;
  color: #000;
`;
const ChatCount = styled.span`
  color: #000;
`;

const PostBorder = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  scroll-snap-align: start;
  scroll-snap-stop: always;
`;
const SBg = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  background-color: #fafafa;
`;
// const SImg = styled.img`
//   width: 100%;
//   height: 100vh;
//   object-fit: cover;
// `;
