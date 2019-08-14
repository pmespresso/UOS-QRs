
import extrinsics from '@polkadot/api-metadata/extrinsics/static';
import { GenericCall, GenericExtrinsicPayload } from '@polkadot/types';
import { blake2AsU8a } from '@polkadot/util-crypto';
import React, { useEffect, useState } from 'react';
import { Container, Divider } from 'semantic-ui-react';

import { QrDisplayPayload } from './react-qr/src';

const KUSAMA_ADDRESS = 'FF42iLDmp7JLeySMjwWWtYQqfycJvsJFBYrySoMvtGfvAGs';
// const PART_1 = {
//   address: '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFabHE',
//   blockHash: '0xde8f69eeb5e065e18c6950ff708d7e551f68dc9bf59a07c52367c0280f805ec7',
//   blockNumber: '0x00231d30',
//   era: '0x0703',
//   genesisHash: '0xdcd1346701ca8396496e52aa2785b1748deb6db09551b72159dcb3e08991025b',
//   method: '0x0500ffd7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9e56c',
//   nonce: '0x00001234',
//   tip: '0x00000000000000000000000000005678',
//   version: 2
// };

const putCodeCallIndex = [15, 1]
// const putCodeParams = [gas, wasmBytes];

export function SignerPayloadComponent() {
  // const [oversizedPayload, setOversizedPayload] = useState();
  const [payload, setPayload] = useState();
  const [payloadHash, setPayloadHash] = useState();

  useEffect(() => {
    GenericCall.injectMethods(extrinsics);

    // const part1 = new GenericExtrinsicPayload(PART_1, { version: 3 });
    // const part2 = new GenericExtrinsicPayload(PART_2, { version: 3 });
    // const part3 = new GenericExtrinsicPayload(PART_3, { version: 3 });

    const payloadHash = blake2AsU8a(payload.toU8a());

    setPayload(payload);
    setPayloadHash(payloadHash);
  }, []);

  return (
    <Container>
      <h1>Substrate Multipart Payload</h1>

      <Divider />
    </Container>
  )
}