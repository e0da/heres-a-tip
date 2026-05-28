import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the tip jar', () => {
  const { getByText } = render(<App />);
  expect(getByText(/tip jar/i)).toBeInTheDocument();
  expect(getByText(/tip \$1/i)).toBeInTheDocument();
  expect(getByText(/empty jar/i)).toBeInTheDocument();
});
