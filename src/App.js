import MVML from "./assets/metalogo.png"
import ChatBot from "./assets/chatbot.png"
import React, { useState } from "react";
import ChatWindow from "./component/ChatWindow/ChatWindow"
import CloseIcon from "./assets/close-fill.png"




function App() {
  const [isChatOn, setChat] = useState(false);

  return (
    <div class="flex h-screen flex-row">
      <div class="w-full flex items-center justify-center border border-black">
        <img src={MVML} alt="MVML logo" width={200} height={200} class="animate-pulse" />
      </div>
      <div class="absolute  bottom-0 right-0">
        {!isChatOn ?
          <img src={ChatBot} width={40} height={40} alt="Chat bot" class="m-10 animate-bounce" onClick={() => {
            setChat(!isChatOn);
          }} /> : <img src={CloseIcon} width={40} height={40} alt="Chat bot" class="m-10" onClick={() => {
            setChat(!isChatOn);
          }} />}
      </div>
      <ChatWindow isChatOn={isChatOn} setChat={setChat} />
    </div>

  );
}

export default App;
