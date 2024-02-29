import { useState, useEffect } from "react";

import Message from "./Message";
import Chatbot from "./Chatbot";

import "./ChatPage.css";

const ChatPage = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  console.log("api key: " + import.meta.env.VITE_REACT_APP_OPENAI_API_KEY);

  const handleSubmit = () => {
    const prompt = {
      role: "user",
      content: input,
    };
    var status = "queued";
    var assistant = "";
    var thread = "";
    var runId = "";
    var messages1 = [...messages, prompt]

    setMessages([...messages, prompt])

    // create assistant session
    fetch("https://api.openai.com/v1/assistants", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_OPENAI_API_KEY}`,
        "Content-Type": "application/json",
        "OpenAI-Beta": "assistants=v1",
        "model": "gpt-3.5-turbo",
      }
    }).then((data) => data.json()
    ).then((data) => {
      console.log(data);
      assistant = data.data[0].id
      console.log(data.data[0].id)
      // Create a new thread
      fetch("https://api.openai.com/v1/threads", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_OPENAI_API_KEY}`,
          "Content-Type": "application/json",
          "OpenAI-Beta": "assistants=v1",
          // "model": "gpt-3.5-turbo",
        }
      }).then((data) => data.json()
      ).then((data) => {
        console.log(data);
        thread = data.id
        // Add message to the thread
        fetch(`https://api.openai.com/v1/threads/${thread}/messages`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_OPENAI_API_KEY}`,
            "Content-Type": "application/json",
            "OpenAI-Beta": "assistants=v1",
          },
          body: JSON.stringify({
            role: "user",
            content: input,
          }),
        }).then((data) => data.json()
        ).then((data) => {
            console.log(data)
          // Run the assistant
          console.log("assistant id" + assistant)
          fetch(`https://api.openai.com/v1/threads/${thread}/runs`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_OPENAI_API_KEY}`,
              "Content-Type": "application/json",
              "OpenAI-Beta": "assistants=v1",
            },
            body: JSON.stringify({
              assistant_id: assistant
            }),
          }).then((data) => data.json()
          ).then((data) => {
              console.log(data);
              runId  = data.id;
              console.log(runId)
              status = data.status;
              // Check assistant status
              console.log(runId);
              // var count = 0
              setTimeout(() => {
                console.log(status);
                fetch(`https://api.openai.com/v1/threads/${thread}/runs/${runId}`, {
                  method: "GET",
                  headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_OPENAI_API_KEY}`,
                    "Content-Type": "application/json",
                    "OpenAI-Beta": "assistants=v1",
                  },
                  // body: JSON.stringify({
                  //   assistant_id: assistant
                  // }),
                }).then((data) => data.json()
                ).then((data) => {
                    console.log(data.status);
                    status = data.status;
                    if(status === "completed") {
                      // Display message
                      fetch(`https://api.openai.com/v1/threads/${thread}/messages`, {
                        method: "GET",
                        headers: {
                          Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_OPENAI_API_KEY}`,
                          "Content-Type": "application/json",
                          "OpenAI-Beta": "assistants=v1",
                        },
                        // body: JSON.stringify({
                        //   assistant_id: assistant
                        // }),
                      }).then((data) => data.json()
                      ).then((data) => {
                          console.log(data);
                          console.log(data.data[0].content[0].text.value);
                          // if (data.data[0].content[0].role === "assistant") {
                            console.log("setting msg")
                            messages1 = [...messages1, {role: "assistant", content: data.data[0].content[0].text.value}];
                            console.log(messages1)
                            setMessages(messages1)
                          // }
                          // setStatus(data.status);
                      });
                    }
                });
              },5000)
            })
        })
      })
    })
  };

  return (
    <div className="App">
      <div className="Column">
        <h3 className="Title">Chat Messages</h3>
        <div className="Content">
          {messages.map((el, i) => {
            return <Message key={i} role={el.role} content={el.content} />;
          })}
        </div>
        <Chatbot
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onClick={input ? handleSubmit : undefined}
        />
      </div>
    </div>
  );
}

export default ChatPage;