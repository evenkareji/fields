import React from 'react';
import styled from 'styled-components';

export const PersonalPost = () => {
  return (
    <SPersonalPost>
      <SUserArea>
        <SCard>Hello Hello</SCard>
        <SCard>Hello Hello</SCard>
        <SCard>Hello Hello</SCard>
        <SCard>Hello Hello</SCard>
        <SCard>Hello Hello</SCard>
        <SCard>Hello Hello</SCard>
        <SCard>Hello Hello</SCard>
        <SCard>Hello Hello</SCard>
        <SCard>Hello Hello</SCard>
        <SCard>Hello Hello</SCard>
      </SUserArea>
    </SPersonalPost>
  );
};
const SPersonalPost = styled.div`
  padding-top: 30px;
`;
const SCard = styled.div`
  border: 1px solid #000;
  padding: 16px;
  height: 250px;
`;
const SUserArea = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 3px 3px;
`;
