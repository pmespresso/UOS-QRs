import React, { useState } from 'react';
import { Container, Divider, Input, Grid, Header, Button } from 'semantic-ui-react';

import ScanAddress from './react-qr/src/ScanAddress';
import ScanSignature from './react-qr/src/ScanSignature';

export function Scanners () {
    const [shouldScanAddress, setShouldScanAddress] = useState(true);

    const toggleShouldScanAddress = (event: React.MouseEvent<HTMLElement>) => {
      console.log(event);
      setShouldScanAddress(!shouldScanAddress);
    }

    const onScanAddress = (event: any) => {
        console.log(event);
        debugger;
    }

    const onScanSignature = (event: any) => {
        console.log(event);
        debugger;
    }
    
    const onErrorAddress = (error: any) => {
        console.log(error);
        debugger;
    }

    const onErrorSignature = (error: any) => {
        console.log(error);
        debugger;
    }

    return (
    <Grid>
        <Grid.Row><Button onClick={toggleShouldScanAddress}>{shouldScanAddress ? 'Scan Signature' : 'Scan Address'}</Button></Grid.Row>
        <Grid.Row>
        {
            shouldScanAddress
                ? (
                    <Grid.Column width='5'>
                        <Header>Scan Address</Header>
                        <ScanAddress onScan={onScanAddress} onError={onErrorAddress} />
                    </Grid.Column>
                )
                : (
                    <Grid.Column width='5'>
                        <Header> Scan Payload Signature </Header>
                        <ScanSignature onScan={onScanSignature} onError={onErrorSignature} />
                    </Grid.Column>
                )
        }
        </Grid.Row>
    </Grid>
    )
}