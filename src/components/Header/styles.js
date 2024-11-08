import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #1f1f1f;
  width: 100%;
  height: 4.5rem;
  padding: 0 3.5rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4.5rem;

  div {    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.25rem;
  }

  hr {
    height: 1.5rem;
    border: 0.063rem solid #625e5e;
  }
`;

export const HeaderLink = styled(Link)`
  color: ${(props) => (props.$isActive ? '#9758a6' : '#fff')};
  border-bottom: ${(props) => (props.$isActive ? '0.063rem solid #9758a6' : 'none')};
  padding-bottom: 0.313rem;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 200ms;

  &:hover {
    color: #9758a6;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;

  p {
    color: #fff;
    line-height: 90%;
    font-weight: 300;

    span {
      font-weight: 700;
      color: #9758a6;
    }
  }
`;

export const Logout = styled.button`
  color: #ff3205;
  text-decoration: none;
  background-color: transparent;
  border: none;
  font-weight: 700;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;
