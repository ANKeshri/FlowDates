# Date Flow Calendar

A polished wall-calendar inspired React component built with Vite and Tailwind CSS.

## Features

- Wall calendar visual style with hero header and paper-card layout
- Interactive date range selection with start, end, and in-range visual states
- Notes panel with:
	- month-level notes
	- selected-range notes
- Local storage persistence for notes
- Responsive desktop/mobile layout
- Holiday marker dots for key dates

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4 (via @tailwindcss/vite)
- ESLint 9

## Project Structure

src/
	components/
		Calendar/
			Calendar.jsx
			CalendarGrid.jsx
			DayCell.jsx
			RangeHighlight.jsx
		Layout/
			CalendarLayout.jsx
		Notes/
			NotesPanel.jsx
	hooks/
		useCalendar.js
		useDateRange.js
		useLocalStorage.js
	utils/
		calendar.js
	App.jsx
	index.css
	main.jsx

## Run Locally

1. Install dependencies

	 npm install

2. Start development server

	 npm run dev

3. Build for production

	 npm run build

4. Run lint checks

	 npm run lint

## Notes

- Run commands from the app folder:
	c:/Users/HP/Desktop/date_flow/date_flow
