import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Capco Engineering Website text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Capco Engineering Website/i);
  expect(linkElement).toBeInTheDocument();
});
