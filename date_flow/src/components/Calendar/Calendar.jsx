import CalendarGrid from './CalendarGrid'
import RangeHighlight from './RangeHighlight'
import NotesPanel from '../Notes/NotesPanel'
import CalendarLayout from '../Layout/CalendarLayout'
import { useCalendar } from '../../hooks/useCalendar'
import { useDateRange } from '../../hooks/useDateRange'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { formatMonthStorageKey } from '../../utils/calendar'

function Calendar() {
  const { activeMonth, monthGrid, monthLabel, goToNextMonth, goToPreviousMonth } = useCalendar()
  const {
    selectedLabel,
    activeRangeKey,
    totalSelectedDays,
    selectDate,
    clearRange,
    isStart,
    isEnd,
    isWithinRange,
  } = useDateRange()

  const [monthNotesByKey, setMonthNotesByKey] = useLocalStorage('date-flow-month-notes', {})
  const [rangeNotesByKey, setRangeNotesByKey] = useLocalStorage('date-flow-range-notes', {})

  const monthKey = formatMonthStorageKey(activeMonth)
  const monthNotes = monthNotesByKey[monthKey] || ''
  const rangeNote = activeRangeKey ? rangeNotesByKey[activeRangeKey] || '' : ''

  const onMonthNotesChange = (nextValue) => {
    setMonthNotesByKey((current) => ({
      ...current,
      [monthKey]: nextValue,
    }))
  }

  const onRangeNoteChange = (nextValue) => {
    if (!activeRangeKey) return
    setRangeNotesByKey((current) => ({
      ...current,
      [activeRangeKey]: nextValue,
    }))
  }

  const notesPanel = (
    <NotesPanel
      monthNotes={monthNotes}
      onMonthNotesChange={onMonthNotesChange}
      rangeNote={rangeNote}
      onRangeNoteChange={onRangeNoteChange}
      canEditRangeNote={Boolean(activeRangeKey)}
    />
  )

  const calendarPanel = (
    <section className="p-4 sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <button
          onClick={goToPreviousMonth}
          className="rounded-md border border-[var(--line)] bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          Prev
        </button>

        <h2 className="month-title text-xl text-slate-900 sm:text-2xl">{monthLabel}</h2>

        <button
          onClick={goToNextMonth}
          className="rounded-md border border-[var(--line)] bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          Next
        </button>
      </div>

      <CalendarGrid
        monthGrid={monthGrid}
        onDateClick={selectDate}
        isStart={isStart}
        isEnd={isEnd}
        isWithinRange={isWithinRange}
      />

      <RangeHighlight
        selectedLabel={selectedLabel}
        totalSelectedDays={totalSelectedDays}
        onClear={clearRange}
      />
    </section>
  )

  return (
    <CalendarLayout
      monthLabel={monthLabel}
      selectedLabel={selectedLabel}
      notesPanel={notesPanel}
      calendarPanel={calendarPanel}
    />
  )
}

export default Calendar