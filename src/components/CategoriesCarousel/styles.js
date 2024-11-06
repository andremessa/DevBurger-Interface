import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  .carousel-item {
    padding-right: 2.5rem;
  }

  padding-left: 2.188rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: #9758A6;
  padding-bottom: 0.75rem;
  position: relative;
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 1.25rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 3.25rem;
    height: 0.25rem;
    background-color: #9758A6;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const ContainerItems = styled.div`
  background: url('${(props) => props.$imageUrl}');
  background-position: center;
  background-size: cover;
  border-radius: 1.25rem;

  display: flex;
  align-items: center;
  padding: 1.25rem 0.625rem ;
  width: 100%;
  height: 15.625rem;
  
`;

export const CategoryButton = styled(Link)`
  color: #fff;
  background-color: rgba(0,0,0, 0.5);
  padding: 0.625rem 1.875rem;
  border-radius: 1.875rem;
  font-size: 1.406rem;  
  margin-top: 3.125rem;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    background-color: #9758A6;
  }
`;
