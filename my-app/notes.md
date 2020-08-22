# HOW TO CREATE A REACT + REDUX APP

## STEPS 
1. `npx create-react-app app-name`
2. go into your `src` folder and create three folders:
    - actions
    - components
    - reducers
3. install dependencies
```javascript
    "react-dom": "^16.12.0",
    "react-redux": "^7.1.3",
    "react-scripts": "3.3.0",
    "redux": "^4.0.5",
    "redux-thunk": "^2.3.0"
```
4. edit the `index.js` file to have thunk and provider
5. organize and separate your actions and reducer
    - for example, if you have a characters reducer, it has it's own characters actions in a separate file

