import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from './styles/globalStyles';
import { LoadingProvider, TemperatureProvider } from './utils/context';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        {process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_MODE : process.env.REACT_APP_PRO_MODE}
        <BrowserRouter>
            <LoadingProvider>
                <TemperatureProvider>
                    <GlobalStyles />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
                    <link href="https://fonts.googleapis.com/css2?family=Ysabeau+Infant:wght@600&display=swap" rel="stylesheet" />
                    <App />
                </TemperatureProvider>
            </LoadingProvider>
        </BrowserRouter>
    </React.StrictMode>
);
