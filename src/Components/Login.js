import '../styles/reset.css';
import logo from '../images/trackit-logo.png';
import { Link, useHistory } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { loginReq } from '../services/api.service';
import {
  ContainerLogin,
  Logo,
  Inputs,
  InputForm,
  LoginButton,
  ToCreateAccount,
} from '../styles/globalStyles.js';
import UserContext from '../contexts/UserContext';

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [clicked, setClicked] = useState(false);
  const { setUserData } = useContext(UserContext);

  useEffect(
    () => {
      if (localStorage.getItem('loginUser')) {
        history.push('/hoje');
      }
    },
    // eslint-disable-next-line
    []
  );

  function login(e) {
    e.preventDefault();
    setClicked(true);
    const body = { email, password };

    loginReq(body)
      .then((resp) => {
        localStorage.setItem('loginUser', JSON.stringify(resp.data));
        setUserData(resp.data);
        history.push('/hoje');
      })
      .catch(() => {
        setEmail('');
        setPassword('');
        setClicked(false);
        alert('Dado(s) preenchido(s) de forma incorreta. Tente novamente.');
      });
  }

  return (
    <ContainerLogin>
      <Logo>
        <img src={logo} alt='logo' />
      </Logo>
      <Inputs>
        <form onSubmit={login}>
          <InputForm
            placeholder='e-mail'
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={clicked}
          ></InputForm>
          <InputForm
            placeholder='senha'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={clicked}
          ></InputForm>
          <LoginButton type='submit' disabled={clicked}>
            {clicked === false ? (
              'Entrar'
            ) : (
              <Loader type='ThreeDots' color='#FFFFFF' height={45} width={60} />
            )}
          </LoginButton>
        </form>
        <Link to='/cadastro'>
          <ToCreateAccount>Não tem uma conta? Cadastre-se!</ToCreateAccount>
        </Link>
      </Inputs>
    </ContainerLogin>
  );
}
