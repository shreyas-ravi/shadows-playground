import { useEffect, useRef, useState } from "react";
import video from "../assets/video.mov";
import ChatInterface from "./ChatInterface";

function Chat() {
  const[chatActive, setChatActive] = useState(false); 
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  function handleChat(){
    setChatActive(true); 
  }

  return (
    <div id="chat-wrapper" className="bg-white">
      <div id="response-area" className="h-[75vh]" style={{border: '0px solid blue', overflowY: 'scroll'}}>
        {chatActive == false ? 
        <video
          ref={videoRef}
          src={video}
          autoPlay
          muted
          style={{ width: "300px", margin: "auto", border: "0px solid green" }}
        >
          Your browser does not support the video tag.
        </video> : <ChatInterface />}
      </div>
      <div id="input-xxx" className="py-8">
        <div className="shadow-sm rounded-xl flex w-full h-12 px-4 py-3 rounded-md border-2 border-gray-200 overflow-hidden max-w-2xl mx-auto font-[sans-serif]">
          <input
            type="email"
            placeholder="Talk to Shreyas' Shadow..."
            className="w-full outline-none bg-transparent text-black text-sm"
          />
          <button onClick={handleChat}>Press</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
