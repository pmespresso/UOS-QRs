
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
  const [checkAddressResult, setCheckAddressResult] = useState();
  const [addressToCheck, setAddresstoCheck] = useState();

  const handleCheckAddress = () => {
    const result = checkAddress(addressToCheck, 2);
    console.log(result);
    setCheckAddressResult(result);
  }

  const handleChangeAddressToCheck = ({ target: { value }}: React.ChangeEvent<HTMLInputElement>) => {
    setAddresstoCheck(value);
  }

  return (
    <Container>
      <Header>UOS Testing QRs</Header>
      <Grid.Row>
        Check Address: <Input onChange={handleChangeAddressToCheck} value={addressToCheck} />
        <Button onClick={handleCheckAddress}>Check</Button>
        Result: {checkAddressResult && checkAddressResult[0]}
      </Grid.Row>
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
