import { decodeAddress, checkAddress, encodeAddress } from '@polkadot/util-crypto';
import React, { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';

import { QrDisplayPayload } from './react-qr/src';

const KUSAMA_ADDRESS = 'FF42iLDmp7JLeySMjwWWtYQqfycJvsJFBYrySoMvtGfvAGs';

export function SubstrateUOSMessage () {
  const [decodePlease, setDecodePlease] = useState(KUSAMA_ADDRESS);

  const [payload, setPayload] = useState('THIS IS SPARTA!');

  const handleChangePayload = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setPayload(value);
  }

  const handleDecodePlease = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setDecodePlease(value);
  }

  return (
    <Container>
      <h3>Substrate UOS Message</h3>
      <b>Address: </b><p> {KUSAMA_ADDRESS} </p>
      <b>Public Key - decodeAddress(KUSAMA_ADDRESS, false, 2):</b><p>{decodeAddress(KUSAMA_ADDRESS, false, 2)}</p>
      <b>Encode Back to Kusama ss58 - encodeAddress(decodeAddress(KUSAMA_ADDRESS), 2):</b><p>{encodeAddress(decodeAddress(KUSAMA_ADDRESS), 2)}</p>
      <b>Encode Substrate ss58 - encodeAddress(decodeAddress(KUSAMA_ADDRESS), 42):</b><p>{encodeAddress(decodeAddress(KUSAMA_ADDRESS), 42)}</p>
      <b>Message: </b><input onChange={handleChangePayload} type='text' value={payload}></input>
      <QrDisplayPayload
        address={KUSAMA_ADDRESS}
        cmd={new Uint8Array([0x03])}
        payload={new TextEncoder().encode(payload)}
        style={{ width: '300px', height: '300px' }} />

      <div>Decode to Public Key Please: <input onChange={handleDecodePlease} style={{ width: '100%' }} type='text' value={decodePlease}></input></div>
      <div>Public Key: {decodeAddress(decodePlease)} </div>
    </Container>
  )
}