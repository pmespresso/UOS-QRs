
import { mnemonicGenerate } from '@polkadot/util-crypto';
import React, { useState } from 'react';
import { Container, Divider, Input, Grid, Header, Button } from 'semantic-ui-react';

import { SignerPayloadComponent } from './SignerPayload';
import { SubstrateIntroduction } from './Introduction';
import { SubstrateUOSMessage } from './Message';
import { SubstrateMultipart } from './Multipart';

const KUSAMA_ADDRESS = 'FF42iLDmp7JLeySMjwWWtYQqfycJvsJFBYrySoMvtGfvAGs';
// const POLKADOT_ADDRESS = ;
export function Displays () {
    const [address, setAddresstoCheck] = useState(KUSAMA_ADDRESS);

    const handleSetAddress = ({ target: { value }}: React.ChangeEvent<HTMLInputElement>) => {
        setAddresstoCheck(value);
    }
    
    return (
        <React.Fragment>
            <Header>UOS Testing QRs</Header>
            <Grid.Row>
            Set Address: <Input onChange={handleSetAddress} value={address} />
            </Grid.Row>
            <Grid.Row><SubstrateMultipart /></Grid.Row>
            {/* <Grid.Row>
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
            </Grid> */}
        </React.Fragment>
    )
}