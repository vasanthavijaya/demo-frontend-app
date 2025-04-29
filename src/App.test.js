import { render, screen } from '@testing-library/react';
import App from './App';

test('renders demo frontend header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Demo Frontend/i);
  expect(headerElement).toBeInTheDocument();
});