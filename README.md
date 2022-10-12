## Introduction

### Description

This project is a Kanban management tool.

It allow the user to create projects boards, and customize them to show what it needs to be done in a project. 

Available operations inside a board are:

- create/edit/remove columns;
- create/edit/remove cards inside columns;
- move cards through columns via Drag&drop;
- filter cards by their tags/status;
- search cards by their title;

Available customizations are:

- The user can choose a dark theme and a light theme;
- The user can choose the font-size of the application;

### Tech Stack

The project uses `Next.js` react framework with `typescript`;

`styled-components` for the styling of components and the UI;

`redux` as the main state management library;

`jest` for unit and snapshot testing;

`cypress` for e2e testing;

`husky` for running scripts on git-hooks like `pre-commit`, `pre-push`;

`eslint` for code correctness analyses and standardize the project syntax.

`prettier` for code formatting and enforce a consistent code styling through the project.

`github-actions` for running integration tests on pull-requests;

## Project Structure

## Design Concepts

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running tests

### Unit tests

```bash
npm run test
# or
yarn test
```

### End to End tests (terminal only)

```bash
npm run test:e2e:headless
# or
yarn test:e2e:headless
```

### End to End tests (with cypress GUI)

```bash
npm run test:e2e
# or
yarn test:e2e
```

### All tests

```bash
npm run test:all
# or
yarn test:all
```
