
import React from 'react';

import { QrDisplayAddress } from './react-qr/src';

const KUSAMA_ADDRESS = 'FF42iLDmp7JLeySMjwWWtYQqfycJvsJFBYrySoMvtGfvAGs';

export function SubstrateIntroduction() {
  return (
    <div style={{ flex: 1, padding: '40px' }}>
      <h3>Substrate UOS Address</h3>
      <b>Address: </b><p> {KUSAMA_ADDRESS} </p>
      <QrDisplayAddress
        address={KUSAMA_ADDRESS}
        style={{ width: '300px', height: '300px' }} />
    </div>
  )
}