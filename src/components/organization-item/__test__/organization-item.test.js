import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import OrganizationItem from '../organization-item.component';

test('should render add organization item', () => {
  render(
    <MemoryRouter>
      <OrganizationItem
        data={{
          id: 1,
          name: 'test',
          roles: 'Teacher, Manager',
          applications: 10,
          users: 90,
        }}
        updateAction={() => console.log('Update')}
      />
    </MemoryRouter>
  );
});
