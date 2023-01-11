import React from 'react';

import { SUserIconImg } from '../atoms/SUserIconImg';
import { Icon } from '../atoms/Icon';
import { Home } from '../molecules/Home';
import { AddPostIcon } from '../molecules/AddPostIcon';
import next from '../../images/next.png';
import styled from 'styled-components';

export const FooterIcon = () => {
  return (
    <SFooter>
      {/* ホーム */}
      <Home />
      {/* addpost */}
      <AddPostIcon />

      {/* プロフィール */}
      <Icon link={'/profile/メイウェザー'}>
        <SProfileIcon src={next} />
        <small>プロフィール</small>
      </Icon>
    </SFooter>
  );
};

const SFooter = styled.footer`
  border-top: 1px solid #dbdbdb;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 425px) {
    & {
      background-color: rgb(255, 255, 255);
      justify-content: space-around;
    }
  }
`;
const SProfileIcon = styled(SUserIconImg)`
  width: 32px;
  height: 32px;
`;
