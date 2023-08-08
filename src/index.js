import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { Button } from './App';
// import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BootstrapTest } from './BootstrapTest';


// const BigButton=styled(Button)`
// margin: 0 auto;
// width: 245px;
// text-align: center;
// `;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App />
        {/* <BigButton as='a'>click me</BigButton>
        <BootstrapTest/> */}
    </StrictMode>
);


