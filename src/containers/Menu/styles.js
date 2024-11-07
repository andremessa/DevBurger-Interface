import styled from 'styled-components';
import BannerHamburguer from '../../assets/banner-hamburguer.svg';
import Background from '../../assets/background.svg';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f0f0f0;

  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url(${Background});
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30rem;
  width: 100%;
  position: relative;

  background: url('${BannerHamburguer}') no-repeat;
  background-color: #1f1f1f;
  background-position: center;
  background-size: cover;

  h1 {
    font-family: "Road Rage", sans-serif;
    font-size: 5rem;
    line-height: 4.063rem;
    color: #fff;
    position: absolute;

    right: 20%;
    top: 30%;

    span {
      display: block;
      color: #fff;
      font-size: 1.25rem;
    }
  }
`;

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 3.125rem;
  margin-top: 1.875rem;
`;

export const CategoryButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  background: none;
  color: ${(props) => (props.$isActiveCategory ? '#9758a6' : '#696969')};
  font-size: 1.5rem;
  font-weight: 500;
  padding-bottom: 0.313rem;
  line-height: 1.25rem;
  border: none;
  border-bottom: ${(props) => props.$isActiveCategory && '0.188rem solid #9758a6'};
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 2.5rem;
  gap: 3.75rem;
  justify-content: center;
  max-width: 80rem;
  margin: 3.125rem auto;
`;

export const BackButton = styled(Link)`  
  text-decoration: none;
  cursor: pointer;
  background: none;
  display: block;
  text-align: center;
  margin: 1rem auto 2rem;
  
  p {
    margin: 0;
    padding: 0;
    color: #9758a6;
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.25rem;
  }

  &:hover {
    p {
      color: #696969;
    }
  }
`;
