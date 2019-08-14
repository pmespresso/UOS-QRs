
import extrinsics from '@polkadot/api-metadata/extrinsics/static';
import { createType, GenericCall, GenericExtrinsicPayload } from '@polkadot/types'; 
import { blake2AsU8a, cryptoWaitReady } from '@polkadot/util-crypto';
import React, { useEffect, useState } from 'react';
import { Container, Divider } from 'semantic-ui-react';

import { QrDisplayPayload } from '@polkadot/react-qr';

const KUSAMA_ADDRESS = 'FF42iLDmp7JLeySMjwWWtYQqfycJvsJFBYrySoMvtGfvAGs';
const TEST = {
  address: '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFabHE',
  blockHash: '0xde8f69eeb5e065e18c6950ff708d7e551f68dc9bf59a07c52367c0280f805ec7',
  blockNumber: '0x00231d30',
  era: '0x0703',
  genesisHash: '0xdcd1346701ca8396496e52aa2785b1748deb6db09551b72159dcb3e08991025b',
  method: '0x0500ffd7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9e56c',
  nonce: '0x00001234',
  tip: '0x00000000000000000000000000005678',
  version: 2
};

export function SignerPayloadComponent() {
  // const [oversizedPayload, setOversizedPayload] = useState();
  const [payload, setPayload] = useState();
  const [payloadHash, setPayloadHash] = useState();

  useEffect(() => {
    GenericCall.injectMethods(extrinsics);

    const payload = new GenericExtrinsicPayload(TEST, { version: 3 });

    const payloadHash = blake2AsU8a(payload.toU8a());

    setPayload(payload);
    setPayloadHash(payloadHash);
  }, []);

  return (
    <Container>
      <h1>Substrate Regular Payload</h1>
      <b>Address: </b><p> {KUSAMA_ADDRESS} </p>
      <b>Payload JSON: </b><p style={{ overflow: 'auto' }}>{payload && payload.toJSON()}</p>
      <b>Payload SCALE U8A: </b><p style={{ overflow: 'auto' }}>{payload && payload.toU8a()}</p>
      <b> Payload Size? </b><p>{ payload && payload.toU8a().length }</p>
      {
        payload &&
          <QrDisplayPayload
            address={KUSAMA_ADDRESS}
            cmd={0} // sign payload
            payload={payload.toU8a()}
            style={{ width: '300px', height: '300px' }} />
      }


      <Divider />

      <h1>Payload Blake2 Hashed: </h1><p style={{ overflow: 'auto' }}>{payloadHash}</p>
      {
        payloadHash &&
          <QrDisplayPayload
            address={KUSAMA_ADDRESS}
            cmd={1} // sign payload hash
            payload={payloadHash}
            style={{ width: '300px', height: '300px' }} />
      }

      <Divider />
    </Container>
  )
}

/*
isSr25519(type)
    ? schnorrkelSign(message, pair)
    : naclSign(message, pair);
*/

// payload && schnorrkelSign(createType('ExtrinsicPayload', payload, { version: payload.version }).toU8a(), schnorrkelKeypairFromSeed(new TextEncoder().encode('this is sparta')))

{/* <h1>Oversized Payload: </h1>
  <b>Payload JSON: </b> <p style={{ overflow: 'auto' }}>{oversizedPayload && oversizedPayload.toString()}</p>
  <b>Payload SCALE U8A: </b> <p style={{ overflow: 'auto' }}>{oversizedPayload && oversizedPayload.toU8a()}</p>
  <b>Payload Size? </b> <p>{oversizedPayload && oversizedPayload.toU8a().length}</p>
      {
  oversizedPayload &&
    <QrDisplayPayload
      address={KUSAMA_ADDRESS}
      cmd={new Uint8Array([0x00])} // sign payload
      payload={oversizedPayload}
      style={{ width: '300px', height: '300px' }} />
} */}