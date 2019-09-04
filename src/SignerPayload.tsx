
import { createType, GenericExtrinsicPayload } from '@polkadot/types'; 
import { blake2AsU8a, cryptoWaitReady } from '@polkadot/util-crypto';
import React, { useEffect, useState } from 'react';
import { Container, Divider, Input } from 'semantic-ui-react';

import { QrDisplayPayload } from '@polkadot/react-qr';

import { UPLOAD_CONTRACT } from './contract';
import Call from '@polkadot/types/primitive/Generic/Call';

const TEST_KUSAMA = {
  address: '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFabHE', // kusama address
  blockHash: '0xde8f69eeb5e065e18c6950ff708d7e551f68dc9bf59a07c52367c0280f805ec7',
  era: '0x0703',
  genesisHash: '0x3fd7b9eb6a00376e5be61f01abb429ffb0b104be05eaff4d458da48fcd425baf',
  method: '0x0500ffd7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9e56c',
  nonce: '0x00001234',
  specVersion: 123,
  tip: '0x00000000000000000000000000005678'
};

const TEST_POLKADOT = {
  ...TEST_KUSAMA,
  address: '5G7P1adRqYJQoALaY3Ar3wkgWjhPeirvnLfDTMpjn5Xrr2ZB',
  genesisHash: '0xe4e7807c233645b910c8db58e99ed53dc71fbfff5bbe8a5534fb7e83db449210'
}

const TEST_WRONG_GENESIS_HASH = {
  ...TEST_KUSAMA,
  genesisHash: '0xe4e7807c233645b91338db22e99ed53dc71fbfff5bbe8a5534fb7e83db449210'
}

interface Props {
  address: string
}

export function SignerPayloadComponent(props: Props) {
  const { address } = props;

  const [call, setCall] = useState();
  const [oversizedPayload, setOversizedPayload] = useState();
  const [oversizedPayloadHash, setOversizedPayloadHash] = useState();
  const [kusamaPayload, setKusamaPayload] = useState();
  const [polkadevPayload, setPolkadevPayload] = useState();
  const [payloadHash, setPayloadHash] = useState();

  useEffect(() => {

    const OVERSIZED = {
      ...TEST_KUSAMA,
      method: UPLOAD_CONTRACT
    }

    const kusamaPayload = new GenericExtrinsicPayload(TEST_KUSAMA, { version: 3 });
    const wrongGenesisHash = new GenericExtrinsicPayload(TEST_WRONG_GENESIS_HASH, { version: 3 });
    const oversizedPayload = new GenericExtrinsicPayload(OVERSIZED,  { version: 3 });
    const oversizedPayloadHash = blake2AsU8a(oversizedPayload.toU8a());
    const payloadHash = blake2AsU8a(kusamaPayload.toU8a());
    const call = new Call('0x0500ffd7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9e56c');

    setKusamaPayload(kusamaPayload);
    setPayloadHash(payloadHash);
    setPolkadevPayload(wrongGenesisHash)
    setOversizedPayload(oversizedPayload);
    setOversizedPayloadHash(oversizedPayloadHash);
    setCall(call);
  }, []);

  return (
    <Container>
      <h1>Kusama Mortal Payload</h1>
      <b>Address: </b><p> {address} </p>
      <b>Payload JSON: </b><p style={{ overflow: 'auto' }}>{kusamaPayload && kusamaPayload.toJSON()}</p>
      <b>Payload SCALE U8A: </b><p style={{ overflow: 'auto' }}>{kusamaPayload && kusamaPayload.toU8a()}</p>
      <b> Payload Size? </b><p>{ kusamaPayload && kusamaPayload.toU8a().length }</p>
      {
        kusamaPayload &&
          <QrDisplayPayload
            address={address}
            cmd={2} // sign payload
            payload={kusamaPayload.toU8a()}
            style={{ width: '300px', height: '300px' }} />
      }
      <p>Call: </p>{call && JSON.stringify(call.toJSON())}

      <Divider />
      <h1>Wrong Genesis Hash Payload</h1>
      <b>Address: </b><p> {address} </p>
      <b>Payload JSON: </b><p style={{ overflow: 'auto' }}>{polkadevPayload && polkadevPayload.toJSON()}</p>
      <b>Payload SCALE U8A: </b><p style={{ overflow: 'auto' }}>{polkadevPayload && polkadevPayload.toU8a()}</p>
      <b> Payload Size? </b><p>{ polkadevPayload && polkadevPayload.toU8a().length }</p>
      {
        polkadevPayload &&
          <QrDisplayPayload
            address={address}
            cmd={2} // sign payload
            payload={polkadevPayload.toU8a()}
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