import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { SUserIconImg } from '../atoms/SUserIconImg';
import next from '../../images/next.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
export const FooterHome = () => {
  return (
    <SFooter>
      <SLinkFooter to="/">
        <SIconButton>
          <HomeIcon style={{ width: '35', height: '35' }} />
          <small>ホーム</small>
        </SIconButton>
      </SLinkFooter>
      <SLinkFooter to="/addpost">
        <SIconButton>
          <AddBoxIcon style={{ width: '32', height: '32' }} />
          <small>投稿</small>
        </SIconButton>
      </SLinkFooter>
      <SLinkFooter to="/mafin">
        <SIconButton>
          <SHomeProfileIcon src={next} />
          <small>プロフィール</small>
        </SIconButton>
      </SLinkFooter>
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
      background-color: #fff;
      justify-content: space-around;
    }
  }
`;
const SHomeProfileIcon = styled(SUserIconImg)`
  width: 32px;
  height: 32px;
`;
const SLinkFooter = styled(Link)`
  text-decoration: none;
  padding: 0 8px 0 16px;
  color: #000;
  @media (min-width: 425px) {
  }
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
