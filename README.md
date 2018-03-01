#  UdaciCards
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

* Standard compliant React Native App Utilizing [Ignite](https://github.com/infinitered/ignite)

## Table of Contents

- [Start](#start)
- [How to run](#how-to-run-app)
- [Description](#description)
- [Requirements](#requirements)
- [Standard compliant](#standard-compliant)


## Start

**Step 1:** git clone this repo:

**Step 2:** cd to the cloned repo:

**Step 3:** Install the Application with `yarn` or `npm i`


## How to Run App

1. cd to the repo
2. Run Build for either OS
  * run `yarn start`

## Description

  This is the project for the final assessment project for Udacity's React Native course. Users are be able to hat to study collections of flashcards.

  The app will allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

  This project encompasses the fundamental aspects of building a native application including handling infinite lists, routing, and user input.

## Requirements

1. Specific Requirements
2. Use create-react-native-app to build your project.
3. Allow users to create a deck which can hold an unlimited number of cards.
4. Allow users to add a card to a specific deck.
5. The front of the card should display the question.
6. The back of the card should display the answer.
7. Users should be able to quiz themselves on a specific deck and receive a score once they're done.
8. Users should receive a notification to remind themselves to study if they haven't already for that day.

## Standard Compliant

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
This project adheres to Standard.  Our CI enforces this, so we suggest you enable linting to keep your project compliant during development.

**To Lint on Commit**

This is implemented using [husky](https://github.com/typicode/husky). There is no additional setup needed.

**Bypass Lint**

If you have to bypass lint for a special commit that you will come back and clean (pushing something to a branch etc.) then you can bypass git hooks with adding `--no-verify` to your commit command.

**Understanding Linting Errors**

The linting rules are from JS Standard and React-Standard.  [Regular JS errors can be found with descriptions here](http://eslint.org/docs/rules/), while [React errors and descriptions can be found here](https://github.com/yannickcr/eslint-plugin-react).
