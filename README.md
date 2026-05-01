# TimePerception

Interactive webpage that visualizes how the subjective perception of time can change with age.

The model is intentionally simple: a duration is treated as proportional to `1 / age`. This makes it possible to compare how the same trip, year, or waiting time might feel to a child and to an adult.

## Features

- Compare the perceived weight of one year for a child and an adult.
- Adjust both ages with sliders.
- Adjust a car trip duration and see the adult-equivalent perceived duration.
- Visualize the age ratio with bars and animated inner clocks.
- Built with plain HTML, CSS, and JavaScript.

## Project Structure

```text
.
├── timeperseption.html
├── styles.css
├── app.js
└── README.md
```

## Run Locally

Open `timeperseption.html` directly in a browser.

No build step, framework, or package installation is required.

## Example

With the default values:

- Child: `5 years old`
- Adult: `40 years old`
- Trip: `3 hours`

The page estimates that a `3 h` car trip for a 5-year-old could feel roughly like `24 h` for a 40-year-old.

## Note

This is not a neurological model. It is a visual and mathematical intuition meant to make the idea easier to feel.
