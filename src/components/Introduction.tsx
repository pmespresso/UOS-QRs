
import React from 'react';

import { QrDisplayAddress } from '@polkadot/react-qr';

const KUSAMA_ADDRESS = 'FF42iLDmp7JLeySMjwWWtYQqfycJvsJFBYrySoMvtGfvAGs';
const GENESIS_HASH = '0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636';

export function SubstrateIntroduction() {
  return (
    <div style={{ flex: 1, padding: '40px' }}>
      <h3>Substrate UOS Address</h3>
      <b>Address: </b><p> {KUSAMA_ADDRESS} </p>
      <QrDisplayAddress
        address={KUSAMA_ADDRESS}
        genesisHash={GENESIS_HASH}
        style={{ width: '300px', height: '300px' }} />
    </div>
  )
}