import styled from 'styled-components';

export const StyledButton = styled.button`
  background: ${(props) => (props.disabled ? '#CCC' : '#7334EA')};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: 0.2s;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;

  &:hover:not(:disabled) {
    background: #5b28b8;
  }
`;
