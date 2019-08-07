
import React, { useState } from 'react';

import { QrDisplayAddress, QrDisplayPayload } from './react-qr/src';
import { SignerPayload } from '@polkadot/api/types';
import { createType, GenericCall } from '@polkadot/types'; 

import './App.css';

const App: React.FC = () => {
  const [payload, setPayload] = useState('THIS IS SPARTA!');
  // const signerPayload = new SignerPayload({
  //   address: '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFabHE',
  //   blockHash: '0xde8f69eeb5e065e18c6950ff708d7e551f68dc9bf59a07c52367c0280f805ec7',
  //   blockNumber: '0x231d30',
  //   era: createType('ExtrinsicEra', { current: 2301232, period: 200 }),
  //   genesisHash: '0xdcd1346701ca8396496e52aa2785b1748deb6db09551b72159dcb3e08991025b',
  //   method: createType('Call', '0x0500ffd7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9e56c'),
  //   nonce: 0x1234,
  //   tip: 0x5678,
  //   version: 2
  // }).toPayload();


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
          <h3>Substrate UOS Message</h3>
          <label>Address: </label><p> 5HbgaJEuVN5qGbkhgtuDQANivSWwHXWsC2erP1SQUXgciTVq </p>
          <label>Message: </label><input onChange={handleChangePayload} type='text' value={payload}></input>
          <QrDisplayPayload
              address={'5HbgaJEuVN5qGbkhgtuDQANivSWwHXWsC2erP1SQUXgciTVq'}
              cmd={new Uint8Array([0x03])}
              payload={new TextEncoder().encode(payload)}
              style={{ width: '300px', height: '300px' }} />
        </div>
      </div>
      <div style={{ flex: 1, margin: '10px' }}>
        <h3>Substrate UOS Payload</h3>
        <label>Address: </label><p> 5HbgaJEuVN5qGbkhgtuDQANivSWwHXWsC2erP1SQUXgciTVq </p>
        <label>Payload: </label>
        <div>
          {
          }
        </div>
        <QrDisplayPayload
          address={'5HbgaJEuVN5qGbkhgtuDQANivSWwHXWsC2erP1SQUXgciTVq'}
          cmd={new Uint8Array([0x01])}
          payload={new TextEncoder().encode(payload)}
          style={{ width: '300px', height: '300px' }} />
      </div>
    </React.Fragment>
  );
}

export default App;
