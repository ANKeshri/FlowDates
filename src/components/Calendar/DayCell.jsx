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
    ? 'text-slate-900 hover:text-white'
    : 'text-slate-400 hover:text-slate-500'

  const rangeTone = isStart || isEnd
    ? 'z-10 scale-110 bg-[linear-gradient(180deg,#2b8fd8_0%,#183f73_100%)] text-white shadow-[0_14px_28px_-14px_rgba(24,63,115,0.9)] ring-[6px] ring-sky-200/70 border-2 border-white'
    : isWithinRange
      ? 'bg-[linear-gradient(180deg,rgba(217,239,252,0.98)_0%,rgba(194,226,248,0.98)_100%)] text-[var(--accent-2)] ring-2 ring-white shadow-[0_8px_18px_-14px_rgba(21,147,209,0.55)]'
      : 'bg-transparent'

  const selectedClass = isStart || isEnd ? 'day-cell start-end' : isWithinRange ? 'day-cell' : 'day-cell'

  return (
    <button
      onClick={() => onSelect(date)}
      className={`calendar-grid-cell relative mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-transparent text-sm font-semibold transition sm:h-11 sm:w-11 ${baseTone} ${rangeTone} ${selectedClass}`}
      title={holiday || formatDateKey(date)}
      aria-label={holiday ? `${date.toDateString()} - ${holiday}` : date.toDateString()}
    >
      {holiday ? (
        <span
          className="holiday-marker absolute inset-[-0.45rem] rounded-full bg-[radial-gradient(circle,rgba(225,29,72,0)_40%,rgba(225,29,72,0.24)_58%,rgba(225,29,72,0.95)_100%)] shadow-[0_0_0_1px_rgba(255,255,255,0.8),0_8px_18px_-10px_rgba(225,29,72,0.9)]"
          aria-hidden="true"
        />
      ) : null}

      {date.getDate()}
    </button>
  )
}

export default DayCell