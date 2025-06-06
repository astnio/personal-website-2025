---
title: Password Generator App
description: "This app will be an excellent test of your HTML, CSS, and JS skills. You'll build custom form controls and use JavaScript to generate random passwords."
status: 'complete'
type: 'frontend-mentor'
tags: ['HTML', 'CSS', 'JavaScript']
date_completed: 2024-09-01
featured: true
github_url: https://github.com/astnio/frontend-mentor-password-generator-app
demo_url: https://github.astn.io/frontend-mentor-password-generator-app/
fem_url: https://www.frontendmentor.io/solutions/password-generator-using-flexbox-grid-and-javascript-with-regex-QFUbANDUJv
cover: './fem-password-generator-desktop.png'
cover_alt: 'Password Generator App'
images:
  [
    {
      src: './fem-password-generator-desktop.png',
      alt: 'Main page',
    },
    {
      src: './fem-password-generator-mobile.png',
      alt: 'Main page - mobile',
    },
  ]
---

# Frontend Mentor - Password generator app solution

This is a solution to the [Password generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/password-generator-app-Mr8CLycqjh). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Password generator app solution](#frontend-mentor---password-generator-app-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Generate a password based on the selected inclusion options
- Copy the generated password to the computer's clipboard
- See a strength rating for their generated password
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page


### Links

- Solution URL: [solution URL](https://www.frontendmentor.io/solutions/password-generator-using-flexbox-grid-and-javascript-with-regex-QFUbANDUJv)
- Live Site URL: [live site URL](https://austinh-io.github.io/frontend-mentor-password-generator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript

### What I learned

I learned the most about how to style inputs, in particular the slider input. The biggest challenge I have faced from a lot of these is changing the default style of form elements. It hasn't really been too bad before, but the slider really killed me this time. There are seemingly a million different ways to create a custom slider, and almost none of them are intuitive or have any integration with the browser's native styling. I probably spent about 3 hours trying to figure it out before eventually finding a solution that works across multiple browsers and isn't too complicated.

The next challenge was generating the password. This wasn't too bad, and I already had an idea to go about it based on a previous project I had worked on. My previous project was a word-guess game, and I programmaticly generated a keyboard with letters for buttons to chose a letter to guess. I didn't want to create an array of all the letters, so I just use character codes instead. The same idea worked here, and I simply made several functions to add certain sets of characters within a range of character codes based on the checkbox that was selected.

One of the bigger challenges was creating the password evaluator. This wasn't actually quite as bad as styling the slider, but it was still quite challenging. At first I thought about using a Regex query, as I am already a bit familiar with Regex, but that didn't work as I realized I would need to give multiple ratings. After doing some research and seeing what other people have done for similar problems, I realized it would actually be best to create a score system. I still used Regex for this, but I was able to make much simpler queries, and simply add points to a total score based on how each mini-evalutation was rated. I then total up the points, and set the label and meter based on that.

### Continued development

I feel as though I need to focus on problem-solving a bit more. Admittedly, I had to do a lot of research and Googling to find a lot of solutions for each problem I had. Maybe this is normal, and I do like the results I have, but I feel as though I could have put more time and effort into finding solutions on my own first.