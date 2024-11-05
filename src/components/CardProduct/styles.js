import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  padding: 1.25rem;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: relative;

  div {
    width: 100%;
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.313rem;

    p {
      font-size: 1.125rem;
      color: #ff8c05;
      line-height: 1.25rem;
      font-weight: 700;
      margin-top: 2.5rem;
    }

    strong {
      font-size: 1.375rem;
      color: #363636;
      font-weight: 800;
      line-height: 1.25rem;
    }
  }
`;

export const CardImage = styled.img`
  height: 6.25rem;
  position: absolute;
  top: -3.125rem;
`;
