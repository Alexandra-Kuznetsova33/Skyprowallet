import styled from 'styled-components';

export const FormCard = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 24px;
  width: 100%;
`;

export const Title = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  margin: 0;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 12px;
  width: 100%;
`;

export const Label = styled.label`
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
`;

export const StyledInput = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 12px;
  width: 100%;
  max-height: 39px;
  border: 0.5px solid #999999;
  border-radius: 6px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
  outline: none;

  &::placeholder {
    color: #999999;
  }

  &:focus,
  &.valid {
    border-color: #7334EA;
    background-color: #F3EEFF;
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px;
  gap: 12px;
  width: 100%;
  height: 39px;
  background: #7334EA;
  border: none;
  border-radius: 6px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #FFFFFF;
  cursor: pointer;

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  padding: 0;
  gap: 6px;
  width: 277px;
`;
