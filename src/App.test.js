import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders underText', () => {
  render(<App />);
  const linkElement = screen.getByText(/Ethical Hacker & Developer/i);
  expect(linkElement).toBeInTheDocument();
});
