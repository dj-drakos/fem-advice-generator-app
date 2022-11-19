# Advice Dice

<div align='center'>

[Solution Repo](https://github.com/dj-drakos/fem-advice-generator-app) | [Live Site](https://advice-dice.netlify.app/)
</div>
<br>

This is my solution to the [Advice generator app challenge](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db) on Frontend Mentor. The challenge provided UX requirements and .pngs of design mockups at small and large media sizes. I built a responsive, single-page application that fetches data of variable lengths from a third part API and renders it appropriately.
<br>
<br>

## Table of contents
- [Tools & Resources](#tools--resources)
- [Highlights](#highlights)
- [The Challenge](#the-challenge)
<br>
<br>

---
<br>

## Tools & Resources

- [React.js](https://reactjs.org/) 
- Semantic HTML5 markup 
- CSS Flexbox & Grid 
- Mobile-first workflow 
- Fetch API
- [Carnegie Museums Web Accessibility Guidelines](http://web-accessibility.carnegiemuseums.org/code/svg/) - SVG icon font guidelines for accessible markup
<br>

---
<br>

## Highlights

This was a great compact exercise in building a responsive UI that delivers a smooth experience through state changes. Some design decisions that came up in this process were:
- Layout decisions: 
    - Make it responsive
    - Make it dynamic in case incoming advice slips are quite long
    - Make sure it doesn't break during loading states
- Inline SVG practice: 
  - Using CSS to render svgs responsively
  - Markup for screen reader accessibility
- Button considerations
  - Make it intuitive
  - Disable button clicking before the server generates a new advice slip
<br>

---
<br>

## The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon
