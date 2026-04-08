import DayCell from './DayCell'
import { HOLIDAY_BY_MONTH_DAY, WEEK_DAYS } from '../../utils/calendar'

function CalendarGrid({ monthGrid, onDateClick, isStart, isEnd, isWithinRange }) {
  return (
    <div className="grid grid-cols-7 gap-y-3 text-center">
      {WEEK_DAYS.map((day) => (
        <span
          key={day}
          className="pb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--ink-soft)] sm:text-xs"
        >
          {day}
        </span>
      ))}

      {monthGrid.map(({ date, inCurrentMonth }) => {
        const holiday = HOLIDAY_BY_MONTH_DAY[`${date.getMonth() + 1}-${date.getDate()}`]

        return (
          <DayCell
            key={`${date.toISOString()}-${inCurrentMonth ? 'active' : 'edge'}`}
            date={date}
            inCurrentMonth={inCurrentMonth}
            holiday={holiday}
            isStart={isStart(date)}
            isEnd={isEnd(date)}
            isWithinRange={isWithinRange(date)}
            onSelect={onDateClick}
          />
        )
      })}
    </div>
  )
}

export default CalendarGrid