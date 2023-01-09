import React from 'react';
import { SUserIconImg } from '../atoms/SUserIconImg';
import next from '../../images/next.png';
import styled from 'styled-components';
import { ProfileCount } from '../molecules/ProfileCount';
import { PersonalPost } from '../PersonalPost/PersonalPost';
import { IconButton } from '@mui/material';
export const Profile = () => {
  return (
    <div>
      <SProfileInfo>
        <SPriofileImg src={next} />
        <SProfileUserName>mafin</SProfileUserName>
        <SProfileFlex>
          <ProfileCount name="フォロー" count="999" />
          <ProfileCount name="フォロワー" count="999" />
          <ProfileCount name="ありがとう" count="999" />
        </SProfileFlex>
      </SProfileInfo>
      <SIconButtons>
        <SIconButton>
          <SProfileOption>投稿</SProfileOption>
        </SIconButton>
      </SIconButtons>
      <SPadding>
        <PersonalPost />
      </SPadding>
    </div>
  );
};
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
