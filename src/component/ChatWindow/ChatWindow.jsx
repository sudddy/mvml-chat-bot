import React, { Fragment, useState } from "react";
import MVML from "../../assets/chatlogo.png"
import CloseIcon from "../../assets/close.png"
import Send from "../../assets/send.png"
import ChatContent from "./ChatContent";
import useHuggingFace from "../../hooks/useHuggingFace";
import NotificationAudio from "../../assets/notification.mp3"

const ChatWindow = ({ isChatOn, setChat }) => {


    const [messages, setMessages] = useState([{ 
        text: 'Welcome to Metaverse Mind Labs. How can i help you today?',
        sentAt: new Date().getTime()
    }]);
    const [currentMessage, setCurrentMessage] = useState('');
    const [loading, setLoader] = useState(false);
    const  huggingFace  = useHuggingFace()
    const notification = new Audio(NotificationAudio);
    
   
    const onSendMessage = async () => {
        try {
            if(currentMessage !== '' && currentMessage !== undefined) {
                setMessages((prev) =>  [...prev, {
                    isChatOwner: true,
                    text: currentMessage,
                    sentAt: new Date().getTime()
                }]);
                
                setLoader(true);
                
                const response = await huggingFace.getMessagesFromGPT2(currentMessage); 
    
                setLoader(false);
                
                setMessages((prev) => [...prev, {
                    isChatOwner: false,
                    text: response[0].generated_text,
                    sentAt: new Date().getTime()
                }]);

                notification.play();

                setCurrentMessage('');
            } 
        }  catch(e) {
            setLoader(false);
        }
    
}

    if (!isChatOn) {
        return null
    }

    return (
        <Fragment>
            <div class="flex flex-col justify-between h-[550px] w-[340px]  md:w-[400px] absolute border  right-2 md:right-10  z-50 animate-moving-line rounded-l bg-[#FFFFFF]">
                <div class="flex h-12 bg-custom-color items-center w-full justify-between">
                    <img src={MVML} width={20} height={20} alt="metaverse mind lab" class="mx-4" />
                    <img src={CloseIcon} width={20} height={20} alt="metaverse mind lab" class="mx-4" onClick={() => setChat(false)} />
                </div>
                <ChatContent messages={messages} loading={loading} />
                <div class="relative border-t-[1px] text-base">
                    <textarea value={currentMessage} onChange={(e)=> { setCurrentMessage(e.target.value) }} class="my-2 text-sm w-full pl-3 pr-12 text-base focus:outline-none resize-none" rows="3" type="text"  placeholder="Ask anything to Metaverse Mind Lab " />
                    <img src={Send} width={20} height={20} alt="metaverse mind lab" class="absolute  bottom-8 right-4" 
                    onClick={onSendMessage}/>
                </div>

            </div>
        </Fragment>
    );
};


export default ChatWindow;