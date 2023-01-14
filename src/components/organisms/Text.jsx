import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { OnFollowBtn } from '../atoms/OnFollowBtn';
import { UnFollowBtn } from '../atoms/UnFollowBtn';
import ChatIcon from '@mui/icons-material/Chat';
import { HeartIcon } from '../atoms/HeartIcon/HeartIcon';
import { IconButton } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../state/AuthContext';

export const Text = ({ post }) => {
  const [isFollow, setIsFollow] = useState(false);
  const [user, setUser] = useState({});
  const { user: loginUser } = useContext(AuthContext);
  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users/${post.userId}`);
      setUser(response.data);
    };
    fetchUser();
  }, [post.userId]);

  const handleLike = async () => {
    try {
      const response = await axios.put(`/posts/${post._id}/like`, {
        userId: loginUser._id,
      });

      setIsGood(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleFollow = async () => {
    try {
      // フォローはできてるけどstorageに保存できてない;
      console.log('実行');
      const response = await axios.put(`/users/${post.userId}/follow`, {
        userId: loginUser._id,
      });
      console.log('実行完了');

      // setIsGood(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleUnFollow = async () => {
    try {
      // フォローはできてるけどstorageに保存できてない;
      console.log('実行');
      const response = await axios.put(`/users/${post.userId}/unfollow`, {
        userId: loginUser._id,
      });
      console.log('実行完了');

      // setIsGood(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  // HeartActionSave
  const [isGood, setIsGood] = useState(post.likes.includes(loginUser._id));
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <PostBorder>
      {/* <SImg src={next} alt="" /> */}
      <SBg />
      <SPostContent>
        <SPostHeader>
          <Link to={`profile/${user.username}`}>
            <SUserIconImg
              src={
                user.profileImg
                  ? PUBLIC_FOLDER + user.profileImg
                  : PUBLIC_FOLDER + '/person/noAvatar.png'
              }
            />
          </Link>
          <Box>
            <SUserName>
              {/* post.idとuser.idが一致した時投稿したユーザーと判別される */}
              {user.username}
            </SUserName>
            {/* onClick={() => */}
            {loginUser._id !== post.userId && (
              <div
                onClick={() => {
                  handleFollow();
                  return setIsFollow(!isFollow);
                }}
              >
                {isFollow ? (
                  <OnFollowBtn>フォロー中</OnFollowBtn>
                ) : (
                  <UnFollowBtn>フォロー</UnFollowBtn>
                )}
              </div>
            )}
          </Box>
        </SPostHeader>
        <SDescContainer>
          <SPostArticle>{post.desc}</SPostArticle>
        </SDescContainer>
      </SPostContent>
      <SAside>
        <div
          onClick={() => {
            handleLike();
          }}
        >
          <HeartIcon isGood={isGood} />
        </div>
        <HeartCount>{post.likes.length}</HeartCount>
        <IconButton>
          <Chat sx={{ fontSize: 30 }} />
        </IconButton>
        <ChatCount>{post.comment}</ChatCount>
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
const SPostHeader = styled.header`
  display: flex;
  align-items: center;
`;

const SDescContainer = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;
const SPostArticle = styled.p`
  font-size: 24px;
  color: #000;
  font-family: 'Noto Serif JP';
  line-height: 2.4em;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
`;
const Box = styled.div`
  margin-left: 20px;
`;

const SUserIconImg = styled.img`
  object-fit: cover;
  border-radius: 100%;
  width: 52px;
  height: 52px;
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
