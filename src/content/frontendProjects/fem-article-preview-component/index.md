---
title: Article Preview Component
description: "Practice your layout skills with this article preview component. There's lots of fun to be had playing around with animations for the sharing icons as well."
status: 'complete'
type: 'frontend-mentor'
tags: ['JavaScript', 'HTML', 'CSS']
date_completed: 2024-09-01
featured: false
github_url: https://github.com/astnio/frontend-mentor-article-preview-component
demo_url: https://github.astn.io/frontend-mentor-article-preview-component/
fem_url: https://www.frontendmentor.io/solutions/responsive-layout-using-flexbox-and-javascript-guzuTEOrfj
cover: './desktop-screenshots/fem-article-preview-component-0.png'
cover_alt: 'Article Preview Component Homepage'
images:
  [
    {
      src: './desktop-screenshots/fem-article-preview-component-0.png',
      alt: 'Main page',
    },
    {
      src: './desktop-screenshots/fem-article-preview-component-1.png',
      alt: 'Share button active',
    },
  ]
---

# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Article preview component solution](#frontend-mentor---article-preview-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

I learned more about using clip-mask in CSS. I don't use it very much, and found this was a good chance to use it.

### Continued development

This challenge was difficult in that I was not sure how to transition the share buttons from the mobile layout to a desktop layout. Once more, I have started from the mobile view, however I feel as though it would have been quite a challenge going from either layout to another.

It was a challenge because it is hard to decide how to manage the pop-up. Starting in either view is easy, as you simply base it off the parent that it may be nested under, but the location changes completely once in the other view. One solution I was thinking of was to simply have two of these, and just disable one when the layout changes. Having two of those to update seemed counter-productive, though, so I tried to keep it to juse a single one.

I was also considering using JavaScript to move the element around, as to base it on another parent per layout. That probably would have worked, but seemed overkill for this simpler project.

What I ended up doing was giving the element an absolute position, and just manually tweaking the location until it was centered where I wanted it to be. This solution does not feel great to me, as any layout change will end up messing it up, however the card has a set with at the desktop, and the mobile view is fine because it is contained within its parent anyway.

I cannot say I am really proud of the solution I came up with, but I felt as though it was the simplest to implement without going overkill on JavaScript or creating duplicate elements.

## Author

- Website - [Austin Hagel](https://astnio)
- Frontend Mentor - [@astnio](https://www.frontendmentor.io/profile/astnio)