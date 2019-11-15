import React from 'react';
import { Provider } from 'react-redux';
import App from './app'
import configureStore from '../store/store';


const store = configureStore;

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default Root;