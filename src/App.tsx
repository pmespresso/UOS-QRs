
import React, { useState } from 'react';
import { Container, Divider, Input, Grid, Header, Button } from 'semantic-ui-react';

import './App.css';

import { Displays } from './Displays';
import { Scanners } from './Scanners';


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
