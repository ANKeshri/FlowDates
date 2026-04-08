export const WEEK_DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

export const HOLIDAY_BY_MONTH_DAY = {
  '1-1': "New Year's Day",
  '2-14': "Valentine's Day",
  '7-4': 'Independence Day',
  '10-31': 'Halloween',
  '12-25': 'Christmas Day',
}

export function atMidnight(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

export function isSameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

export function formatDateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(
    date.getDate(),
  ).padStart(2, '0')}`
}

export function formatMonthLabel(date) {
  return date.toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
  })
}

export function formatMonthStorageKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
}

export function formatRangeLabel(rangeStart, rangeEnd) {
  if (!rangeStart && !rangeEnd) return 'Select a date range'

  if (rangeStart && !rangeEnd) {
    return `Start: ${rangeStart.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    })}`
  }

  return `${rangeStart.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })} - ${rangeEnd.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })}`
}

export function getMonthGrid(monthDate) {
  const year = monthDate.getFullYear()
  const month = monthDate.getMonth()
  const firstOfMonth = new Date(year, month, 1)
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const mondayFirstIndex = (firstOfMonth.getDay() + 6) % 7
  const totalCells = Math.ceil((mondayFirstIndex + daysInMonth) / 7) * 7
  const firstCellDate = new Date(year, month, 1 - mondayFirstIndex)

  return Array.from({ length: totalCells }, (_, index) => {
    const date = new Date(firstCellDate)
    date.setDate(firstCellDate.getDate() + index)
    return {
      date,
      inCurrentMonth: date.getMonth() === month,
    }
  })
}