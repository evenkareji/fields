import React, { useEffect, useState } from 'react';
import { SUserIconImg } from '../atoms/SUserIconImg';
import next from '../../images/next.png';
import styled from 'styled-components';
import { ProfileCount } from '../molecules/ProfileCount';
import { PersonalPost } from '../PersonalPost/PersonalPost';
import { IconButton } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FooterHome } from '../Home/FooterHome';
export const Profile = () => {
  const [profileUser, setProfileUser] = useState([]);
  const username = useParams().username;
  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(`/users?username=${username}`);
      console.log(response);
      setProfileUser(response.data);
    };
    fetchPost();
  }, [username]);
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <SProfileBox>
      <SProfileInfo>
        <SPriofileImg
          src={
            profileUser.profileImg
              ? PUBLIC_FOLDER + profileUser.profileImg
              : PUBLIC_FOLDER + '/person/noAvatar.png'
          }
        />
        <SProfileUserName>{profileUser.username}</SProfileUserName>
        <SProfileFlex>
          <ProfileCount name="フォロー" count="999" />
          <ProfileCount name="フォロワー" count="999" />
          <ProfileCount name="ありがとう" count="999" />
        </SProfileFlex>
        <SIntroduction>{profileUser.desc}</SIntroduction>
      </SProfileInfo>
      <SIconButtons>
        <SIconButton>
          <SProfileOption>投稿</SProfileOption>
        </SIconButton>
      </SIconButtons>
      <SPadding>
        <PersonalPost username={username} />
      </SPadding>
      <FooterHome username={username} />
    </SProfileBox>
  );
};
const SProfileBox = styled.div`
  position: relative;
`;
const SIntroduction = styled.div`
  padding: 30px 0px 0px;
  margin: 0 auto;
  width: 50%;
`;
const SIconButtons = styled.div`
  width: 100%;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
`;
const SProfileOption = styled.div`
  font-size: 18px;
`;
const SIconButton = styled(IconButton)`
  padding: 8px;
  text-decoration: none;
  font-size: inherit !important;
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: inherit !important;
  border-radius: 0px !important;
  @media (min-width: 425px) {
    width: 120px;
  }
`;

const SProfileFlex = styled.div`
  width: 55%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
const SProfileInfo = styled.div`
  width: 100%;
  min-width: 432px;
  margin: 0 auto;
  padding: 43px 0;
  /* border-bottom: 1px solid #000; */
`;
const SPriofileImg = styled(SUserIconImg)`
  width: 120px;
  height: 120px;
  margin: 0 auto;
  @media (min-width: 425px) {
    & {
      width: 150px;
      height: 150px;
    }
  }
`;
const SProfileUserName = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 18px;
  text-align: center;
`;
const SPadding = styled.div`
  padding-left: 3px;
  padding-right: 3px;
`;
