import styled from 'styled-components';

export const Block = styled.div`
  width: 379px;
  height: 540px;
  background: #ffffff;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex-shrink: 0;
`;

export const Header = styled.div`
  width: 100%;
  height: 113px;
  flex-shrink: 0;
  background: #ffffff;
  border-bottom: 0.5px solid #999999;
  position: relative;
`;

export const Title = styled.h2`
  position: absolute;
  left: 32px;
  top: 32px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  margin: 0;
`;

export const WeekDaysRow = styled.div`
  position: absolute;
  left: 32px;
  right: 32px;
  top: 85px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 6px;
`;

export const WeekDay = styled.div`
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  color: #999999;
  padding: 6px 0;
`;

export const ScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 24px 32px 0;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #d9d9d9;
    border-radius: 30px;
  }
`;

export const MonthTitle = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #000000;
  margin-bottom: 12px;
`;

export const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 6px;
  margin-bottom: 24px;
`;

export const Day = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1 / 1;
  border-radius: 60px;
  background: ${(props) =>
    props.$isSelected ? '#F1EBFD' : '#F4F5F6'};
  color: ${(props) =>
    props.$isSelected ? '#7334EA' : '#000000'};
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  cursor: pointer;
  user-select: none;
  font-weight: ${(props) => (props.$isSelected ? 600 : 400)};

  ${(props) =>
    props.$otherMonth &&
    `
    background: transparent;
    color: transparent;
    pointer-events: none;
  `}
`;
