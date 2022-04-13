import React, { useState } from 'react';
import CaseAdministrationForm from './CaseAdministrationForm';
import CaseLink from './CaseLink';
import Program from './Program';
import Literature from './Literature';

import { Button, Card, CardHeader, CardBody, CardTitle } from 'reactstrap';

const General = () => {
  const [state, setState] = useState('Case Administration');

  return (
    <div>
      <CardHeader>
        {' '}
        <CardTitle tag='h5'>General</CardTitle>
      </CardHeader>
      <CardBody>
        <Button
          style={{
            borderRadius: '25px',
            height: '40px',
            background: '#FF9800',
          }}
          onClick={() => setState('Case Administration')}>
          Case Administration
        </Button>
        <Button
          style={{
            borderRadius: '25px',
            height: '40px',
            background: '#FF9800',
            width: '100px',
          }}
          onClick={() => setState('Case Link')}>
          <div style={{ fontSize: '10px' }}>Case Link</div>
        </Button>

        <Button
          style={{
            borderRadius: '25px',
            height: '40px',
            background: '#FF9800',
          }}
          onClick={() => setState('Program')}>
          Program
        </Button>
        <Button
          style={{
            borderRadius: '25px',
            height: '40px',
            background: '#FF9800',
          }}
          onClick={() => setState('Literature')}>
          Literature
        </Button>
        {console.log(state)}
        {state == 'Case Administration' ? (
          <CaseAdministrationForm />
        ) : state == 'Case Link' ? (
          <CaseLink />
        ) : state == 'Program' ? (
          <Program />
        ) : (
          <Literature />
        )}
      </CardBody>
    </div>
  );
};

export default General;
