
import React, { useState } from 'react';
import { Container, Button } from 'semantic-ui-react';

import './App.css';

import { Displays } from './components/Displays';
import { Scanners } from './components/Scanners';


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
