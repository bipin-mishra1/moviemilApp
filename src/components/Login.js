import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../API';
// Components
import Button from './Button/Button';
// Styles
import { Wrapper } from './Login.styles';
// Context
import { Context } from '../context';
import ReactDOM from "react-dom";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardIcon,
  CardFieldset,
  CardInput,
  CardOptionsItem,
  CardOptions,
  CardOptionsNote,
  CardButton,
  CardLink
} from "./Card";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const [_user, setUser] = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError(false);
    try {
      const requestToken = await API.getRequestToken();
      const sessionId = await API.authenticate(
        requestToken,
        username,
        password
      );
      console.log(sessionId);
      setUser({ sessionId: sessionId.session_id, username });
      console.log(_user);
      navigate('/');
    } catch (error) {
      setError(true);
    }
  };

  const handleInput = e => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
  };

  return (
    // <Wrapper>
    //   <label>Enter your information:</label>
    //   <div>
    //  <label>username</label>
    //   <input 
    //     autocomplete="off"
    //     type='text'
    //     value={username}
    //     name='username'
    //     onChange={handleInput}
    //     required
    //   />
     
    //   </div>
    //   <div>
    //       <label>password</label>
    //   <input
    //     type='password'
    //     value={password}
    //     name='password'
    //     onChange={handleInput}
    //     required
    //   />
      
    //   </div>
    //   {error && <div className='error'>Check your username or password!</div>}
    //   <Button text='Login' callback={handleSubmit} />
    // </Wrapper>
    <div className="App">
      <CardWrapper>
        <CardHeader>
          <CardHeading>Sign in</CardHeading>
        </CardHeader>

        <CardBody>
          <CardFieldset>
            <CardInput placeholder="Username" type="text" required />
          </CardFieldset>

          <CardFieldset>
            <CardInput placeholder="E-mail" type="text" required />
          </CardFieldset>

          <CardFieldset>
            <CardInput placeholder="Password" type="password" required />
            <CardIcon className="fa fa-eye" eye small />
          </CardFieldset>

          {/* <CardFieldset>
            <CardOptionsNote>Or sign up with</CardOptionsNote>

            <CardOptions>
              <CardOptionsItem>
                <CardIcon className="fab fa-google" big />
              </CardOptionsItem>

              <CardOptionsItem>
                <CardIcon className="fab fa-twitter" big />
              </CardOptionsItem>

              <CardOptionsItem>
                <CardIcon className="fab fa-facebook" big />
              </CardOptionsItem>
            </CardOptions>
          </CardFieldset> */}

          <CardFieldset>
            <CardButton type="button">Login</CardButton>
          </CardFieldset>

          {/* <CardFieldset>
            <CardLink>I already have an account</CardLink>
          </CardFieldset> */}
        </CardBody>
      </CardWrapper>
    </div>
  );
};

export default Login;
