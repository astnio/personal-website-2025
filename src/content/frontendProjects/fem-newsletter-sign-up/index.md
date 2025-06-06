---
title: Newsletter Sign-up Form
description: "This will test your skills with basic form structure, validation, and submission. The success state will also be an excellent opportunity to work with DOM manipulation."
status: 'complete'
type: 'frontend-mentor'
tags: ['HTML', 'CSS']
date_completed: 2024-09-01
featured: false
github_url: https://github.com/astnio/frontend-mentor-newsletter-sign-up-with-success-message
demo_url: https://github.astn.io/frontend-mentor-newsletter-sign-up-with-success-message/
fem_url: https://www.frontendmentor.io/solutions/form-with-client-side-input-checking-and-transition-W5CNOasidu
cover: './desktop-screenshots/fem-newsletter-sign-up-0.png'
cover_alt: 'Newsletter Sign-up Form'
images:
  [
    {
      src: './desktop-screenshots/fem-newsletter-sign-up-0.png',
      alt: 'Main page',
    },
    {
      src: './desktop-screenshots/fem-newsletter-sign-up-1.png',
      alt: 'Main page - input validation',
    },
    {
      src: './desktop-screenshots/fem-newsletter-sign-up-2.png',
      alt: 'Main page - submit message',
    },
    {
      src: './mobile-screenshots/fem-newsletter-sign-up-0.png',
      alt: 'Main page - mobile',
    },
    {
      src: './mobile-screenshots/fem-newsletter-sign-up-1.png',
      alt: 'Main page - mobile - input validation',
    },
    {
      src: './mobile-screenshots/fem-newsletter-sign-up-2.png',
      alt: 'Main page - mobile - submit message',
    }
  ]
---

# Frontend Mentor - Meet landing page solution

This is a solution to the [Meet landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/meet-landing-page-rbTDS6OUR). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Meet landing page solution](#frontend-mentor---meet-landing-page-solution)
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

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [live site](https://austinh-io.github.io/frontend-mentor-meet-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first

### What I learned

Most of what I used in this project was stuff I have already known. Some new things I tried was how changing the color of the buttons on their hover and active states using filters, instead of hard-coded colors. There was also a version number in the buttons that was a slight tint of the background of each button. I thought it would save some lines of code if I just had the tint dynamically change based on the background, instead of having to manually enter a tint value. I did this by using `mix-blend-mode` for the text, which was something I didn't know about until this project. Using `overlay` with a `75% opacity` really helped with this effect.

### Continued development

I feel like I used a lot more CSS than what may have been necessary. I tried to go for a mobile-first approach again, and started with the smallest screen size design. The transition from that to tablet was actually quite easy, but from tablet to desktop became more of a challenge.

The hardest part for me was turning the single image of the circles in the header. In mobile and tablet it was quite simple, but then it splits into two different images that surround the text in desktop mode. The hard part for me was creating the transition from tablet to desktop, and then managing the look of the split images while keeping it compatible with the tablet and mobile mode. I feel like I got a working solution that looks good, but I don't know if my implementation is very effecient.