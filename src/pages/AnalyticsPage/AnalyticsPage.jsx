import { useMemo } from 'react';
import { Background, Container, PageTitle, MainContent } from './AnalyticsPage.styled';
import PeriodBlock from '../../components/PeriodBlock/PeriodBlock';
import ChartBlock from '../../components/ChartBlock/ChartBlock';
import { usePeriod } from '../../hooks/usePeriod';
import { useExpenses } from '../../hooks/useExpenses';
import { isDateInRange } from '../../utils/dateUtils';
import { CATEGORIES } from '../../constants/categories';

export default function AnalyticsPage() {
  const { startDate, endDate, setPeriod } = usePeriod();
  const { expenses } = useExpenses();

  const filteredExpenses = useMemo(() => {
    return expenses.filter(exp => isDateInRange(exp.date, startDate, endDate));
  }, [expenses, startDate, endDate]);

  const analyticsData = useMemo(() => {
    const total = filteredExpenses.reduce((sum, exp) => sum + exp.amount, 0);
    const categories = CATEGORIES.map(cat => ({
      id: cat.id,
      sum: filteredExpenses
        .filter(exp => exp.category === cat.id)
        .reduce((s, exp) => s + exp.amount, 0),
    }));
    return { total, categories };
  }, [filteredExpenses]);

  return (
    <Background>
      <Container>
        <PageTitle>Анализ расходов</PageTitle>
        <MainContent>
          <PeriodBlock
            startDate={startDate}
            endDate={endDate}
            onPeriodChange={setPeriod}
          />
          <ChartBlock
            total={analyticsData.total}
            categories={analyticsData.categories}
            startDate={startDate}
            endDate={endDate}
          />
        </MainContent>
      </Container>
    </Background>
  );
}
