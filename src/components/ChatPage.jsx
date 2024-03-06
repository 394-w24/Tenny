import { useState, useEffect, useRef } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Message from "./Message";
import Chatbot from "./Chatbot";

import "./ChatPage.css";
import { getDbData } from "../utilities/firebase";
import { search_zillow_properties_on_location } from "../utilities/functions";

const ChatPage = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  var apiKey = "";
  var rapidApiKey = "";

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages]);

  getDbData("/").then((data) => {
    apiKey = data.apiKey;
    rapidApiKey = data.rapidApiKey;
  });


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
    setInput("");

    // create assistant session
    fetch("https://api.openai.com/v1/assistants", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "OpenAI-Beta": "assistants=v1",
        "model": "gpt-3.5-turbo",
      }
    }).then((data) => data.json()
    ).then((data) => {
      // console.log(data);
      assistant = data.data[0].id
      // console.log(data.data[0].id)
      // Create a new thread
      fetch("https://api.openai.com/v1/threads", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "OpenAI-Beta": "assistants=v1",
          // "model": "gpt-3.5-turbo",
        }
      }).then((data) => data.json()
      ).then((data) => {
        // console.log(data);
        thread = data.id
        // Add message to the thread
        fetch(`https://api.openai.com/v1/threads/${thread}/messages`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
            "OpenAI-Beta": "assistants=v1",
          },
          body: JSON.stringify({
            role: "user",
            content: input,
          }),
        }).then((data) => data.json()
        ).then((data) => {
            // console.log(data)
          // Run the assistant
          // console.log("assistant id" + assistant)
          fetch(`https://api.openai.com/v1/threads/${thread}/runs`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
              "OpenAI-Beta": "assistants=v1",
            },
            body: JSON.stringify({
              assistant_id: assistant
            }),
          }).then((data) => data.json()
          ).then((data) => {
              // console.log(data);
              runId  = data.id;
              // console.log(runId)
              status = data.status;
              // Check assistant status
              // console.log(runId);
              // var count = 0
              setMessages([...messages1, {role: "assistant", content:"Loading............................"}])
              setTimeout(() => {
                console.log(status);
                fetch(`https://api.openai.com/v1/threads/${thread}/runs/${runId}`, {
                  method: "GET",
                  headers: {
                    Authorization: `Bearer ${apiKey}`,
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
                          Authorization: `Bearer ${apiKey}`,
                          "Content-Type": "application/json",
                          "OpenAI-Beta": "assistants=v1",
                        },
                        // body: JSON.stringify({
                        //   assistant_id: assistant
                        // }),
                      }).then((data) => data.json()
                      ).then((data) => {
                          // console.log(data);
                          console.log(data.data[0].content[0].text.value);
                          // if (data.data[0].content[0].role === "assistant") {
                            console.log("setting msg")
                            messages1 = [...messages1, {role: "assistant", content: data.data[0].content[0].text.value}];
                            // console.log(messages1)
                            setMessages(messages1)
                          // }
                          // setStatus(data.status);
                      });
                    }
                    else if(status === "requires_action") {
                      console.log(data)
                      var call_id = data.required_action.submit_tool_outputs.tool_calls[0].id
                      // console.log(call_id)
                      setMessages([...messages1, {role: "assistant", content:"Searching on Zillow..............."}])
                      search_zillow_properties_on_location(rapidApiKey, JSON.parse(data.required_action.submit_tool_outputs.tool_calls[0].function.arguments).location
                      ).then(data => {
                        // Submit tool outputs
                        fetch(`https://api.openai.com/v1/threads/${thread}/runs/${runId}/submit_tool_outputs`, {
                          method: "POST",
                          headers: {
                            Authorization: `Bearer ${apiKey}`,
                            "Content-Type": "application/json",
                            "OpenAI-Beta": "assistants=v1",
                          },
                          body: JSON.stringify({
                            tool_outputs: [
                              {
                                tool_call_id: call_id,
                                output: data
                              }
                            ]
                          }),
                        }).then((data) => data.json()
                        ).then((data) => {
                          setTimeout(() => {
                            console.log(status);
                            fetch(`https://api.openai.com/v1/threads/${thread}/runs/${runId}`, {
                              method: "GET",
                              headers: {
                                Authorization: `Bearer ${apiKey}`,
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
                                      Authorization: `Bearer ${apiKey}`,
                                      "Content-Type": "application/json",
                                      "OpenAI-Beta": "assistants=v1",
                                    },
                                    // body: JSON.stringify({
                                    //   assistant_id: assistant
                                    // }),
                                  }).then((data) => data.json()
                                  ).then((data) => {
                                      // console.log(data);
                                      console.log(data.data[0].content[0].text.value);
                                      // if (data.data[0].content[0].role === "assistant") {
                                        console.log("setting msg")
                                        messages1 = [...messages1, {role: "assistant", content: data.data[0].content[0].text.value}];
                                        // console.log(messages1)
                                        setMessages(messages1)
                                      // }
                                      // setStatus(data.status);
                                  });
                                } else {
                                  messages1 = [...messages1, {role: "assistant", content: "Failed to get reply from server"}];
                                  setMessages(messages1)
                                }
                              });
                          }, 5000);
                        });
                      })

                    } else {
                      messages1 = [...messages1, {role: "assistant", content: "Failed to get reply from server"}];
                      setMessages(messages1)
                    }
                });
              },5000)
            })
        })
      })
    })
  };

  return (
    <div>
      <div className="Column">
        <div className="Content">
          {messages.map((el, i) => {
            return <Message key={i} role={el.role} content={el.content} />;
          })}
          <div ref={messagesEndRef} />
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