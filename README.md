## Description

This project is a Kanban management tool.

It allow the user to create projects boards, and customize them to show what it needs to be done in a project. 

## Demo

A demo of the project visit can be found [here](https://zero-kanban-mr8l13v84-nickrosendo.vercel.app)

## Summary
[Design concepts](#design-contacts)

[Tech stack](#tech-stack)

[Getting started](#getting-started)

[Running tests](#running-tests)

[Possible improvements](#improvements)

## Design concepts

### components
The components are styled using styled-components and sits on the `/src/components` folder, all the components are implemented using `styled-components`

### board
The board management occurs mostly on the `Board` component, there is the place where the all the board state is managed, and through passing props to `Column` and `Card` components we make sure all business logic is centralized is that `Board` component.

### drag-and-drop
The drag-and-drop functionality is mostly handled by the library `react-beautiful-dnd`, is a pretty straight-forward library and it required three parts to work, the first part is the `DragDropContext` wrapping the drag-and-drop area and accepting a prop called `dragEnd` the will notify us with the source and destination positions of the drag-and-drop movement, the second part is the `Droppable` that wrap each `Column` component and marks the place where each `Card` could be dropped, and for the last part we use the `Draggable` component that wrap each `Card` component, this is what makes all cards allowed to be drag.

## Tech stack

The project uses `Next.js` react framework with `typescript`;

`styled-components` for the styling of components and the UI;

`react-beautiful-dnd` for the drag-and-drop mechanism;

`jest` for unit and snapshot testing;

`cypress` for e2e testing;

`husky` for running scripts on git-hooks like `pre-commit`, `pre-push`;

`eslint` for code correctness analyses and standardize the project syntax.

`prettier` for code formatting and enforce a consistent code styling through the project.

`github-actions` for running tests on pushs to branches `main` and `staging`;

## Getting started

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

## improvements
Some of the improvements that can be made in the future:
- Managing board state using `redux` or other state-management-library.
- Using an api connected to a database to store the board state.
- Including authentication to access the board state.
- Allow better customization using the `styled-components` theming feature.
- Allow the user to create more boards.
- Allow the user to change the default columns.
