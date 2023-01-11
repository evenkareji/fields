import React from 'react';
import { Icon } from '../atoms/Icon';
import AddBoxIcon from '@mui/icons-material/AddBox';
export const AddPostIcon = () => {
  return (
    <Icon link={'/addpost'}>
      <AddBoxIcon style={{ width: '32', height: '32' }} />
      <small>投稿</small>
    </Icon>
  );
};
