
import { checkAddress } from '@polkadot/util-crypto';
import React from 'react';
import { Container, Divider, Grid, Header } from 'semantic-ui-react';

import './App.css';
import { SignerPayloadComponent } from './SignerPayload';
import { SubstrateIntroduction } from './Introduction';
import { SubstrateUOSMessage } from './Message';

const KUSAMA_ADDRESS = 'FF42iLDmp7JLeySMjwWWtYQqfycJvsJFBYrySoMvtGfvAGs';
console.log('check addresss is kusama: ', checkAddress(KUSAMA_ADDRESS, 2));

const App: React.FC = () => {
  return (
    <Container>
      <Header>UOS Testing QRs</Header>
      <Grid width='12'>
        <Grid.Row>
          <Grid.Column width='9'>
            <SubstrateUOSMessage />
          </Grid.Column>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid.Column width='9'>
            <SignerPayloadComponent />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default App;
