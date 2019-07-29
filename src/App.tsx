
import React, { useState } from 'react';

import { QrDisplayAddress, QrDisplayPayload } from './ui-qr/src';

import './legacy.png';
import './App.css';

const App: React.FC = () => {
  const [payload, setPayload] = useState('THIS IS SPARTA!');

  const handleChangePayload = ({ target: { value }}: React.ChangeEvent<HTMLInputElement>) => {
    setPayload(value);
  }

  return (
    <React.Fragment>
      <h1>UOS Testing QRs</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1, margin: '10px' }}>
          <h3>Substrate UOS Address</h3>
          <label>Address: </label><p> 5HbgaJEuVN5qGbkhgtuDQANivSWwHXWsC2erP1SQUXgciTVq </p>
          <QrDisplayAddress
            address={'5HbgaJEuVN5qGbkhgtuDQANivSWwHXWsC2erP1SQUXgciTVq'}
            style={{ width: '300px', height: '300px' }} />
        </div>

        <div style={{ flex: 1, margin: '10px' }}>
          <h3>Substrate UOS Payload</h3>
          <label>Address: </label><p> 5HbgaJEuVN5qGbkhgtuDQANivSWwHXWsC2erP1SQUXgciTVq </p>
          <label>Payload: </label><input onChange={handleChangePayload} type='text' value={payload}></input>
          <QrDisplayPayload
              address={'5HbgaJEuVN5qGbkhgtuDQANivSWwHXWsC2erP1SQUXgciTVq'}
              payload={new TextEncoder().encode(payload)}
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
