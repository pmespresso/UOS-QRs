import { decodeAddress, encodeAddress } from '@polkadot/util-crypto';
import React, { useState } from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';

import { QrDisplayPayload } from '@polkadot/react-qr';

const KUSAMA_ADDRESS = 'FF42iLDmp7JLeySMjwWWtYQqfycJvsJFBYrySoMvtGfvAGs';

const OVERSIZED_MSG = 'So, so you think you can tell Heaven from hell Blue skies from pain Can you tell a green fieldFrom a cold steel rail ? A smile from a veil ?  Do you think you can tell ? Did they get you to trad Your heroes for ghosts ? Hot ashes for trees ? Hot air for a cool breeze ? Cold comfort for change ? Did you exchange A walk on part in the war For a lead role in a cage ?';
const OVERSIZED_MSG_BYTES = new TextEncoder().encode(OVERSIZED_MSG);
console.log(OVERSIZED_MSG_BYTES.slice(0, 90))
console.log(OVERSIZED_MSG_BYTES.slice(90, 190))
console.log(OVERSIZED_MSG_BYTES.slice(190, 290))
console.log(OVERSIZED_MSG_BYTES.slice(290))

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
      <Header>Address: </Header><p> {KUSAMA_ADDRESS} </p>
      <Header>Public Key - decodeAddress(KUSAMA_ADDRESS, false, 2):</Header><p>{decodeAddress(KUSAMA_ADDRESS, false, 2)}</p>
      <Header>Encode Back to Kusama ss58 - encodeAddress(decodeAddress(KUSAMA_ADDRESS), 2):</Header><p>{encodeAddress(decodeAddress(KUSAMA_ADDRESS), 2)}</p>
      <Header>Encode Substrate ss58 - encodeAddress(decodeAddress(KUSAMA_ADDRESS), 42):</Header><p>{encodeAddress(decodeAddress(KUSAMA_ADDRESS), 42)}</p>
      <Header>Message: </Header><input onChange={handleChangePayload} type='text' value={payload}></input>
      <QrDisplayPayload
        address={KUSAMA_ADDRESS}
        cmd={3}
        payload={new TextEncoder().encode(payload)}
        style={{ width: '300px', height: '300px' }} />

      <div>Decode to Public Key Please: <input onChange={handleDecodePlease} style={{ width: '100%' }} type='text' value={decodePlease}></input></div>
      <div>Public Key: {decodeAddress(decodePlease)} </div>

      <Divider />

      <h1>Oversized Message Payload</h1>
      <Header>Message: </Header> { OVERSIZED_MSG }
      <Header>As Bytes: </Header> <div style={{ overflow: 'auto' }}>{OVERSIZED_MSG_BYTES}</div>
      <Header>Payload size: </Header> { OVERSIZED_MSG_BYTES.length }
      <QrDisplayPayload
        address={KUSAMA_ADDRESS}
        cmd={3}
        payload={OVERSIZED_MSG_BYTES}
        style={{ width: '300px', height: '300px' }}
      />
    </Container>
  )
}