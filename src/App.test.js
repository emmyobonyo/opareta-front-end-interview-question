import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('should return the home page', () => {
  const home = render(<App />);
  expect(home).toMatchSnapshot();
  expect(home.queryByText(/Bitcoin/)).toBeInTheDocument();
})

// I believe the test below is important because it ensures the output value exists.
// Without the output value, the imputs are useless

test('should return the home page', () => {
  const home = render(<App />);
  expect(home.queryByText(/0/)).toBeInTheDocument();
})

