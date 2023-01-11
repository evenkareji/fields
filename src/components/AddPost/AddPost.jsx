import React from 'react';
import styled from 'styled-components';
import { FooterIcon } from '../templates/FooterIcon';

export const AddPost = () => {
  return (
    <Scenter>
      <form>
        <input placeholder="どう感じますか？" type="text" />
        <input value="送信" type="submit" />
      </form>
      <FooterIcon />
    </Scenter>
  );
};
const Scenter = styled.div`
  position: relative;
  padding: 180px;
  margin: 0 auto;
  max-width: 800px;
  border: 1px solid #000;
  height: 100vh;
`;
