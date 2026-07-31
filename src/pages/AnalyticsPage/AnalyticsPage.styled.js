import styled from 'styled-components';

export const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #F4F5F6;
`;

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 0 120px 40px;
`;

export const PageTitle = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 150%;
  color: #000000;
  padding-top: 100px;
  margin: 0;
`;

export const MainContent = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 32px;
  align-items: flex-start;
`;
