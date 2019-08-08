
import React, { useState } from 'react';

import { SignerPayload } from '@polkadot/api/types';
import { createType, GenericCall } from '@polkadot/types'; 
import { decodeAddress, checkAddress, encodeAddress } from '@polkadot/util-crypto';

import { QrDisplayAddress, QrDisplayPayload } from './react-qr/src';
import './App.css';

const KUSAMA_ADDRESS = 'FJaco77EJ99VtBmVFibuBJR3x5Qq9KQrgQJvWjqScCcCCae';
console.log('check addresss is kusama: ', checkAddress(KUSAMA_ADDRESS, 2));

const App: React.FC = () => {
  const [decodePlease, setDecodePlease] = useState(KUSAMA_ADDRESS);
  const [payload, setPayload] = useState('THIS IS SPARTA!');
  const signerPayload = {
    address: KUSAMA_ADDRESS,
    blockHash: '0xde8f69eeb5e065e18c6950ff708d7e551f68dc9bf59a07c52367c0280f805ec7',
    blockNumber: '0x0000000000231d30',
    era: '0x0703',
    genesisHash: '0xdcd1346701ca8396496e52aa2785b1748deb6db09551b72159dcb3e08991025b',
    method: '0x0500ffd7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9e56c',
    nonce: '0x0000000000001234',
    tip: '0x00000000000000000000000000005678',
    version: 2
  };

  const handleChangePayload = ({ target: { value }}: React.ChangeEvent<HTMLInputElement>) => {
    setPayload(value);
  }

  const handleDecodePlease = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setDecodePlease(value);
  }

  return (
    <React.Fragment>
      <h1>UOS Testing QRs</h1>
      <div style={{ display: 'flex column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ flex: 1, padding: '40px' }}>
          <h3>Substrate UOS Message</h3>
          <b>Address: </b><p> {KUSAMA_ADDRESS} </p>
          <b>Public Key - decodeAddress(KUSAMA_ADDRESS, false, 2):</b><p>{decodeAddress(KUSAMA_ADDRESS, false, 2)}</p>
          <b>Encode Back to Kusama ss58 - encodeAddress(decodeAddress(KUSAMA_ADDRESS), 2):</b><p>{encodeAddress(decodeAddress(KUSAMA_ADDRESS), 2)}</p>
          <b>Message: </b><input onChange={handleChangePayload} type='text' value={payload}></input>
          <QrDisplayPayload
            address={KUSAMA_ADDRESS}
            cmd={new Uint8Array([0x03])}
            payload={new TextEncoder().encode(payload)}
            style={{ width: '300px', height: '300px' }} />

          <div>Decode to Public Key Please: <input onChange={handleDecodePlease} style={{ width: '100%' }} type='text' value={decodePlease}></input></div>
          <div>Public Key: {decodeAddress(decodePlease)} </div>
        </div>
        <div style={{ flex: 1, padding: '40px' }}>
          <h3>Substrate UOS Address</h3>
          <b>Address: </b><p> { KUSAMA_ADDRESS } </p>
          <QrDisplayAddress
            address={KUSAMA_ADDRESS}
            style={{ width: '300px', height: '300px' }} />
        </div>
      </div>
      <div style={{ flex: 1, padding: '40px' }}>
        <h3>Substrate UOS Payload</h3>
        <b>Address: </b><p> {KUSAMA_ADDRESS} </p>
        <b>Payload: </b>
        <div>
          {
          }
        </div>
        <QrDisplayPayload
          address={KUSAMA_ADDRESS}
          cmd={new Uint8Array([0x01])}
          payload={new TextEncoder().encode(payload)}
          style={{ width: '300px', height: '300px' }} />
      </div>
    </React.Fragment>
  );
}

export default App;
