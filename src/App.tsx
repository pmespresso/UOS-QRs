
import { checkAddress, cryptoWaitReady } from '@polkadot/util-crypto';
import React, { useState } from 'react';
import { Button, Container, Divider, Input, Grid, Header } from 'semantic-ui-react';

import './App.css';
import { SignerPayloadComponent } from './SignerPayload';
import { SubstrateIntroduction } from './Introduction';
import { SubstrateUOSMessage } from './Message';

const KUSAMA_ADDRESS = 'FF42iLDmp7JLeySMjwWWtYQqfycJvsJFBYrySoMvtGfvAGs';
console.log('check addresss is kusama: ', checkAddress(KUSAMA_ADDRESS, 2));

const App: React.FC = () => {
  const [address, setAddresstoCheck] = useState(KUSAMA_ADDRESS);

  const handleSetAddress = ({ target: { value }}: React.ChangeEvent<HTMLInputElement>) => {
    setAddresstoCheck(value);
  }

  return (
    <Container>
      <Header>UOS Testing QRs</Header>
      <Grid.Row>
        Set Address: <Input onChange={handleSetAddress} value={address} />
      </Grid.Row>
      <Grid width='12'>
        <Grid.Row>
          <Grid.Column width='9'>
            <SubstrateUOSMessage address={address} />
          </Grid.Column>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid.Column width='9'>
            <SignerPayloadComponent address={address} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default App;
