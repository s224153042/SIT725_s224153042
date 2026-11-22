# Lolly Lane — SIT725 Task 3.2P

An Australian lolly-shop catalogue adapted from the supplied Express and Materialize practical.
The original folder structure is preserved: server.js, public/index.html,
public/css/styles.css, public/js/scripts.js and public/images/.

## Run locally

1. Run `npm install` from this folder.
2. Run `npm start`.
3. Open http://localhost:3000 (or set PORT to another port).

The page loads Materialize, jQuery and fonts from CDNs, so an internet connection
is needed for these browser libraries.

## Request flow

The browser calls `GET /api/lollies`. Express responds with
`{ statusCode: 200, data: [...], message: "Success" }`.
Each item keeps the practical's `title`, `image`, `link` and `desciption` fields
(the original spelling is preserved). Client JavaScript renders the response as
responsive Materialize cards. The details reveal, image zoom and modal demonstrate
Materialize interactions. The form only previews a favourite; it does not save data.
Loading errors display a retry action.

## Evidence to capture

- Running terminal showing `npm start`.
- Browser showing the loaded lolly cards.
- A revealed card or the favourite-lolly modal.
- `/api/lollies` JSON response, or the request in the browser Network panel.

Push the code to your own GitHub repository and place your repository link and
screenshots in the PDF required by OnTrack. Check the Task 1.3P GitHub guidelines.

## Attribution

Adapted from Navit Choudhary's sit725-2021-t2-prac3 practical (2021), MIT licensed.
The original LICENSE is retained. Product photos are supplied by the project owner in public/images: jelly-beans.jpg, strawberries-and-cream.jpg, snakes.jpg and lolly-jar.jpeg. Photo ownership and source attribution should be confirmed before publishing.
