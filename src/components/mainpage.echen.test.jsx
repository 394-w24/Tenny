import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import { Router as MemoryRouter } from 'react-router-dom';
import Banner from './Banner';
import { createMemoryHistory } from 'history';
import ProfilePage from './ProfilePage';
import { getDbData, writeToDb } from '../utilities/firebase';
jest.mock('../utilities/firebase', () => ({
  getDbData: jest.fn(),
  writeToDb: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));
const mockLocalStorage = (function() {
  let store = {};
  return {
    getItem: function(key) {
      return store[key] || null;
    },
    setItem: function(key, value) {
      store[key] = value.toString();
    },
    clear: function() {
      store = {};
    },
    removeItem: function(key) {
      delete store[key];
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage,
});

test('mainpage test', () => {
  render(
    <Router>
      <Banner />
    </Router>
  );

  const serviceTab = screen.getByRole('button', { name: 'Service' });
  expect(serviceTab).toHaveClass('Mui-selected');
});


test('Clicking on profile naviagtes to the profile', () => {
  const history = createMemoryHistory();
  render(
    <MemoryRouter history={history}>
      <Banner />
    </MemoryRouter>
  );

  const tab = screen.getByRole('button', { name: 'Profile' });
  userEvent.click(tab);
  expect(history.location.pathname).toBe('/profile');
});

describe('ProfilePage', () => {
  beforeEach(() => {
    localStorage.setItem('userPhoneNumber', '1234567890');
    getDbData.mockResolvedValue({
      email: 'user@example.com',
      budgetRange: [300, 1500],
      footageRange: [500, 2000],
      beds: '2',
      baths: '1',
      pets: ['cats'],
      amenities: 'pool, gym',
      keywords: 'quiet, safe',
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  test('allows user to edit and submit the profile', async () => {
    render(<ProfilePage />);
    await waitFor(() => expect(getDbData).toHaveBeenCalled());
    const amenitiesInput = screen.getByLabelText(/amenities/i);
    userEvent.clear(amenitiesInput);
    userEvent.type(amenitiesInput, 'updated amenities');
    const keywordsInput = screen.getByLabelText(/key words/i);
    userEvent.clear(keywordsInput);
    userEvent.type(keywordsInput, 'updated keywords');
    const submitButton = screen.getByRole('button', { name: /submit/i });
    userEvent.click(submitButton);
    await waitFor(() => expect(writeToDb).toHaveBeenCalledWith(`/users/1234567890`, expect.objectContaining({
      amenities: 'updated amenities',
      keywords: 'updated keywords',
    })));
  });
});