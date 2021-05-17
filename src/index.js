import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

//말그대로 store를 제공하는 provider(공급자)컴포넌트 입니다.
import { Provider } from 'react-redux'

//곧 만들게 될 store입니다.
import store from './redux/store'

ReactDOM.render(
  <React.StrictMode>
    {/* provider 컴포넌트로 APP을 감싸고 props로 store를 넣어줍니다. */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
