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
  padding: 0 120px;
`;

export const PageTitle = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 150%;
  color: #000000;
  margin-top: 32px;
`;

export const MainContent = styled.div`
  display: flex;
  width: 100%;
  gap: 34px;
  margin-top: 32px;
`;

export const TableBlock = styled.div`
  width: 789px;
  height: 618px;
  background: #ffffff;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const FormBlock = styled.div`
  width: 379px;
  height: 618px;
  background: #ffffff;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
  border-radius: 30px;
  overflow-y: auto;
`;

export const TableTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  padding: 32px;
`;

export const TableContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
