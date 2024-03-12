import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom'; // Using MemoryRouter for tests
import { createMemoryHistory } from 'history';
import Schedule from './Schedule';

// Mock the useNavigate function using Vitest
vi.mock('react-router-dom', async () => {
  const actualModule = await vi.importActual('react-router-dom');
  return {
    ...actualModule,
    useNavigate: vi.fn(),
  };
});

describe('Schedule Component Tests', () => {
  it('renders with current date selected', () => {
    render(
      <MemoryRouter>
        <Schedule />
      </MemoryRouter>
    );
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
    // Additional checks for the default date selection can be added here
  });

  it('submits the selected date successfully', async () => {
    render(
      <MemoryRouter>
        <Schedule />
      </MemoryRouter>
    );
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    await userEvent.click(submitButton);
    expect(await screen.findByText('Submit success! You will be contacted soon!')).toBeInTheDocument();
  });

});
