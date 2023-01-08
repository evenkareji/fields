import React from 'react';
import { SUserIconImg } from '../atoms/SUserIconImg';
import next from '../../images/next.png';
import styled from 'styled-components';
import { ProfileCount } from '../molecules/ProfileCount';
export const Profile = () => {
  return (
    <SProfileInfo>
      <SPriofileImg src={next} />
      <SProfileUserName>mafin</SProfileUserName>
      <SProfileFlex>
        <ProfileCount name="フォロー" count="999" />
        <ProfileCount name="フォロワー" count="999" />
        <ProfileCount name="ありがとう" count="999" />
      </SProfileFlex>
    </SProfileInfo>
  );
};
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
  padding: 32px 0;
  border: 1px solid #000;
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
