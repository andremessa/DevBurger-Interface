import styled from 'styled-components';

import Texture from '../../assets/texture.svg';
import Background from '../../assets/background.svg';

export const Container = styled.div`
  width: 100%;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url(${Background});
  min-height: 100vh;
`;

export const Banner = styled.div`
  background: url('${Texture}');
  background-color: #1f1f1f;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  height: 11.25rem;

  img {
    height: 10.313rem;
  }
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: 800;
  padding-bottom: 0.75rem;
  color: #61a120;
  text-align: center;
  position: relative;

  &::after {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    content: '';
    width: 3.5rem;
    height: 0.25rem;
    background-color: #61a120;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 20%;
  gap: 2.5rem;
  width: 100%;
  max-width: 80rem;
  padding: 2.5rem;
  margin: 0 auto;
`;
