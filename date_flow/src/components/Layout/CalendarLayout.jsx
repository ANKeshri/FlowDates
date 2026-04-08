function CalendarLayout({ monthLabel, selectedLabel, notesPanel, calendarPanel }) {
  return (
    <section className="mx-auto w-full max-w-5xl calendar-enter">
      <div className="relative mx-auto mb-4 flex justify-center gap-2">
        {Array.from({ length: 24 }).map((_, index) => (
          <span
            key={`ring-hole-${index}`}
            className="h-2 w-2 rounded-full border border-slate-500/55 bg-slate-200/70"
          />
        ))}
      </div>

      <article className="paper-shadow overflow-hidden rounded-md border border-white/70 bg-[var(--paper)]">
        <header className="relative grid min-h-[260px] md:min-h-[320px]">
          <div className="relative h-full w-full overflow-hidden bg-[linear-gradient(140deg,#dbe6f0_0%,#b4c9dd_38%,#7aa0c3_66%,#2f5f83_100%)]">
            <div className="absolute -left-10 bottom-0 h-40 w-72 -rotate-6 rounded-t-[42px] bg-[linear-gradient(155deg,#344b5d,#233545)] opacity-75 sm:h-52 sm:w-96" />
            <div className="absolute right-[-40px] bottom-[-15px] h-56 w-80 rotate-6 rounded-t-[48px] bg-[linear-gradient(165deg,#40647f,#23394d)] opacity-75 sm:h-64 sm:w-[26rem]" />
            <div className="absolute left-1/2 top-1/3 h-36 w-24 -translate-x-1/2 rounded-full bg-white/45 blur-2xl" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-slate-950/50" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-3 p-4 sm:p-6">
            <div className="rounded-md bg-white/90 px-3 py-2 backdrop-blur-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
                Wall Planner
              </p>
              <h1 className="month-title text-2xl font-normal text-slate-900 sm:text-3xl">
                {monthLabel}
              </h1>
            </div>

            <p className="rounded-full border border-white/60 bg-black/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm">
              {selectedLabel}
            </p>
          </div>
        </header>

        <div className="grid gap-0 lg:grid-cols-[1fr_1.45fr]">
          {notesPanel}
          {calendarPanel}
        </div>
      </article>
    </section>
  )
}

export default CalendarLayout