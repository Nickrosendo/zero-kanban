## Description

This project is a Kanban management tool.

It allow the user to create projects boards, and customize them to show what it needs to be done in a project. 

## Summary
[Design concepts](#design-contacts)

[Routes](#routes)

[Tech stack](#tech-stack)

[Getting started](#getting-started)

[Running tests](#running-tests)

## Design concepts

### components
The components are styled using styled-components and sits on the `/src/components` folder, all the components have a dark and light theme version.

### state management
The state management on this project uses both `redux` and `React Context API`, while the `redux` is used for more "transaction" data of the application, such as the board state, cards, etc. The `React Context API` is used for customizations like the theme, font-size and that kind of user customizations.

### authentication
The authentication occurs in the server, using the [Next.js api routes](https://nextjs.org/docs/api-routes/introduction), and store the user data only in the server memory, so at every restart the data is reseted.
The user can also use the application as a guest user to skip authentication.

### board
The board management occurs mostly on two places, in the `redux` store and also in the `server` memory, and each board update this data gets synced on all clients.

### customization
The application allow the user to customize their experience, mostly their theme(dark or light) and the font-size of the application. The customization data gets stored in the server memory and synced to all clients.

## Routes

### /board

This route is intended to list the user boards, create a new one or remove the boards in the list.

### /board/[id]

This route contains most of the board functionality, the `id` is a dynamic route flag to identify the current board.

On this route the user can create new columns, delete existent ones and reorganize their order.

On the available columns the user can create new cards, delete existent cards and reorganize their order or move them to other columns.

On the available cards the user can edit them by clicking the edit button or double-click them.

### /login 

The Login route allow the user to login as a `guest` or a `know-user` via username and password combo.

***The authentication data is stored only on the memory of the server, so at every restart or new deploy all `know-users` gets reseted.***

### /signup

The Signup route allow users to register in the platform.


## Tech stack

The project uses `Next.js` react framework with `typescript`;

`styled-components` for the styling of components and the UI;

`redux` as the main state management library;

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
