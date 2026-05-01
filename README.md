# TimePerception

Interactive webpage that visualizes how the perception of time can change with age.

The model is intentionally simple: a duration is treated as proportional to `1 / age`. This makes it possible to compare how the same car trip might feel to a child and to an adult.

## Features

- Adjust both ages with sliders.
- Choose a car trip duration from `1 h` to `12 h`.
- See the adult-equivalent perceived duration.
- Visualize the age ratio with a large comparison and animated inner clocks.
- Built with plain HTML, CSS, and JavaScript.

## Project Structure

```text
.
├── index.html
├── styles.css
├── app.js
└── README.md
```

## Run Locally

Open `index.html` directly in a browser.

No build step, framework, or package installation is required.

## Example

With the default values:

- Child: `5 years old`
- Adult: `40 years old`
- Car trip: `3 hours`

The page estimates that a `3 h` car trip for a 5-year-old could feel roughly like `24 h` for a 40-year-old.

## Note

This is not a neurological model. It is a visual and mathematical intuition meant to make the idea easier to feel.
