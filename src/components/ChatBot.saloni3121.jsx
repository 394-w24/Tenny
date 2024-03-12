
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ChatPage from './ChatPage'; 

describe('ChatPage Component Tests', () => {
  it('renders ChatPage and allows text input', async () => {
    render(<ChatPage />);
    
    // Check if the Chatbot input field is rendered
    const inputField = screen.getByRole('textbox');
    expect(inputField).toBeInTheDocument();

    // Simulate typing into the input field
    fireEvent.change(inputField, { target: { value: 'Hello, world!' } });
    expect(inputField.value).toBe('Hello, world!');
  });
});
