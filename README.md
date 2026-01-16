# Typing speed test

## A typing test app that tracks WPM, accuracy across multiple difficulty and time modes, with persistant user preferences.

🔗Live Demo: [];
📦Repository: [https://github.com/Friendlesso/Typing-Speed-FM]

## The Challange

Build a typing speed test that calculates words per minute (WPM) and accuracy.

## Features

### Core
 - Start a test by clicking **Start typing test** or by typing directly
 - Multiple **difficulty** and **time modes**
 - Display real-time **WPM** and **accuracy** and **remaining time**
 - Provide visual feedback:
  - Correct characters highlighted in green
  - Incorrect characters highlighted in red and underlined
  - Visible typing cursor
 - Show end-of-test results including WPM, accuracy, and correct incorrect character count
 - Track personal best using `localStorage`, with a visual celebration when a new high score is achived

### Enhancments
  - Persisted user preferences (difficulty, time, language)
  - UI animations and visual feedback
  - Mulit-language typing support, including English, Spanish, and French test passages

## Tech Stack
  - React + TypeScript
  - Tailwind CSS
  - Vite

## Tehnical Decisions

 - **Centralized state menagment in `App.tsx`**
  All typing stats, user preferences, test state, and completion tracking are managed in the root component to avoid unnecessary prop drilling across pages, components.
  → `src/App.tsx`
