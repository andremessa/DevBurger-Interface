import styled from 'styled-components';
import { Link as ReactLink } from 'react-router-dom';

import BackgroundLogin from '../../assets/background-login.svg';
import Background from '../../assets/background.svg';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const LeftContainer = styled.div`
  background: url('${BackgroundLogin}');
  background-size: cover;
  background-position: center;
  
  height: 100%;
  width: 100%;
  max-width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100%;
  width: 100%;
  max-width: 50%;

  background: url('${Background}');
  background-color: #363636;

  p {
    color: #fff;
    font-size: 1.125rem;
    font-weight: 800;

    a {
      text-decoration: underline;      
    }
  }
`;

export const Title = styled.h2`
  font-family: "Road Rage", sans-serif;
  font-size: 2.5rem;
  color: #fff;

  span {
    color: #9758A6;
    font-family: "Road Rage", sans-serif;
    ;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.25rem;
  width: 100%;
  max-width: 25rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3125rem;
  width: 100%;

  input {
    width: 100%;
    border: none;
    height: 3.25rem;
    border-radius: 0.3125rem;
    padding: 0 1rem;
  }

  label {
    font-size: 1.125rem;
    font-weight: 600;
    color: #fff;
  }

  p {
    font-size: 0.875rem;
    line-height: 80%;
    color: #cf3057;
    font-weight: 600;
    height: 0.625rem;
  }
`;

export const Link = styled(ReactLink)`
  text-decoration: none;
  color:#fff;
`;
