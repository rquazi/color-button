import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App'

test('button has correct initial color', () => {
  render(<App />);
  //find an element with a role button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  //expect the background color to red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })

  //click button
  fireEvent.click(colorButton);

  //expect the button text to change to red
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
});

test('button turns blue when clicked', () => {

});

test('check initial conditions', () => {
  //check the button is enabled

  //checkbox starts unchecked
});

describe('space before camel-case capital letters', () => {
  test('Works forv no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');

  });

  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');

  });

  test('Works for multiple inner capital letters', () => {

  })

});
