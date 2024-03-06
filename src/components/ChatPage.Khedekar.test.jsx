import {describe, expect, test, vi} from 'vitest';
import {fireEvent, render, screen} from '@testing-library/react';
import App from '../App';
import { useData, useUserState }from '../utilities/firebase';
import { search_zillow_properties_on_location } from '../utilities/functions';
vi.mock('./firebase');


vi.mock('../utilities/functions', () => {
    search_zillow_properties_on_location: "Location1";
});

const mockKeys = {
    RapidApiKey: 'dummy_rapid_api_key',
    ApiKey: 'dummy_api_key',
}

describe('chat page test', () => {

  test("Chat page", () => {
    render(<App />);
    const chatButton = screen.getByText('Chat');
    fireEvent.click(profileButton);
    expect(screen.getByText('Tenny')).toBeDefined();
    const chatBox = screen.getByPlaceholderText("Your prompt here...");
    chatBox.setAttribute("value","Provide lsitings for Evanston");
    const sendButton = screen.getByText("Go");
    fireEvent.click(sendButton);
    setTimeout(() => {
        console.log("Waiting for reply")
    }, 10000 )
    expect(screen.getByText("Location1").toBeDefined());

  });

});