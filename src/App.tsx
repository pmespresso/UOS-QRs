
import extrinsics from '@polkadot/api-metadata/extrinsics/static';
import React, { useState } from 'react';
import { Container, Divider, Input, Grid, Header, Button } from 'semantic-ui-react';
import { GenericCall } from '@polkadot/types';

import './App.css';

import { Displays } from './Displays';
import { Scanners } from './Scanners';

GenericCall.injectMethods(extrinsics);

const App: React.FC = () => {
  const [shouldDisplay, setShouldDisplay] = useState(true);

  const toggleShouldDisplay = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event);
    setShouldDisplay(!shouldDisplay);
  }

  return (
    <Container>
      <Button onClick={toggleShouldDisplay}>{shouldDisplay ? 'Scan' : 'Display'}</Button>
      {
        shouldDisplay
          ? <Displays />
          : <Scanners />
      }
    </Container>
  );
}

export default App;
