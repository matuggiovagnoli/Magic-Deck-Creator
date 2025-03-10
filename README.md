# SCHWARTZ INTERVIWE TECHINAL TEST

By following the indications of the excercice I create "Magic Deck Creator". This web cosumes the API from magicthegathering.io

This web APP is Runninng with Github-Pages. You can acces to this url: https://matuggiovagnoli.github.io/Magic-Deck-Creator/

## What is "Magic Deck Creator"?

"Magic Deck Creator" is a web application where users can:

- Create and manage Magic: The Gathering card decks.
- Modify decks as needed, adding or removing cards.
- Browse a collection of Magic cards from the API to build your decks.
- Create as many decks as you want, each with its own collection of cards.

## Strategy

Given the scope of the project, I didn't use a traditional database to store the information about the cards and decks. Instead, I opted for Zustand for state management and localStorage for persistence. This approach ensures that the app remains lightweight while still allowing users to maintain their decks across sessions.

I focused on creating reusable components with single responsibility principles. For instance, buttons and modals are implemented as independent, reusable components, making it easier to maintain and scale the project in the future.

## Librarys

I used this librarys to get the job done:

- Vite (Bundler)
- TypeScript
- Axios
- Zustand
- React Router
- React Icons
- Jest


## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
