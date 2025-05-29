---
title: WordGuess Game (React)
description: 'A game where you guess a letter to find the word. Fetches a random word from an API and uses Framer Motion for some animation when changing pages.'
tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion']
status: 'in-progress'
type: 'personal'
date_completed: 2023-12-01
featured: true
github_url: https://astn.sh/gh-rtt-wordguess
demo_url: https://astn.sh/rtt-wordguess
cover: './rtt_wordguess.png'
cover_alt: 'Project cover'
---

# React-TypeScript-Tailwind WordGuess

This is my third (and likely final) WordGuess game. I like to make these when learning a new UI system, but this will probably be the last one I do.

The game works by getting a random word from an API. You then click on buttons associated with a letter. If you clicked on a letter that belongs to the word, then it is revealed on the display. If you guess a letter not belonging to the word, then your allowed number of guesses will go down by one. If it reaches zero, you lose the game. You win by fully revealing the word.
