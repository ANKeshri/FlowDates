function NotesPanel({
  monthNotes,
  onMonthNotesChange,
  rangeNote,
  onRangeNoteChange,
  canEditRangeNote,
}) {
  return (
    <aside className="surface-warm border-b border-[var(--line)] p-4 sm:p-6 lg:border-b-0 lg:border-r">
      <div className="mb-6">
        <h2 className="small-label text-xs font-bold uppercase">
          Monthly Notes
        </h2>
        <textarea
          value={monthNotes}
          onChange={(event) => onMonthNotesChange(event.target.value)}
          placeholder="Capture ideas, tasks, and reminders for this month..."
          className="notes-textarea mt-3 h-36 w-full resize-none rounded-xl border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(240,248,255,0.92)_100%)] p-3 text-sm leading-relaxed outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-sky-200"
        />
      </div>

      <div>
        <h2 className="small-label text-xs font-bold uppercase">
          Selected Range Notes
        </h2>
        <textarea
          value={rangeNote}
          onChange={(event) => onRangeNoteChange(event.target.value)}
          disabled={!canEditRangeNote}
          placeholder={
            canEditRangeNote
              ? 'Add details for this date range...'
              : 'Pick a start and end date to attach notes.'
          }
          className="notes-textarea mt-3 h-28 w-full resize-none rounded-xl border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(248,241,230,0.92)_100%)] p-3 text-sm leading-relaxed outline-none disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500 focus:border-[var(--accent)] focus:ring-2 focus:ring-sky-200"
        />
      </div>
    </aside>
  )
}

export default NotesPanel