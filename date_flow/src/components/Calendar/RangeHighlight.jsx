function RangeHighlight({ selectedLabel, totalSelectedDays, onClear }) {
  return (
    <div className="mt-4 border-t border-[var(--line)] pt-4">
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[var(--muted)]">
        <div className="flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center gap-2 transition-all hover:scale-110">
            <i className="h-3 w-3 rounded-full bg-[var(--accent)] shadow-md" /> Start/End
          </span>
          <span className="inline-flex items-center gap-2 transition-all hover:scale-110">
            <i className="h-3 w-3 rounded-full bg-[var(--accent-soft)] shadow-md" /> In-range
          </span>
          <span className="inline-flex items-center gap-2 transition-all hover:scale-110">
            <i className="h-2.5 w-2.5 rounded-full bg-rose-400 shadow-md" /> Holiday marker
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="range-badge rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700 shadow-sm">
            {selectedLabel}
          </span>
          {totalSelectedDays > 0 ? (
            <span className="range-badge rounded-full bg-sky-100 px-2.5 py-1 text-[11px] font-semibold text-sky-700 shadow-sm" style={{ animationDelay: '100ms' }}>
              {totalSelectedDays} days
            </span>
          ) : null}
          <button
            onClick={onClear}
            className="clear-button rounded-md border border-[var(--line)] bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700 transition hover:border-[var(--accent)] hover:text-[var(--accent)] duration-300"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  )
}

export default RangeHighlight