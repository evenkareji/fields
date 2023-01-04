import styled from 'styled-components';
import { Link, Route, Routes } from 'react-router-dom';
import { Post } from '../Post/Post';
export const Login = () => {
  return (
    <SLoginBack>
      <SLoginBorder>
        <SForm>
          <SFormHead>Afimのアカウント登録</SFormHead>
          <SEmail placeholder="メールアドレス" />
          <SPassword placeholder="パスワード" />
          <Link to="/" style={{ textDecoration: 'none' }}>
            <SSubmit type="submit">登録</SSubmit>
          </Link>
        </SForm>
      </SLoginBorder>
    </SLoginBack>
  );
};

const SLoginBack = styled.div`
  background-color: #d9d9d9;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SLoginBorder = styled.div`
  width: 70%;
  background-color: #fff;
  height: 80vh;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SForm = styled.form`
  width: 70%;
  height: 50vh;
  max-width: 400px;
  margin: 0 auto;
`;
const SFormHead = styled.div`
  font-weight: bold;
  font-size: 24px;
`;
const SEmail = styled.input`
  height: 40px;
  width: 100%;
  max-width: 400px;

  border: 1px solid #d9d9d9;
  border-radius: 14px;
  transition: transform 0.4s;
  padding: 22px 10px;
  &:focus {
    transition: transform 4s;

    outline: #fd0707 auto 1px;
    &::placeholder {
      transition: transform 0.2s;
      color: #fd0707;
      font-size: 8px;
      /* transform: translateY(-100%); */
      transform-origin: top;
      transform: translateY(-100%);
    }
  }
`;

const SPassword = styled(SEmail)``;

const SSubmit = styled.button`
  text-decoration: none;
  list-style: none;
  border: none;
  width: 50%;
  height: 40px;
  background-color: #ed6103;
  border-radius: 30px;
  color: #fff;
  display: flex;
  max-width: 150px;
  margin-left: auto;
  justify-content: center;
  align-items: center;
`;
