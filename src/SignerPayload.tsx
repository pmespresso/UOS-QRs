
import SignerPayload from '@polkadot/api/SignerPayload';
import extrinsics from '@polkadot/api-metadata/extrinsics/static';
import { ClassOf, createType, GenericCall, Struct, u8 } from '@polkadot/types'; 
import React, { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';

import { QrDisplayPayload } from './react-qr/src';

const KUSAMA_ADDRESS = 'FF42iLDmp7JLeySMjwWWtYQqfycJvsJFBYrySoMvtGfvAGs';

export function SignerPayloadComponent() {
  const [payload, setPayload] = useState();

  useEffect(() => {
    GenericCall.injectMethods(extrinsics);
    const payload = new Struct({
      address: ClassOf('Address'),
      blockHash: ClassOf('Hash'),
      blockNumber: ClassOf('BlockNumber'),
      era: ClassOf('ExtrinsicEra'),
      genesisHash: ClassOf('Hash'),
      method: ClassOf('Call'),
      nonce: ClassOf('Compact<Index>'),
      tip: ClassOf('Compact<Balance>'),
      version: u8
    }, {
      address: KUSAMA_ADDRESS,
      blockHash: '0xde8f69eeb5e065e18c6950ff708d7e551f68dc9bf59a07c52367c0280f805ec7',
      blockNumber: '0x231d30',
      era: createType('ExtrinsicEra', { current: 2301232, period: 200 }),
      genesisHash: '0xdcd1346701ca8396496e52aa2785b1748deb6db09551b72159dcb3e08991025b',
      method: createType('Call', '0x0500ffd7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9e56c'),
      nonce: 0x1234,
      tip: 0x5678,
      version: 2
    });

    setPayload(payload);
  }, []);

  return (
    <Container>
      <h3>Substrate UOS Payload</h3>
      <b>Address: </b><p> {KUSAMA_ADDRESS} </p>
      <b>Payload JSON: </b><p style={{ overflow: 'auto' }}>{payload && payload.toString()}</p>
      <b>Payload SCALE U8A: </b><p style={{ overflow: 'auto' }}>{payload && payload.toU8a()}</p>
      {
        payload &&
          <QrDisplayPayload
            address={KUSAMA_ADDRESS}
            cmd={new Uint8Array([0x01])}
            payload={payload.toU8a()}
            style={{ width: '300px', height: '300px' }} />
      }
    </Container>
  )
}