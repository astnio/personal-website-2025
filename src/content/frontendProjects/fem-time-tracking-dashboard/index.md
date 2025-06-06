---
title: Time Tracking Dashboard
description: "A perfect opportunity to practice your CSS Grid skills. For anyone wanting to take it up a notch, we provide a JSON data file to practice working with data."
status: 'complete'
type: 'frontend-mentor'
tags: ['HTML', 'CSS',]
date_completed: 2024-09-01
featured: true
github_url: https://github.com/astnio/frontend-mentor-time-tracking-dashboard
demo_url: https://github.astn.io/frontend-mentor-time-tracking-dashboard/
fem_url: https://www.frontendmentor.io/solutions/responsive-dashboard-with-css-grid-flexbox-and-javascript-buGBNXzu77
cover: './fem-time-tracking-dashboard-desktop.png'
cover_alt: 'Time Tracking Dashboard'
images:
  [
    {
      src: './fem-time-tracking-dashboard-desktop.png',
      alt: 'Main page',
    },
    {
      src: './fem-time-tracking-dashboard-mobile.png',
      alt: 'Main page - mobile',
    },
  ]
---

# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Time tracking dashboard solution](#frontend-mentor---time-tracking-dashboard-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript

### What I learned

I decided to change things up in a few different ways for this project.

The first thing I did differently was that I did not use the images completely as they were. I noticed that the images given all had preset colors, based on the background color of its category. I didn't think this was very flexible if the user wanted a new background color or a different image, so I configured images to use a combination of CSS filters so that they instead dark the area of the background they are on. This allows them to be a tint of the background, like their original color, while allowing it to be flexible enough to use any image on any background while keeping it looking good.

The second thing I did was add more properties to the JSON data. This was mostly so that I could utilize this information for how I setup my JavaScript.

For my JavaScript, I wanted to create a system that was expandable. I also tried to keep my code concise by splitting it into 5 main files:

- `fetchData.js` is just to get data from my .json file
- `categoryCard.js` is a class that helps me model my categoryCard objects
- `categoryCardsManager.js` reads the data from `fetchData.js` and instantiates a the `categoryCard`s, and puts them into an object that is exported
- `elementMaker.js` is just used to create an HTML element to append to the main document, however it is used as a property for each `categoryCard`
- `main.js` is where I setup the buttons and begin appending the card elements to the main page

I think the way this is setup is nice, because each categoryCard contains the information for its own element, which is appended to the main page. This makes it easy to change the info on everything at once, as my function for updating info is based on the categoryCard class, which also has its own info from the JSON file it was made from.

This means that in my main file, I can just loop over my primary list of time cards, and call their functions to update. This was easy to do as there are only 3 buttons (daily, weekly, monthly) which just changes the hours and labels to match the information already given in the JSON file.

The design works well too. Since I am using grid, having more than 6 items actually doesn't look too bad, as they simply wrap down to the next row, leaving everything else perfectly fine. Mobile works fine too as it just makes the column longer.