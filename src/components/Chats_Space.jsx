import { react, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Entry.css";
import "./Chats_Space.css"

const Chats_Space = () => {
    const backLink = useNavigate();
    const backNavigate = useRef(null);
    // User Credentials Feetching
    const userImage = useRef(null);
    const userName = useRef(null);
    const [userDate, setUserDate] = useState("");
     // Display Time on chat
     const [timeSent, setTimesent] = useState("");
    useEffect(() => {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString("en-US", {
            weekday: "long",  // e.g., Tuesday
            year: "numeric",  // e.g., 2025
            month: "long",    // e.g., October
            day: "numeric"    // e.g., 27
        });
        const currentDates = currentDate.getDate();
        const currentMonth = currentDate.getMonth() + 1;
        const getYear = currentDate.getFullYear();
        const currentTime = currentDate.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true
        });
        console.log(currentTime);
        setTimesent(`${currentTime}`);
        setUserDate(`${formattedDate}`);
        console.log(userDate)
    })
    // Display the user
    const [user, setUser] = useState({
        name: "",
        avatar: "",
        message: ""
    })

    useEffect(() => {
        const name = localStorage.getItem("name");
        const avatar = localStorage.getItem("avatar");
        const message = localStorage.getItem("message");
        setUser({
            name, avatar, message
        })
    }, [])


    useEffect(() => {
        const NavigateHome = () => {
            backLink("/");
        }
        const backNav = backNavigate.current;
        backNav.addEventListener("click", NavigateHome);
        return () => {
            backNav.removeEventListener("click", NavigateHome);
        }
    });
    // Show and Hide chat
    const [isChatVisible, setIsChatVisible] = useState(false);
    // Send a message in the box
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [isSendVisible, setIsSendVisible] = useState(false);
    const inputChat = useRef(null);
    const sendIcon = useRef(null);
    const send = sendIcon.current;
    // useEffect(() => {
    //     const input = inputChat.current;
    //     //Chekc whether input is null before continuing;
    //     if (!input) return;
    //    const validateInput = () => {
    //     if (input.value.trim() === "") {
    //         setIsSendVisible(false);
    //     }else{
    //         setIsSendVisible(true)
    //     }
    //    };
    //    input.addEventListener("input", validateInput);
    //    return () => {
    //     input.removeEventListener("input", validateInput);
    //    }

    // }, [])

        const handleChat = () => {
            if (message.trim() === "") {
                alert("Cannot send empty message");
                return;
            }
            setIsChatVisible(true);

            // Add message to messages array
            setMessages((prev) => [...prev, message.trim()]);

            // Clear the input box
            setMessage("");
        };
            // Send Message when users clicks Enter
//     useEffect(() => {
//         const inputSend = inputChat.current;
//         if(!inputSend) return;
//             const handleKeyDown = (e) => {
//                 if (e.key === "Enter") {
//                     handleChat()
//                 }
//             };
//             inputSend.addEventListener("keydown", handleKeyDown);
//             return () => {
//                 inputSend.removeEventListener("keydown", handleKeyDown)
//             }
// }, [handleChat])
    return (
        <>
            <div className="chatInterface container">
                <div className="chatHeader">
                    <div className="backLink">
                        <button ref={backNavigate}>
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                    </div>
                    {/* User name */}
                    <div className="user-image">
                        <img src={user.avatar} alt={user.name} ref={userImage} />
                        <div className="username">
                            <p><strong ref={userName}>{user.name}</strong></p>
                            <p><small>typing...</small></p>
                        </div>
                    </div>
                    <div className="call">
                        <button>
                            <i className="fa-solid fa-phone" title="Place a call"></i>
                        </button>
                    </div>
                </div>
                <div className="indicator">
                    <small>{userDate}</small>
                </div>
                <div className="chatBody">
                    <div className="chatMessageContainer">
                        <div className="chatMessage">
                            <small> {user.message}</small>
                            
                        </div>
                        {isChatVisible && messages.map((msg, index) => (
                             <div className="userChat">
                             <small key={index}>{msg}</small>
                             <span><small id="time-sent">{timeSent}</small></span>
                         </div>
                        ))
                        }
                    </div>
                    <div className="chat-box">
                        <div className="chatInput">
                            <div className="central-reactions">
                                <div><i className="fa-regular fa-face-smile"></i></div>
                                <div className="internal">
                                    {isSendVisible && (
                                        <i className="fa-solid fa-paper-plane" ref={sendIcon} onClick={handleChat}></i>
                                    )}
                                    <i className="fa-solid fa-camera"></i>
                                </div>
                            </div>
                            <textarea  ref={inputChat} value={message} name="message" 
                             onChange={(e) => {
                                setMessage(e.target.value);
                                setIsSendVisible(e.target.value.trim() !== "");
                              }} placeholder="Type a message" id="chatInput" draggable="false" ></textarea>
                        </div>
                        <div className="voiceMessage">
                            <button>
                                <i className="fa-solid fa-microphone"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

};

export default Chats_Space;