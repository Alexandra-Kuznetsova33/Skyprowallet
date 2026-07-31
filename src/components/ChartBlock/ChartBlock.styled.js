import styled from 'styled-components';

export const Block = styled.div`
  flex: 1;
  max-width: 789px;
  height: 540px;
  background: #FFFFFF;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
  border-radius: 30px;
  padding: 32px;
  display: flex;
  flex-direction: column;
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 24px;
`;

export const TotalAmount = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
`;

export const PeriodInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  color: #999999;
`;

export const PeriodDate = styled.span`
  font-weight: 600;
`;

export const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 32px;
  height: 387px;
  margin-top: auto;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 94px;
  height: 100%;
  justify-content: flex-end;
`;

export const ColumnValue = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  text-align: center;
  width: 100%;
`;

export const Bar = styled.div`
  width: 94px;
  height: ${props => props.$height}px;
  background: ${props => props.$color};
  border-radius: 12px;
  min-height: 4px;
`;

export const ColumnLabel = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
  text-align: center;
  width: 100%;
`;
