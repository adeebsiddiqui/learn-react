# React State

React componenets are nothing but functions which returns JSX. React executes or calls all component fucntions it encounters in JSX one after another, starting with `App/` component in `index.js` when the app is intially loaded and rendered for the first time. A component is never reevaluated or rerendered therefore any changes to a component data will not be reflected afterwards unless React State is used.

React State allows a component to be reevaluated and rendered again to reflect the changes in component data for each instance of that component i.e. each compononent instance have its own state managed by React so changing the data in one component instance only allows that instance to be reevaluated and rendered again. It does not affect the state of other instances of the same componenet.

All React hooks are prefixed with `use` e.g. **useState**. All hooks must be called inside a React component function, not outside nor inside a nested function of a component.