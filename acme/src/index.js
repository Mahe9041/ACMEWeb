import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './component/App';

function RootComponent() {
  return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
  );
}

ReactDOM.render(<RootComponent />, document.getElementById('root'));
