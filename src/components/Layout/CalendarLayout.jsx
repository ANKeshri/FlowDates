function CalendarLayout({
  monthLabel,
  selectedLabel,
  notesPanel,
  calendarPanel,
  heroVideoSrc = '/calender-hero.mp4',
}) {
  return (
    <section className="mx-auto w-full max-w-5xl calendar-enter">
      <article className="calendar-shell paper-shadow overflow-hidden rounded-[18px] border border-white/70 bg-[var(--paper)]">
        <header className="relative grid min-h-[260px] md:min-h-[320px]">
          <div className="relative h-full w-full overflow-hidden bg-[linear-gradient(140deg,#9eb7d1_0%,#6f93b8_34%,#365f8b_68%,#203a57_100%)]">
            <video
              className="hero-video absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            >
              <source src={heroVideoSrc} type="video/mp4" />
              <source src="/calender-hero11.mp4" type="video/mp4" />
            </video>
            <div className="hero-sheen absolute inset-0" />
            <div className="hero-vignette absolute inset-0" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/45 to-transparent" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-3 p-4 sm:p-6">
            <div className="rounded-2xl border border-white/18 bg-[linear-gradient(180deg,rgba(35,112,184,0.95)_0%,rgba(18,73,138,0.96)_100%)] px-4 py-3 shadow-[0_14px_28px_-18px_rgba(10,42,84,0.85)] backdrop-blur-md">
              <h1 className="month-title text-2xl font-normal text-white sm:text-[2.1rem]">
                {monthLabel}
              </h1>
            </div>

            <p className="rounded-full border border-white/35 bg-black/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md shadow-[0_8px_18px_-12px_rgba(0,0,0,0.65)]">
              {selectedLabel}
            </p>
          </div>
        </header>

        <div className="grid gap-0 lg:grid-cols-[1fr_1.45fr]">
          <div className="panel-in-left">{notesPanel}</div>
          <div className="calendar-divider panel-in-right">{calendarPanel}</div>
        </div>
      </article>
    </section>
  )
}

export default CalendarLayout