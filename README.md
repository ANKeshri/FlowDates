# Date Flow Calendar

Date Flow Calendar is a polished React-based wall calendar experience inspired by printed calendar layouts. It combines a visual hero section, interactive date-range selection, and note-taking support in a responsive interface built with Vite and Tailwind CSS.

## Highlights

- Wall-calendar inspired layout with a bold hero section
- Animated month navigation with page-swap motion
- Start, end, and in-range date selection states
- Monthly notes with local storage persistence
- Separate notes for selected date ranges
- Holiday marker styling for special dates
- Responsive layout for desktop and mobile screens
- Built-in visual depth, gradients, and subtle motion effects

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- ESLint 9

## Project Structure

```text
date_flow/
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
	public/
		calender-hero.mp4
		calender-hero11.mp4
		image.png
	index.html
	package.json
	vite.config.js
```

## Features

### Calendar Experience

- Browse months using Prev and Next controls
- Smooth month-swap animation for better visual continuity
- Select a start date and end date across the calendar grid
- View selected date ranges clearly with highlighted states

### Notes Support

- Save monthly notes for each calendar month
- Save notes linked to a selected date range
- Persist notes in the browser using localStorage

### Visual Design

- Hero media area with rich visual layering
- Stronger contrast and better date visibility
- Tinted panels instead of plain white surfaces
- Cleaner typography and spacing for a premium look

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

### 3. Create a production build

```bash
npm run build
```

### 4. Run lint checks

```bash
npm run lint
```

## Notes

- Run commands from the app folder:

```bash
cd C:\Users\HP\Desktop\date_flow\date_flow
```

- The hero section uses media files from the `public` folder.
- Notes are stored locally in the browser and will not sync across devices unless a backend is added.

## Recommended Commit History

If you are submitting this as a company task, a clean history could be:

1. project setup and Tailwind configuration
2. base layout and global styling
3. calendar utilities and hooks
4. reusable calendar components
5. visual refinement and final polish

## License

This project was created for a frontend challenge submission.
