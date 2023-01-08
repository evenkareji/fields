import styled from 'styled-components';
import { Link, Route, Routes } from 'react-router-dom';
import { LoginForm } from '../atoms/LoginForm';

export const Login = () => {
  return (
    <SLoginBack>
      <SLoginBorder>
        <SForm>
          <SFormHead>AFim</SFormHead>
          <SEmail placeholder="メールアドレス" />
          <SPassword placeholder="パスワード" />
          <SLink to="/" style={{ textDecoration: 'none', color: '#fff' }}>
            <SSubmit type="submit">ログイン</SSubmit>
          </SLink>
          <SHr />
          <STextFlex>
            <p>アカウントをお持ちでないですか?</p>
            <Link to="/register" style={{ textDecoration: 'none' }}>
              登録する
            </Link>
          </STextFlex>
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
  width: 90%;
  background-color: #fff;
  height: 80vh;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SForm = styled.form`
  width: 85%;
  height: 50vh;
  max-width: 400px;
  margin: 0 auto;
  padding: 40px 0px;
`;
const SFormHead = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 44px;
`;
const SEmail = styled(LoginForm)`
  margin-bottom: 14px;
`;

const SPassword = styled(LoginForm)`
  margin-bottom: 28px;
`;

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
const SLink = styled(Link)`
  text-decoration: none;
  list-style: none;
  border: none;
  width: 50%;
  height: 40px;
  background-color: #ed6103;
  border-radius: 30px;
  color: #fff;
  max-width: 150px;
  margin-left: auto;
`;
const STextFlex = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    color: #ed6103;
  }
`;
const SHr = styled.hr`
  border: 1px solid rgb(207, 217, 222);
  margin-top: 52px;
  margin-bottom: 42px;
`;
