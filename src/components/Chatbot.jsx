import React, { useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.botpressWebChat.init({
        "composerPlaceholder": "Chat with bot",
        "botConversationDescription": "This chatbot was built surprisingly fast with Botpress",
        "botId": "c5609c09-5a94-4b60-b380-c55c760009b9",
        "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
        "messagingUrl": "https://messaging.botpress.cloud",
        "clientId": "c5609c09-5a94-4b60-b380-c55c760009b9",
        "webhookId": "9201fa33-ae6c-4cab-bde9-87b5268ec0d7",
        "lazySocket": true,
        "themeName": "prism",
        "frontendVersion": "v1",
        "showPoweredBy": true,
        "theme": "prism",
        "themeColor": "#2563eb"
      });

      // Automatically open the chat window after initialization
      window.botpressWebChat.sendEvent({ type: 'show' });
    }
  }, []);

  return <div id="webchat" />;
};

export default Chatbot;
