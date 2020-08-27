import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import Home from './Home';

test('renders weather report app', () => {
  const { getByText } = render(<Home />);
  const header = getByText(/Welcome to Weather report site/i);
  expect(header).toBeInTheDocument();
});

test('city selection dropdown loaded', () => {
    const { getByTestId } = render(<Home />);
    const dropdown = getByTestId(/dropdown-basic-button/i);
    expect(dropdown).toBeInTheDocument();
  });




