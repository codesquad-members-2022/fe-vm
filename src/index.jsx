import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import worker from './MockData/browsers';

if (process.env.NODE_ENV === 'development') {
	worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode> // useReducer 사용 시 두 번 값이 입력
	<App />
	// </React.StrictMode>
);
