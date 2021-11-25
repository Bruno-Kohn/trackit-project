import '../styles/reset.css';
import logo from '../images/trackit-logo.png';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import Loader from 'react-loader-spinner';
import { registerUserReq } from '../services/api.service.js';
import {
  ContainerLogin,
  ToCreateAccount,
  Logo,
  Inputs,
  InputForm,
  LoginButton,
} from '../styles/globalStyles';

export default function Registration() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [clicked, setClicked] = useState(false);

  function registerUser() {
    setClicked(true);
    const body = {
      email,
      name,
      image,
      password,
    };

    registerUserReq(body)
      .then(() => history.push('/'))
      .catch(() => {
        setEmail('');
        setPassword('');
        setName('');
        setImage('');
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
        <InputForm
          placeholder='nome'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={clicked}
        ></InputForm>
        <InputForm
          placeholder='foto'
          type='text'
          value={image}
          onChange={(e) => setImage(e.target.value)}
          disabled={clicked}
        ></InputForm>
        <LoginButton onClick={registerUser} disabled={clicked}>
          {clicked === false ? (
            'Cadastrar'
          ) : (
            <Loader type='ThreeDots' color='#FFFFFF' height={45} width={60} />
          )}
        </LoginButton>
        <Link to='/'>
          <ToCreateAccount>Já tem uma conta? Faça login!</ToCreateAccount>
        </Link>
      </Inputs>
    </ContainerLogin>
  );
}
