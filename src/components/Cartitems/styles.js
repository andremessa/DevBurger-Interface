import styled from 'styled-components';

export const ProductImage = styled.img`
  height: 5rem;
  width: 5rem;
  border-radius: 1rem;  
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.875rem;
    width: 1.875rem;
    color: #fff;
    border-radius: 0.25rem;
    background-color: #9758a6;
    transition: all 0.4s;
    border: none;

    &:hover {
      background-color: #6f357c;
    }
  }
`;

export const EmptyCart = styled.p`
  font-size: 1.25rem;
  text-align: center;
  font-weight: bold;
`;

export const ProductTotalPrice = styled.p`
  font-weight: bold;
`;

export const TrashImage = styled.img`
  height: 1.25rem;
  width: 1.25rem;
  cursor: pointer;
`;
