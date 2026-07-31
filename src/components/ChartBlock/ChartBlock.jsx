import { CATEGORIES } from '../../constants/categories';
import { formatDate } from '../../utils/dateUtils';
import {
  Block,
  Summary,
  TotalAmount,
  PeriodInfo,
  PeriodDate,
  ChartContainer,
  ColumnWrapper,
  ColumnValue,
  Bar,
  ColumnLabel,
} from './ChartBlock.styled';

const CATEGORY_COLORS = {
  food: '#D9B6FF',
  transport: '#FFB53D',
  housing: '#6EE4FE',
  entertainment: '#B0AEFF',
  education: '#BCEC30',
  other: '#FFB9B8',
};

export default function ChartBlock({ total, categories, startDate, endDate }) {
  const periodText =
    startDate.toDateString() === endDate.toDateString()
      ? formatDate(startDate)
      : `${formatDate(startDate)} – ${formatDate(endDate)}`;

  const maxSum = Math.max(...categories.map(c => c.sum), 1);

  return (
    <Block>
      <Summary>
        <TotalAmount>{total.toFixed(0)} ₽</TotalAmount>
        <PeriodInfo>
          <span>Расходы за</span>
          <PeriodDate>{periodText}</PeriodDate>
        </PeriodInfo>
      </Summary>

      <ChartContainer>
        {CATEGORIES.map(cat => {
          const catData = categories.find(c => c.id === cat.id);
          const sum = catData ? catData.sum : 0;
          const height = Math.max((sum / maxSum) * 328, 4);
          return (
            <ColumnWrapper key={cat.id}>
              <ColumnValue>{sum.toFixed(0)} ₽</ColumnValue>
              <Bar $height={height} $color={CATEGORY_COLORS[cat.id]} />
              <ColumnLabel>{cat.label}</ColumnLabel>
            </ColumnWrapper>
          );
        })}
      </ChartContainer>
    </Block>
  );
}
