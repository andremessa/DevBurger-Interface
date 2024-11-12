import styled from 'styled-components';

export const Root = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 1.25rem;
`;

export const Header = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
  padding: 1rem;
  text-align: left;
  color: #fff;
  background-color: #484848;
  border-bottom: 0.063rem solid #cdcdcd;

  &:first-child {
    border-top-left-radius: 1.25rem;
  }
  
  &:last-child {
    border-top-right-radius: 1.25rem;
  } 
`;

export const Td = styled.td`
  padding: 1rem;
  color: #484848;
  font-weight: 500;
  line-height: 115%;
`;

export const Body = styled.tbody``;
