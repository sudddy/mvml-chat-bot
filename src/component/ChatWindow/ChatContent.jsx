import React, {useRef, useEffect} from "react";
import Avatar from "../../assets/user.png"


const ChatContent = ({ messages,loading }) => {

  const ref = useRef(null);
    
  useEffect(() => {
    if (messages.length && ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [messages]);


  return (
    <div class="h-[410px] px-6 py-1 overflow-y-auto overflow-x-hidden  container-snap" ref={ref}>
      {messages.map((message, index) => (
        <div
          key={index}
          className={`py-2 flex flex-row ${
            message.isChatOwner ? "justify-end" : "justify-start"
          }`}
        >
          <div className={`${message.isChatOwner ? "order-2" : "order-1"} w-[24px]`}>
            <img src={Avatar} width={24} height={24} alt="user avatar"/>
          </div>
          <div
            className={`px-2 w-fit py-3 flex  rounded-xl text-white  ${
              message.isChatOwner ? "order-1 mr-2 bg-[#C15DEB]" : "order-2 ml-2  bg-[#9B4ABE]"
            } `}
          >
            <span className="text-sm text-white text-bold text-ellipsis w-48  md:w-72 break-words">{message.text}</span>
          </div>
        </div>
      ))}

      {loading ?  (
        <div className="py-2 flex flex-row w-full justify-start">
        <div className={"order-1" }><img src={Avatar} width={24} height={24} alt="user avatar"/></div>
        <div className={`px-2 w-fit py-3 m-2 flex flex-col bg-[#9B4BBE] rounded-lg text-white order-1 mr-2`} >
        <span className="text-sm text-white text-bold">Typing...</span>
        </div>
      </div>) : null }  



    </div>
  );
};

export default ChatContent;
