import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  background-color: ${({ theme, color }) => color || theme.notes};
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;

  ${({ secondary }) => secondary
    && css`
      background-color: ${({ theme }) => theme.grey200};
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
