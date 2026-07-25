import ExpenseForm from '../../components/ExpenseForm/ExpenseForm';
import ExpenseTable from '../../components/ExpenseTable/ExpenseTable';
import {
  Background,
  Container,
  PageTitle,
  MainContent,
  TableBlock,
  TableTitle,
  TableContent,
  FormBlock,
} from './MainPage.styled';

export default function MainPage() {
  return (
    <Background>
      <Container>
        <PageTitle>Мои расходы</PageTitle>
        <MainContent>
          <TableBlock>
            <TableTitle>Таблица расходов</TableTitle>
            <TableContent>
              <ExpenseTable />
            </TableContent>
          </TableBlock>
          <FormBlock>
            <ExpenseForm />
          </FormBlock>
        </MainContent>
      </Container>
    </Background>
  );
}
