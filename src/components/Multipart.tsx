
import extrinsics from '@polkadot/api-metadata/extrinsics/static';
import { QrDisplayPayload } from '@polkadot/react-qr';
import { GenericCall, GenericExtrinsicPayload } from '@polkadot/types';
import { Bytes } from '@polkadot/types';
import React, { useEffect, useState } from 'react';
import { Button, Container, Divider, Grid, Header } from 'semantic-ui-react';

import kusamaMeta from '../metadata/kusama-static';
import flamingFirMeta from '../metadata/flaming-fir';

const KUSAMA_ADDRESS = 'FF42iLDmp7JLeySMjwWWtYQqfycJvsJFBYrySoMvtGfvAGs';

/*
  Inject custom node metadata into a multipart QR
*/
export function SubstrateMultipart() {
  const [flamingFirMetaBytes, setFlamingFirMetaBytes] = useState();
  const [kusamaMetaBytes, setKusamaMetaBytes] = useState();
  const [showKusama, setShowKusama] = useState(true);

  useEffect(() => {
    GenericCall.injectMethods(extrinsics);

    setKusamaMetaBytes(new Bytes(kusamaMeta));
    setFlamingFirMetaBytes(new Bytes(flamingFirMeta));
  }, []);

  const renderKusama = () => {
    return (
      <Grid.Column width={5}>
        <Header>Kusama Meta</Header>
        <QrDisplayPayload
          address={KUSAMA_ADDRESS} // signer should not care about address for this.
          cmd={2} //mortal
          payload={kusamaMetaBytes}
        />
      </Grid.Column>
    )
  }

  const renderOther = () => {
    return (
      <Grid.Column width={5}>
        <Header>Flaming Fir Meta</Header>
        <QrDisplayPayload
          address={KUSAMA_ADDRESS}
          cmd={2} //mortal
          payload={flamingFirMetaBytes}
        />
      </Grid.Column>
    )
  }

  return (
    <Container>
      <h1>Substrate Multipart Payload</h1>
      <Button onClick={() => setShowKusama(!showKusama)} >Show {showKusama ? 'Flaming Fir' : 'Kusama' }</Button>
      <Grid>
        <Grid.Row gutter={3}>
        {
          showKusama
            ? renderKusama()
            : renderOther()
        }
        </Grid.Row>
      </Grid>
      <Divider />
    </Container>
  )
}