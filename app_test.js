import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders Nutrition Tracker heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Nutrition Tracker/i);
  expect(headingElement).toBeInTheDocument();
});

test('handles input change and button click', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText('Enter your meal here...');
  const buttonElement = screen.getByText(/Analyze/i);

  fireEvent.change(inputElement, { target: { value: 'Example meal' } });
  fireEvent.click(buttonElement);

  // You can add assertions here to test the expected behavior
});
