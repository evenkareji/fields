import { IconButton } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { BaseBtn } from './BaseBtn';
export const OnFollowBtn = (props) => {
  const { children } = props;
  return (
    <IconButton style={{ padding: '0px' }}>
      <SOnFollowBtn>{children}</SOnFollowBtn>
    </IconButton>
  );
};
const SOnFollowBtn = styled(BaseBtn)`
  width: 100%;
  font-size: 12px;
  font-weight: bold;

  padding: 6px 15px 5px 17px;

  border-radius: 8px;
  border: none;

  color: #fff;
  background-color: #ed6103;
`;
