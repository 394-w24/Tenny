import {describe, expect, test} from 'vitest';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

describe('service page test', () => {

  test("Services page", () => {
    render(<App />);
    expect(screen.getByText('Services')).toBeDefined();
  });

  test("Services description page", async () => {
    render(<App />);
    const counter = screen.getByAltText('Alumni Connect').parentNode;
    fireEvent.click(counter);
    expect(await screen.getByText('Service Description')).toBeDefined();
  });

});