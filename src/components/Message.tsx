import { decodeAddress, encodeAddress } from '@polkadot/util-crypto';
import React, { useState } from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';

import { QrDisplayPayload } from '@polkadot/react-qr';

const OVERSIZED_MSG = 'So, so you think you can tell Heaven from hell Blue skies from pain Can you tell a green fieldFrom a cold steel rail ? A smile from a veil ?  Do you think you can tell ? Did they get you to trad Your heroes for ghosts ? Hot ashes for trees ? Hot air for a cool breeze ? Cold comfort for change ? Did you exchange A walk on part in the war For a lead role in a cage ?';
const OVERSIZED_MSG_BYTES = new TextEncoder().encode(OVERSIZED_MSG);

interface Props {
  address: string
}

export function SubstrateUOSMessage (props: Props) {
  const { address } = props;
  const [decodePlease, setDecodePlease] = useState(address);
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
      <Header>Address: </Header><p> {address} </p>
      <Header>Public Key - decodeAddress(address, false, 2):</Header><p>{decodeAddress(address, false, 2)}</p>
      <Header>Encode Back to Kusama ss58 - encodeAddress(decodeAddress(address), 2):</Header><p>{encodeAddress(decodeAddress(address), 2)}</p>
      <Header>Encode Substrate ss58 - encodeAddress(decodeAddress(address), 42):</Header><p>{encodeAddress(decodeAddress(address), 42)}</p>
      <Header>Message: </Header><input onChange={handleChangePayload} type='text' value={payload}></input>
      <QrDisplayPayload
        address={address}
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
        address={address}
        cmd={3}
        payload={OVERSIZED_MSG_BYTES}
        style={{ width: '300px', height: '300px' }}
      />
    </Container>
  )
}