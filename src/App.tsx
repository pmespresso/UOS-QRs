
import React from 'react';

import { QrDisplayAddress, QrDisplayPayload } from './ui-qr/src';

import './legacy.png';
import './App.css';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <h1>UOS Testing QRs</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1, margin: '10px' }}>
          <h3>Substrate UOS Address</h3>
          <QrDisplayAddress
            address={'5HbgaJEuVN5qGbkhgtuDQANivSWwHXWsC2erP1SQUXgciTVq'}
            style={{ width: '300px', height: '300px' }} />
        </div>

        <div style={{ flex: 1, margin: '10px' }}>
          <h3>Substrate UOS Payload</h3>
          <QrDisplayPayload
            address={'5HbgaJEuVN5qGbkhgtuDQANivSWwHXWsC2erP1SQUXgciTVq'}
            payload={new TextEncoder().encode('Subliminal Text Message')}
            style={{ width: '300px', height: '300px' }} />
        </div>

        <div style={{ flex: 1, margin: '10px' }}>
          <h3>Ethereum UOS</h3>
          hmmmmm.....
        </div>

        <div style={{ flex: 1, margin: '10px' }}>
          <h3>Ethereum Legacy</h3>
          <img src='legacy.png' alt='legacy' />
        </div>
      </div>
      
    </React.Fragment>
  );
}

export default App;
