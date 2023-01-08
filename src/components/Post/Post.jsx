import styled from 'styled-components';
import insta from '../../images/insta.png';
import { Text } from '../Text/Text';
import Home from '@mui/icons-material/Home';
import { FooterHome } from '../Home/FooterHome';

const user = {
  icon: insta,
  name: 'mafin',
  text: 'hello World 世界に配信して 誹謗中傷がない世界に向けて',

  heartCount: 900,
  chatCount: 1000,

  // redux Toolkit

  // isFollow: true,
  // isGood: false,
};
export const Post = () => {
  return (
    <SPostMain>
      <PostBg>
        <PostSlide>
          <Text user={user} />
          <Text user={user} />
          <Text user={user} />
        </PostSlide>
      </PostBg>
      <FooterHome />
    </SPostMain>
  );
};
const SPostMain = styled.div`
  position: relative;
`;
const PostBg = styled.div`
  color: white;
  background-color: black;
  height: 100vh;
  display: grid;
  place-items: center;
`;

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
