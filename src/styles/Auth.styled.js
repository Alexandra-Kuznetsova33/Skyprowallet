import styled from 'styled-components';

export const Background = styled.div`
  min-height: 100vh;
  background: #F4F5F6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 379px;
  background: #FFFFFF;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
  border-radius: 30px;
  padding: 32px;
  box-sizing: border-box;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 24px;
  width: 100%;
`;

export const Title = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  text-align: center;
  margin: 0;
`;

export const InputField = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 12px;
  border: 0.5px solid ${props => props.$isError ? '#F25050' : '#999999'};
  border-radius: 6px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
  outline: none;
  background: ${props => props.$isError ? '#FFEBEB' : '#FFFFFF'};

  &::placeholder {
    color: #999999;
  }

  &:focus {
    border-color: ${props => props.$isError ? '#F25050' : '#7334EA'};
    background-color: ${props => props.$isError ? '#FFEBEB' : '#F3EEFF'};
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  width: 100%;
  height: 39px;
  background: ${props => props.$isError ? '#999999' : '#7334EA'};
  border: none;
  border-radius: 6px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #FFFFFF;
  cursor: ${props => props.$isError ? 'not-allowed' : 'pointer'};
  transition: background 0.2s;

  &:hover {
    background: ${props => props.$isError ? '#999999' : '#5b28b8'};
  }

  &:disabled {
    background: #999999;
    cursor: not-allowed;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #999999;
  text-align: center;
`;

export const UnderlinedLink = styled.span`
  color: #999999;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: #7334EA;
  }
`;

export const ErrorMessage = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  text-align: center;
  color: #F84D4D;
  margin: 0;
`;
