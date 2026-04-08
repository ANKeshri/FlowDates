import { formatDateKey } from '../../utils/calendar'

function DayCell({
  date,
  inCurrentMonth,
  holiday,
  isStart,
  isEnd,
  isWithinRange,
  onSelect,
}) {
  const baseTone = inCurrentMonth
    ? 'text-slate-800 hover:text-slate-950'
    : 'text-slate-400 hover:text-slate-500'

  const rangeTone = isStart || isEnd
    ? 'bg-[var(--accent)] text-white'
    : isWithinRange
      ? 'bg-[var(--accent-soft)] text-[var(--ink)]'
      : 'bg-transparent'

  return (
    <button
      onClick={() => onSelect(date)}
      className={`relative mx-auto flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition sm:h-11 sm:w-11 ${baseTone} ${rangeTone}`}
      title={holiday || formatDateKey(date)}
      aria-label={holiday ? `${date.toDateString()} - ${holiday}` : date.toDateString()}
    >
      {date.getDate()}
      {holiday ? <span className="absolute -bottom-0.5 h-1.5 w-1.5 rounded-full bg-rose-400" /> : null}
    </button>
  )
}

export default DayCell