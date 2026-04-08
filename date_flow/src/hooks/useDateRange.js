import { useMemo, useState } from 'react'
import { atMidnight, formatDateKey, formatRangeLabel, isSameDay } from '../utils/calendar'

export function useDateRange() {
  const [rangeStart, setRangeStart] = useState(null)
  const [rangeEnd, setRangeEnd] = useState(null)

  const selectedLabel = useMemo(
    () => formatRangeLabel(rangeStart, rangeEnd),
    [rangeStart, rangeEnd],
  )

  const activeRangeKey = useMemo(() => {
    if (!rangeStart || !rangeEnd) return null
    return `${formatDateKey(rangeStart)}__${formatDateKey(rangeEnd)}`
  }, [rangeStart, rangeEnd])

  const totalSelectedDays = useMemo(() => {
    if (!rangeStart || !rangeEnd) return 0
    const msPerDay = 24 * 60 * 60 * 1000
    return Math.round((rangeEnd.getTime() - rangeStart.getTime()) / msPerDay) + 1
  }, [rangeStart, rangeEnd])

  const selectDate = (date) => {
    const picked = atMidnight(date)

    if (!rangeStart || rangeEnd) {
      setRangeStart(picked)
      setRangeEnd(null)
      return
    }

    if (picked < rangeStart) {
      setRangeStart(picked)
      return
    }

    setRangeEnd(picked)
  }

  const clearRange = () => {
    setRangeStart(null)
    setRangeEnd(null)
  }

  const isStart = (date) => Boolean(rangeStart) && isSameDay(date, rangeStart)
  const isEnd = (date) => Boolean(rangeEnd) && isSameDay(date, rangeEnd)
  const isWithinRange = (date) => {
    if (!rangeStart || !rangeEnd) return false
    const value = atMidnight(date).getTime()
    return value > rangeStart.getTime() && value < rangeEnd.getTime()
  }

  return {
    rangeStart,
    rangeEnd,
    selectedLabel,
    activeRangeKey,
    totalSelectedDays,
    selectDate,
    clearRange,
    isStart,
    isEnd,
    isWithinRange,
  }
}