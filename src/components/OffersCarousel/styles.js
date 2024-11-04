import styled from 'styled-components';

export const Container = styled.div`
  .carousel-item {
    padding-right: 2.5rem;
  }

  overflow-x: hidden;

  .react-multi-carousel-list {
    overflow: visible;
  }

  padding-left: 2.188rem;
  padding-bottom: 2.5rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: #61A120;
  padding-bottom: 0.75rem;
  position: relative;
  text-align: center;
  margin: 4.375rem 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 3.25rem;
    height: 0.25rem;
    background-color: #61A120;
    left: 50%;
    transform: translateX(-50%);
  }
`;
