import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

import {
  FaRobot,
  FaRunning,
  FaDumbbell,
  FaChartLine,
} from "react-icons/fa";

import "./AICoach.css";


function AICoach() {

  const [message, setMessage] = useState("");

  const [chat, setChat] = useState([
    {
      sender: "KAI",
      text:
        "Hello! I'm KAI, your AI sports assistant. Tell me about your goals, training, or challenges."
    }
  ]);


  const sendMessage = () => {

    if (!message.trim()) return;


    setChat([
      ...chat,
      {
        sender: "You",
        text: message
      },
      {
        sender: "KAI",
        text:
          "I'm analyzing your athletic profile and preparing guidance..."
      }
    ]);


    setMessage("");

  };


  return (

    <>
      <Navbar />


      <main className="ai-coach-page">


        {/* Header */}

        <section className="ai-header">

          <FaRobot className="ai-icon" />

          <h1>
            Meet KAI
          </h1>

          <p>
            Your AI-powered athletic coach and performance assistant.
          </p>

        </section>



        {/* Suggestions */}

        <section className="ai-features">


          <div className="ai-card">

            <FaRunning />

            <h3>
              Training Advice
            </h3>

            <p>
              Get personalized training recommendations.
            </p>

          </div>



          <div className="ai-card">

            <FaDumbbell />

            <h3>
              Fitness Guidance
            </h3>

            <p>
              Improve strength, endurance, and performance.
            </p>

          </div>



          <div className="ai-card">

            <FaChartLine />

            <h3>
              Performance Analysis
            </h3>

            <p>
              Track progress and identify improvements.
            </p>

          </div>


        </section>




        {/* Chat */}

        <section className="chat-box">


          <div className="messages">


            {
              chat.map((item, index) => (

                <div
                  key={index}
                  className={
                    item.sender === "KAI"
                    ? "kai-message"
                    : "user-message"
                  }
                >

                  <strong>
                    {item.sender}
                  </strong>

                  <p>
                    {item.text}
                  </p>


                </div>

              ))

            }


          </div>



          <div className="chat-input">


            <input
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
              placeholder="Ask KAI about training..."
            />


            <Button onClick={sendMessage}>
              Send
            </Button>


          </div>


        </section>



      </main>



      <Footer />

    </>

  );

}


export default AICoach;
