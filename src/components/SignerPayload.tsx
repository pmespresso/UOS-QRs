
import extrinsics from '@polkadot/api-metadata/extrinsics/static';
import { createType, GenericCall, GenericExtrinsicPayload } from '@polkadot/types'; 
import { blake2AsU8a, cryptoWaitReady } from '@polkadot/util-crypto';
import React, { useEffect, useState } from 'react';
import { Container, Divider, Input } from 'semantic-ui-react';

import { QrDisplayPayload } from '@polkadot/react-qr';

import { UPLOAD_CONTRACT } from '../contract';

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

interface Props {
  address: string
}

export function SignerPayloadComponent(props: Props) {
  const { address } = props;

  const [oversizedPayload, setOversizedPayload] = useState();
  const [oversizedPayloadHash, setOversizedPayloadHash] = useState();
  const [payload, setPayload] = useState();
  const [payloadHash, setPayloadHash] = useState();

  useEffect(() => {
    GenericCall.injectMethods(extrinsics);

    const OVERSIZED = {
      ...TEST,
      method: UPLOAD_CONTRACT
    }

    console.log(OVERSIZED);

    const payload = new GenericExtrinsicPayload(TEST, { version: 3 });
    const oversizedPayload = new GenericExtrinsicPayload(OVERSIZED,  { version: 3 });

    console.log(oversizedPayload);
    const oversizedPayloadHash = blake2AsU8a(oversizedPayload.toU8a());
    const payloadHash = blake2AsU8a(payload.toU8a());

    setPayload(payload);
    setPayloadHash(payloadHash);
    setOversizedPayload(oversizedPayload);
    setOversizedPayloadHash(oversizedPayloadHash);
  }, []);

  return (
    <Container>
      <h1>Substrate Regular Payload</h1>
      <b>Address: </b><p> {address} </p>
      <b>Payload JSON: </b><p style={{ overflow: 'auto' }}>{payload && payload.toJSON()}</p>
      <b>Payload SCALE U8A: </b><p style={{ overflow: 'auto' }}>{payload && payload.toU8a()}</p>
      <b> Payload Size? </b><p>{ payload && payload.toU8a().length }</p>
      {
        payload &&
          <QrDisplayPayload
            address={address}
            cmd={0} // sign payload
            payload={payload.toU8a()}
            style={{ width: '300px', height: '300px' }} />
      }

      <Divider />

      <h1>Payload Blake2 Hashed: </h1><p style={{ overflow: 'auto' }}>{payloadHash}</p>
      {
        payloadHash &&
          <QrDisplayPayload
            address={address}
            cmd={1} // sign payload hash
            payload={payloadHash}
            style={{ width: '300px', height: '300px' }} />
      }

      <Divider />

      <Divider />

      <h1>Oversized Payload Blake2 Hashed: </h1><p style={{ overflow: 'auto' }}>{oversizedPayloadHash}</p>
      {
        oversizedPayloadHash &&
          <QrDisplayPayload
            address={address}
            cmd={1} // sign payload hash
            payload={oversizedPayloadHash}
            style={{ width: '300px', height: '300px' }} />
      }

    </Container>
  )
}