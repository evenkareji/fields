import React from 'react';
import styled from 'styled-components';
import { ProfileCountDt } from '../atoms/ProfileCountDt';
import { ProfileCountDd } from '../atoms/ProfileCountDd';
import { FooterHome } from '../Home/FooterHome';

export const ProfileCount = ({ count, name }) => {
  return (
    <ProfileDl>
      <ProfileCountDt>{count}</ProfileCountDt>
      <ProfileCountDd>{name}</ProfileCountDd>
      <FooterHome />
    </ProfileDl>
  );
};

const ProfileDl = styled.dl`
  position: relative;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
