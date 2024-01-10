# React + Vite: Steps with validation

- This PoC allows you to go through steps. Each steps is associated with a Page.
- You can go to the next or previous step with the buttons.
- There is a validation so that the user cannot skip steps by changing the URL.
- The order of the steps is defined in a constant.
- The currentStep is handled in the Context API with Local Storage.
- With UseEffect it's validates that the route matches the currentStep.

## Technologies

- React Router Dom v6
- Local Storage
- Context API

## Getting Started

```bash
npm install

npm run dev
```
