import React from 'react';
import styled from 'styled-components';
import next from '../../images/next.png';
import insta from '../../images/insta.png';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatIcon from '@mui/icons-material/Chat';
export const Text = () => {
  return (
    <PostSlide>
      <PostBorder>
        <SPostContent>
          <SPostHeader>
            <SUserIconImg src={insta} />
            <Box>
              <SUserName>Mafin</SUserName>
              <SUserFollow>フォロー</SUserFollow>
            </Box>
          </SPostHeader>
          <SPostArticle>
            hello World 世界に配信して 誹謗中傷がない世界に向けて
          </SPostArticle>
        </SPostContent>
        <SAside>
          <Heart sx={{ fontSize: 30 }} />
          <Chat sx={{ fontSize: 30 }} />
        </SAside>
      </PostBorder>
    </PostSlide>
  );
};
const PostSlide = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100%;
  border-radius: 0;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 425px) {
    & {
      max-width: 400px;
      width: 100%;
      height: 95vh;
      border-radius: 20px;
    }
  }

  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  overflow: scroll;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
`;
const SPostContent = styled.div`
  position: absolute;
  top: 25%;
  left: 38px;
  width: 74%;
  height: 70%;
`;
const SPostArticle = styled.p`
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #000;
  margin: auto 0;
  font-family: 'Noto Serif JP';
  line-height: 2.4em;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
`;
const Box = styled.div`
  margin-left: 20px;
`;
const SPostHeader = styled.header`
  display: flex;
  align-items: center;
`;

const SUserIconImg = styled.img`
  object-fit: cover;
  border-radius: 100%;
  width: 46px;
  height: 46px;
  background-color: #fff;
`;
const SUserName = styled.h1`
  color: #000;
  font-size: 16px;
  font-weight: bold;
`;
const SUserFollow = styled.button`
  padding: 6px 15px 5px 17px;
  border: 1px solid #000000;
  border-radius: 8px;
  width: 82px;
  font-size: 12px;
  font-weight: bold;
  background: rgba(255, 255, 255, 0);
  color: #050505;
`;

const SAside = styled.div`
  position: absolute;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  top: 65%;
  right: 10px;
  padding: 20px;
  text-align: center;
`;
const Heart = styled(FavoriteBorderIcon)`
  margin-bottom: 34px;
  color: #000;
`;
const Chat = styled(ChatIcon)`
  color: #000;
  font-size: 100px;
`;

const PostBg = styled.div`
  color: white;
  background-color: black;
  height: 100vh;
  display: grid;
  place-items: center;
`;
const PostBorder = styled.div`
  position: relative;
  scroll-snap-align: start;
  scroll-snap-stop: always;

  width: 100%;
  height: 100%;
`;
