import App from 'App';
import ThemeObject from 'Theme';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'styles/index.scss';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeObject>
                <App />
            </ThemeObject>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
