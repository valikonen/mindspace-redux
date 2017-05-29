import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';

import actions from './actions';
import store from './reducers';

import App from './components/App';



// store.subscribe( () => {
//     console.log('Store updated: ', store.getState());
// });





render(<Provider store={store}> 
            <App />
        </Provider>, document.querySelector('#app'));
