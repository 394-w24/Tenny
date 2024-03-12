import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import { Router as MemoryRouter } from 'react-router-dom';
import Banner from './Banner';
import { createMemoryHistory } from 'history';

//test default selection:
test('Banner renders with Service tab selected by default', () => {
  render(
    <Router>
      <Banner />
    </Router>
  );

  const serviceTab = screen.getByRole('button', { name: 'Service' });
  expect(serviceTab).toHaveClass('Mui-selected');
});

//test clicking and navigating each tab:
test('Clicking on Chat navigates to /chat', () => {
  const history = createMemoryHistory();
  render(
    <MemoryRouter history={history}>
      <Banner />
    </MemoryRouter>
  );

  const chatTab = screen.getByRole('button', { name: 'Chat' });
  userEvent.click(chatTab);
  expect(history.location.pathname).toBe('/chat');
});

//check if go to profile, will go to either page depending on whether loged in or not:
test('Navigates to /profile if user phone number exists in local storage', () => {
  Storage.prototype.getItem = jest.fn(() => '1234567890');
  const history = createMemoryHistory();
  render(
    <MemoryRouter history={history}>
      <Banner />
    </MemoryRouter>
  );

  const profileTab = screen.getByRole('button', { name: 'Profile' });
  userEvent.click(profileTab);
  expect(history.location.pathname).toBe('/profile');
});
