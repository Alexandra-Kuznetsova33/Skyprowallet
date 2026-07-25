import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  min-height: 64px;
  background: #ffffff;
  display: flex;
  align-items: center;
  padding: 0 120px;
  box-sizing: border-box;
`;

export const Logo = styled.div`
  img {
    width: 143.68px;
    height: auto;
  }
`;

export const CenterNav = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const ExitButton = styled.button`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 170%;
  text-align: center;
  color: #000000;
  background: none;
  border: none;
  cursor: pointer;
  width: 49px;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover {
    color: #7334ea;
    }
`;
