import { useExpenses } from '../../hooks/useExpenses';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import {
  TableWrapper,
  HeaderRow,
  ColumnHeader,
  Divider,
  ScrollableBody,
  EmptyMessage,
} from './ExpenseTable.styled';

export default function ExpenseTable() {
  const { expenses } = useExpenses();

  return (
    <TableWrapper>
      <HeaderRow>
        <ColumnHeader width="141px">Описание</ColumnHeader>
        <ColumnHeader width="141px">Категория</ColumnHeader>
        <ColumnHeader width="142px">Дата</ColumnHeader>
        <ColumnHeader width="158px">Сумма</ColumnHeader>
        <ColumnHeader width="12px" />
      </HeaderRow>

      <Divider />

      <ScrollableBody>
        {expenses.length === 0 ? (
          <EmptyMessage>Расходов пока нет</EmptyMessage>
        ) : (
          expenses.map((expense) => (
            <ExpenseItem key={expense.id} expense={expense} />
          ))
        )}
      </ScrollableBody>
    </TableWrapper>
  );
}
