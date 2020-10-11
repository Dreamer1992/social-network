import * as serviceWorker from './serviceWorker';
import store from "./redux/reduxStore";
import './index.css';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

export let rerenderEntireThree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} store={store} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireThree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireThree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
