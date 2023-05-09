import styled from '@emotion/styled';

export const Button = styled.button`
  font-weight: bold;
  font-size: 12px;
  background-color: hotpink;
  border-radius: 4px;
  color: black;
  margin-right: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100px;
  height: 40px;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: white;
  }
`;
