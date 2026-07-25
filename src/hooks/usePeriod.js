import { useState, useCallback } from 'react';

export function usePeriod() {
  const today = new Date();
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);

  const setPeriod = useCallback((start, end) => {
    setStartDate(start);
    setEndDate(end);
  }, []);

  const resetToToday = useCallback(() => {
    const today = new Date();
    setStartDate(today);
    setEndDate(today);
  }, []);

  return { startDate, endDate, setPeriod, resetToToday };
}
