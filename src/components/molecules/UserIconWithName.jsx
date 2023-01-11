import React from 'react';
import styled from 'styled-components';
import { UserIconImg } from '../atoms/UserIconImg';

export const UserIconWithName = ({ profileUser }) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div>
      <SPriofileImg
        src={
          profileUser.profileImg
            ? PUBLIC_FOLDER + profileUser.profileImg
            : PUBLIC_FOLDER + '/person/noAvatar.png'
        }
      />
      <SProfileUserName>{profileUser.username}</SProfileUserName>
    </div>
  );
};
const SPriofileImg = styled(UserIconImg)`
  width: 160px;
  height: 160px;
  margin: 0 auto;
  @media (min-width: 425px) {
    & {
      width: 180px;
      height: 180px;
    }
  }
`;
const SProfileUserName = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 18px;
  text-align: center;
`;
