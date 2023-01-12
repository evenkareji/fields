import React from 'react';
import styled from 'styled-components';
import { OnFollowBtn } from '../atoms/OnFollowBtn';
import { UserIconImg } from '../atoms/UserIconImg';
import insta from '../../images/next.png';
export const UserInfo = () => {
  return (
    <UserBorder>
      <SFollowImg src={insta} />
      <SFollowContainer>
        <SFollowName>メイ</SFollowName>
        <SFollowDesc>I blive my skills</SFollowDesc>
      </SFollowContainer>
      <SOnFollowButton>フォロー</SOnFollowButton>
    </UserBorder>
  );
};
const UserBorder = styled.div`
  width: 394px;
  margin: 0 auto;
  border: 1px solid #000;
  display: flex;
  align-items: center;
`;

const SOnFollowButton = styled(OnFollowBtn)``;
const SFollowImg = styled(UserIconImg)`
  margin-right: 13px;
  width: 61;
  height: 61;
  text-align: left;
  @media (min-width: 425px) {
    & {
      width: 71;
      height: 71;
    }
  }
`;
const SFollowContainer = styled.dl`
  flex: 0.9;
`;
const SFollowName = styled.dt`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: -5px;
`;
const SFollowDesc = styled.dd`
  font-size: 16px;
  color: #8f8f8f;
`;
