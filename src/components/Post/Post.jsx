import { BrowserRouter, Link, Route } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import styled from 'styled-components';
import next from '../../images/next.png';
export const Post = () => {
  return (
    <PostBg>
      <PostSlide>
        <PostBorder>
          <SImg src={next} alt="" />
          <Heart />
        </PostBorder>
        <PostBorder>
          <SImg src={next} alt="" />
        </PostBorder>
        <PostBorder>
          <SImg src={next} alt="" />
        </PostBorder>
      </PostSlide>
    </PostBg>
  );
};
const Heart = styled(FavoriteBorderIcon)`
  position: absolute;
  top: 48%;
  right: 10px;
`;

//   palette: {
//     primary: {
//       light: '#757ce8',
//       main: '#3f50b5',
//       dark: '#002884',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#ff7961',
//       main: '#f44336',
//       dark: '#ba000d',
//       contrastText: '#000',
//     },
//   },
// });
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

  @media (min-width: 425px) {
    & {
      max-width: 400px;
      width: 100%;
      height: 95vh;
      border-radius: 20px;
    }
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  position: relative;
  /* height: 750px; */
  overflow: scroll;
  width: 100%;
  max-width: 400px;
  scroll-snap-type: y mandatory;
  border-radius: 20px;

  /* display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  overflow: scroll;
  overflow-y: auto;
  scroll-snap-type: y mandatory; */
`;
const PostBorder = styled.div`
  position: relative;

  scroll-snap-align: start;
  scroll-snap-stop: always;

  width: 100%;
  height: 100vh;
  background-color: #000;
`;
const SImg = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;
