import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Breadcrumbs from '../breadcrumbs.component';

test('should render all the crumbs with correct paths and labels', () => {
  render(
    <MemoryRouter>
      <Breadcrumbs
        crumbs={[
          {
            path: '/',
            label: 'Organizations',
          },
          {
            path: '/1/applications',
            label: 'Selected Organization',
          },
          {
            path: '/1/applications/1',
            label: 'Portfolio Manager',
          },
        ]}
      />
    </MemoryRouter>
  );
});

test('should contain passed crumbs', () => {
  render(
    <MemoryRouter>
      <Breadcrumbs
        crumbs={[
          {
            path: '/',
            label: 'Organizations',
          },
          {
            path: '/1/applications',
            label: 'Arts',
          },
          {
            path: '/1/applications/1',
            label: 'Portfolio Manager',
          },
        ]}
      />
    </MemoryRouter>
  );
  const artsCrumb = screen.getByText('Arts');
  expect(artsCrumb).toBeInDocument();
});
