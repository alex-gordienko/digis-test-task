import React, { useState, useCallback } from 'react';
import Container from '../Container';
import Form from './LoginForm.styled';

/*interface IBodyBlockProps{

};*/

const LoginForm = () => {
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');

  const inputLogin = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setLogin(e.currentTarget.value);
  }, []);
  const inputPass = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setPass(e.currentTarget.value);
  }, []);
  const inputEmail = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  }, []);

  const handleClick = () => {
    // console.log('UserName: '+ login + "Password: "+pass);
    setLogin('');
    setPass('');
    setEmail('');
  };
  return (
    <Container>
      <Form>
        <form action="#">
          <label>Login</label>
          <input
            type="text"
            id="login"
            placeholder="Input..."
            value={login}
            onChange={inputLogin}
            required={true}
          />
          <label>E-mail</label>
          <input
            type="text"
            id="login"
            placeholder="E-mail..."
            value={email}
            onChange={inputEmail}
            required={true}
          />
          <label>Password</label>
          <input
            type="password"
            id="pass"
            placeholder="Password..."
            value={pass}
            onChange={inputPass}
            required={true}
          />
          <input type="submit" value="Submit" onClick={handleClick} />
        </form>
      </Form>
    </Container>
  );
};

export default LoginForm;
