import {describe, expect, test} from 'vitest';
import {fireEvent, render, screen} from '@testing-library/react';
import App from '../App';

describe('profile page test', () => {

  test("Profile page", () => {
    render(<App />);
    const profileButton = screen.getByText('Profile');
    fireEvent.click(profileButton);
    expect(screen.getByText('Password')).toBeDefined();
  });

});