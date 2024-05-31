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

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

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
              <div className="bg-stone-100 px-16 py-2 rounded-xl">
                Hey I'm your Shadow! There was a meeting last week <br />
                where Himanshu explained how to deploy the code <br />
                to AWS. I can tell you about it if you'd like!{" "}
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
