import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import OrganizationAddForm from '../organization-add-form.component';

test('should render add form for organization', () => {
  render(<OrganizationAddForm />);
});

test('should contain text input', () => {
  render(<OrganizationAddForm />);
  const textInput = screen.getByPlaceholderText('Organization name');
  expect(textInput).toBeInTheDocument();
});

test('should contain create and cancel buttons', () => {
  render(<OrganizationAddForm />);
  const save = scree.getByText('Create');
  expect(save).toBeInTheDocument();
  const cancel = scree.getByText('Cancel');
  expect(cancel).toBeInTheDocument();
});
