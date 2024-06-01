import { useEffect, useRef, useState } from "react";
import axios from "axios";
import video from "../assets/video.mov";
import ChatInterface from "./ChatInterface";
import upButton from "../assets/up-button.png";

function Chat() {
  const [chatActive, setChatActive] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [chatHistoryEntry, setChatHistoryEntry] = useState({});
  const [visibleStep, setVisibleStep] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    const steps = [0, 1, 2, 3];
    steps.forEach((step, index) => {
      setTimeout(() => {
        setVisibleStep(step);
      }, index * 1000); // Adjust the delay for each step (1000 ms = 1 second)
    });
  }, []);

  const fadeInStyle = (step: number) => ({
    opacity: visibleStep >= step ? 1 : 0,
    transition: "opacity .5s ease-in",
  });

  return (
    <div id="chat-wrapper" className="bg-white">
      <div
        id="response-area"
        className="h-[75vh]"
        style={{ border: "0px solid blue", overflowY: "scroll" }}
      >
        {chatActive === false ? (
          <>
            <video
              ref={videoRef}
              src={video}
              autoPlay
              muted
              style={{
                width: "300px",
                margin: "auto",
                marginBottom: "-40px",
                border: "0px solid green",
              }}
            >
              Your browser does not support the video tag.
            </video>
            <div
              className="flex justify-end px-32 text-gray-500"
              style={{ border: "0px solid red" }}
            >
              <div
                id="intro-message-container"
                className="bg-stone-100 px-16 py-2 rounded-xl"
                style={fadeInStyle(0)}
              >
                <div style={fadeInStyle(1)}>Hey I'm your Shadow! There was a meeting last week</div>
                <div style={fadeInStyle(2)}>where Himanshu explained how to deploy the code</div>
                <div style={fadeInStyle(3)}>to AWS. I can tell you about it if you'd like!</div>
              </div>
            </div>
          </>
        ) : (
          <ChatInterface chatHistoryEntry={chatHistoryEntry} />
        )}
      </div>
      <div id="input-area" className="py-8">
        <div className="shadow-sm rounded-xl flex w-full h-12 px-4 py-3 items-center rounded-md border-2 border-gray-200 overflow-hidden max-w-2xl mx-auto font-[sans-serif]">
          <input
            type="text"
            placeholder="Talk to Shreyas' Shadow..."
            className="w-full outline-none bg-transparent text-black text-sm"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            onClick={() => {
              axios
                .post("http://localhost:3000/chat", { message: inputValue })
                .then((response) => {
                  setChatHistoryEntry({
                    question: inputValue,
                    answer: response.data,
                  });
                  setChatActive(true);
                });
            }}
          >
            <img src={upButton} className="w-6 h-6 rounded-full" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
