import styled from 'styled-components';

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  width: 100%;
  height: 15px;
  padding: 0 32px;
`;

export const ColumnHeader = styled.div`
  width: ${(props) => props.width || 'auto'};
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #999999;
  display: flex;
  align-items: center;
`;

export const Divider = styled.div`
  width: 100%;
  height: 0;
  border: 0.5px solid #999999d7;
  margin-top: 6px;
`;

export const ScrollableBody = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 18px;
  margin-bottom: 12px;
  padding: 0 32px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #d9d9d9;
    border-radius: 30px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const EmptyMessage = styled.div`
  text-align: center;
  color: #999;
  font-size: 12px;
  margin-top: 20px;
`;
