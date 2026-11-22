# Oz Lolly Shop

SIT725 Task 3.2P

A simple Australian lolly shop featuring jelly beans, strawberries and cream, and jelly snakes. Built using Express and Materialize, following the week 3 practical.

## Getting started
From this folder, run:

```bash
npm install
npm start
```

Then open http://localhost:3000.

You’ll need an internet connection for Materialize, jQuery and Google Fonts.

## Features

- Browse the lolly cards and click to read their descriptions.
- Click the main image to enlarge it.
- Select “Pick your favourite” to enter your name and choose a lolly.

The form only displays your selection.

## GET endpoint

`GET /api/lollies` returns the lolly data from the Express server. The browser requests this data and uses it to display the cards.

## Files

- `server.js` — Server and API endpoint.
- `public/index.html` — Page layout.
- `public/css/styles.css` — Colours and styling.
- `public/js/scripts.js` — Loads the lolly data and handles interactions.
- `public/images/` — Images used on the page.

## Credits

Based on Navit Choudhary’s `sit725-2021-t2-prac3` practical (2021). The original MIT licence is included.
