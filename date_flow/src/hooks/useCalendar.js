import { useMemo, useState } from 'react'
import { atMidnight, formatMonthLabel, getMonthGrid } from '../utils/calendar'

export function useCalendar() {
  const [activeMonth, setActiveMonth] = useState(atMidnight(new Date()))

  const monthGrid = useMemo(() => getMonthGrid(activeMonth), [activeMonth])
  const monthLabel = useMemo(() => formatMonthLabel(activeMonth), [activeMonth])

  const goToPreviousMonth = () => {
    setActiveMonth((current) => new Date(current.getFullYear(), current.getMonth() - 1, 1))
  }

  const goToNextMonth = () => {
    setActiveMonth((current) => new Date(current.getFullYear(), current.getMonth() + 1, 1))
  }

  return {
    activeMonth,
    monthGrid,
    monthLabel,
    goToPreviousMonth,
    goToNextMonth,
  }
}