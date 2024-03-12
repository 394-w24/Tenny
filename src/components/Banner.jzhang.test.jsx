import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import { Router as MemoryRouter } from 'react-router-dom'; // Use MemoryRouter for tests involving navigation
import Banner from './Banner';
import { createMemoryHistory } from 'history';

test('Banner renders with Service tab selected by default', () => {
  render(
    <Router>
      <Banner />
    </Router>
  );

  const serviceTab = screen.getByRole('button', { name: 'Service' });
  expect(serviceTab).toHaveClass('Mui-selected'); // Verify this class is correct as per MUI or your custom styles
});

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

test('Navigates to /profile if user phone number exists in local storage', () => {
  Storage.prototype.getItem = jest.fn(() => '1234567890'); // Mock local storage
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
