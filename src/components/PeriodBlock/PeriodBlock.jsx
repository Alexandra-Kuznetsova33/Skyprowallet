import { useState, useRef, useEffect } from 'react';
import {
  Block,
  Header,
  Title,
  WeekDaysRow,
  WeekDay,
  ScrollArea,
  MonthTitle,
  DaysGrid,
  Day,
} from './PeriodBlock.styled';

const WEEKDAYS = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

const generateMonths = () => {
  const months = [];
  for (let year = 2020; year <= 2030; year++) {
    for (let month = 0; month < 12; month++) {
      months.push({ year, month });
    }
  }
  return months;
};

const allMonths = generateMonths();

export default function PeriodBlock({ startDate, endDate, onPeriodChange }) {
  const [selecting, setSelecting] = useState(null);
  const [tempStart, setTempStart] = useState(startDate);
  const [tempEnd, setTempEnd] = useState(endDate);
  const scrollRef = useRef(null);

  useEffect(() => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const monthIndex = allMonths.findIndex(
      (m) => m.year === currentYear && m.month === currentMonth
    );
    if (scrollRef.current && monthIndex !== -1) {
      const monthElement = scrollRef.current.querySelector(
        `[data-month-index="${monthIndex}"]`
      );
      if (monthElement) {
        monthElement.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    }
  }, []);

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = (year, month) =>
    (new Date(year, month, 1).getDay() + 6) % 7;

  const isSelected = (date) => {
    if (!tempStart || !tempEnd) return false;
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    const start = new Date(tempStart);
    start.setHours(0, 0, 0, 0);
    const end = new Date(tempEnd);
    end.setHours(0, 0, 0, 0);
    return d >= start && d <= end;
  };

  const handleDayClick = (day, year, month) => {
    const clickedDate = new Date(year, month, day);
    if (!selecting) {
      setTempStart(clickedDate);
      setTempEnd(clickedDate);
      setSelecting('start');
    } else {
      let newStart, newEnd;
      if (clickedDate < tempStart) {
        newStart = clickedDate;
        newEnd = tempStart;
      } else {
        newStart = tempStart;
        newEnd = clickedDate;
      }
      setTempStart(newStart);
      setTempEnd(newEnd);
      setSelecting(null);
      onPeriodChange(newStart, newEnd);
    }
  };

  return (
    <Block>
      <Header>
        <Title>Период</Title>
        <WeekDaysRow>
          {WEEKDAYS.map((day) => (
            <WeekDay key={day}>{day}</WeekDay>
          ))}
        </WeekDaysRow>
      </Header>

      <ScrollArea ref={scrollRef}>
        {allMonths.map(({ year, month }, monthIndex) => {
          const daysCount = daysInMonth(year, month);
          const startOffset = firstDayOfWeek(year, month);
          const monthName = new Date(year, month).toLocaleString('ru', {
            month: 'long',
            year: 'numeric',
          });

          const cells = [];
          for (let i = 0; i < startOffset; i++) {
            cells.push(<Day key={`empty-${i}`} $otherMonth />);
          }
          for (let d = 1; d <= daysCount; d++) {
            const date = new Date(year, month, d);
            const selected = isSelected(date);
            cells.push(
              <Day
                key={d}
                $isSelected={selected}
                onClick={() => handleDayClick(d, year, month)}
              >
                {d}
              </Day>
            );
          }

          return (
            <div key={`${year}-${month}`} data-month-index={monthIndex}>
              <MonthTitle>{monthName}</MonthTitle>
              <DaysGrid>{cells}</DaysGrid>
            </div>
          );
        })}
      </ScrollArea>
    </Block>
  );
}
