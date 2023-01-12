import React from 'react';
import styled from 'styled-components';
import { UserInfo } from '../molecules/UserInfo';
export const UsersInfo = () => {
  return (
    <SUsersContainer>
      <UserInfo />
      <UserInfo />
      <UserInfo />
      <UserInfo />
      <UserInfo />
      <UserInfo />
      <UserInfo />
    </SUsersContainer>
  );
};
const SUsersContainer = styled.div`
  width: 92%;
  margin: 0 auto;
`;
