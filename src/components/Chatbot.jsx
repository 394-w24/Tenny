import React from 'react';
import styles from './Chatbot.module.css'

const Chatbot = () => {
  const botpressHtml = {
    __html: `
    <div>
        <div class="${styles.fullPageChatbot}">
          <iframe
            style="border: none;"
            srcdoc="<body><script src='https://cdn.botpress.cloud/webchat/v0/inject.js'></script>
            <script>
              window.botpressWebChat.init({
                  'composerPlaceholder': 'Chat with TennyBot',
                  'botConversationDescription': 'So do not fear, for TennyBot is with you',
                  'botName': 'TennyBot',
                  'botId': 'c5609c09-5a94-4b60-b380-c55c760009b9', // Make sure to use your own botId
                  'hostUrl': 'https://cdn.botpress.cloud/webchat/v1',
                  'messagingUrl': 'https://messaging.botpress.cloud',
                  'clientId': 'c5609c09-5a94-4b60-b380-c55c760009b9', // And clientId
                  'enableConversationDeletion': true,
                  'showPoweredBy': true,
                  'className': 'webchatIframe',
                  'containerWidth': '100%25',
                  'layoutWidth': '100%25',
                  'hideWidget': true,
                  'showCloseButton': false,
                  'disableAnimations': true,
                  'closeOnEscape': false,
                  'showConversationsButton': false,
                  'enableTranscriptDownload': false,
              });
            window.botpressWebChat.onEvent(function () { window.botpressWebChat.sendEvent({ type: 'show' }) }, ['LIFECYCLE.LOADED']);
            </script></body>",
            width="100%"
            height="100%"
          ></iframe>
        </div>
    </div>
    `,
  };

  return <div dangerouslySetInnerHTML={botpressHtml} />;
};

export default Chatbot;
