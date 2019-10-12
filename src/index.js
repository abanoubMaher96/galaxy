import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducer';

const store = createStore(reducer);

ReactDom.render( 
    <Provider store={store} >
        <App/>
    </Provider>, 
    document.getElementById('root') )


serviceWorker.unregister();
