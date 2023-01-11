import React from 'react';
import { Icon } from '../atoms/Icon';
import HomeIcon from '@mui/icons-material/Home';
export const Home = () => {
  return (
    <Icon link={'/'}>
      <HomeIcon style={{ width: '32', height: '32' }} />
      <small>ホーム</small>
    </Icon>
  );
};
