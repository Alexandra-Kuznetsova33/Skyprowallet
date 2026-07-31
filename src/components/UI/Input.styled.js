import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid ${(props) => (props.isValid ? '#4A3AFF' : '#DDD')};
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  background-color: ${(props) => (props.isValid ? '#EDE7FF' : 'white')};
  transition: 0.2s;
  font-family: 'Montserrat', sans-serif;

  &:focus {
    border-color: #4A3AFF;
    background-color: #EDE7FF;
  }
`;
