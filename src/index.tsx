import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer } from 'miragejs';
 
createServer({
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => [
      { id: 1, 
        title: 'App',
        amount: 1000,
        type: 'deposit',
        category: 'Food',
        date: new Date()
      },
      { id: 2, 
        title: 'Aluguel',
        amount: 400,
        type: 'deposit',
        category: 'Food',
        date: new Date()
      },
    ]);
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

 