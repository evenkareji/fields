import React, { useContext, useRef, useState } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../../state/AuthContext';
import { FooterIcon } from '../templates/FooterIcon';
import { UserIconImg } from '../atoms/UserIconImg';

import axios from 'axios';

export const AddPost = () => {
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const [isText, setIsText] = useState(false);
  // const [file, setFile] = useState(null);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const newPost = {
  //     userId: user._id,
  //     desc: desc.current.value,
  //   };

  //   // if (file) {
  //   //   const data = new FormData();
  //   //   const fileName = Date.now + file.name;
  //   //   // 画像apiを叩く

  //   //   data.append('name', fileName);
  //   //   data.append('file', file);
  //   //   newPost.img = fileName;
  //   //   try {
  //   //     await axios.post('/upload', data);
  //   //   } catch (err) {
  //   //     console.log(err);
  //   //   }
  //   // }

  //   try {
  //     await axios.post('/posts', newPost);
  //     window.location.reload();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('出力');
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    // if (file) {
    //   const data = new FormData();
    //   const fileName = Date.now + file.name;
    //   // 画像apiを叩く

    //   data.append('name', fileName);
    //   data.append('file', file);
    //   newPost.img = fileName;
    //   try {
    //     await axios.post('/upload', data);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }

    try {
      await axios.post('/posts', newPost);
      window.location.reload();
      desc.current.value = '';
    } catch (err) {
      console.log(err);
    }
  };

  const TextLimit = (e) => {
    if (e.target.value.length === 0) {
      setIsText(false);
      console.log('0');
    } else if (30 < e.target.value.length) {
      setIsText(false);
      console.log('15<0');
    } else {
      setIsText(true);
      console.log('jj');
    }
  };

  return (
    <Scenter>
      <form>
        <UserIconImg src={PUBLIC_FOLDER + user.profileImg} />

        <SInputTextarea
          placeholder="どう感じますか？"
          type="text"
          ref={desc}
          onChange={(e) => TextLimit(e)}
        />
        {/* <input
          type="file"
          id="file"
          name="file"
          style={{ display: 'none' }}
          onChange={(e) => setFile(e.target.files[0])}
        /> */}
        <SSubmit isText={isText} type="submit" onClick={(e) => handleSubmit(e)}>
          送信
        </SSubmit>
      </form>
      <FooterIcon />
    </Scenter>
  );
};
const SInputTextarea = styled.textarea`
  width: 100%;
  resize: none;
  border: none;
  font-family: 'Noto Serif JP';
  outline: none;
  height: auto;
`;
const Scenter = styled.div`
  position: relative;
  padding: 180px;
  margin: 0 auto;
  max-width: 800px;
  border: 1px solid #000;
  height: 100vh;
`;
const SSubmit = styled.div`
  width: 100px;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  padding: 6px 15px 5px 17px;
  border-radius: 8px;
  border: none;
  color: #fff;
  background-color: #ed6103;
  border: none;

  &:hover {
    background-color: #ff6702;
  }
  pointer-events: ${({ isText }) => (isText ? 'auto' : 'none')};
  background-color: ${({ isText }) => (isText ? '#ff6702' : '#9e9c9c')};
`;
