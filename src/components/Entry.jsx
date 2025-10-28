import react from "react";
import logo from "../assets/react.svg";
import user from "../assets/menu/user.png"
import "./Entry.css";
// import "./index.css"
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Entry = () => {

  
    const navigate = useNavigate();
    let chatsCard = useRef(null);
    // console.log(chatsCard)
    let userCard;

    useEffect(() => {
        const chatsCard = document.querySelectorAll(".user-card");
      
        const handleUserClick = (card) => {
          const userInfo = card.querySelector(".user-profile");
      
          if (userInfo) {
            const userImage = userInfo.querySelector("img")?.src || "";
            const userName = userInfo.querySelector("strong")?.textContent.trim() || "";
            const userMessage = userInfo.querySelector("small").textContent.trim() || ""
      
            // ✅ Save only the clicked user
            localStorage.setItem("avatar", userImage);
            localStorage.setItem("name", userName);
            localStorage.setItem("message", userMessage)
            console.log(`You have selected ${userName}`)
      
            // ✅ Navigate after saving
            navigate("/interface");
          }
        };
      
        chatsCard.forEach((card) => {
          card.addEventListener("click", () => handleUserClick(card));
        });
      
        // ✅ Cleanup
        return () => {
          chatsCard.forEach((card) => {
            card.replaceWith(card.cloneNode(true)); // removes all listeners safely
          });
        };
      }, [navigate]);

    // const params = new URLSearchParams(window.location.search);
    // const name = params.get("name");
    // const avatar = params.get("avatar");
    // console.log(name, avatar);

    return (
        <>
        <div className="container">
            <div className="menu">
                <div className="logo">
                   <div className="userAvatar">
                   <img id="userAvatar" style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%"
                    }} src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600' alt="user" />
                   </div>
                   <div className="user">
                    <h2>Chats</h2>
                   </div>
                </div>
                <div className="Add">
                    <button> <i className="fa-solid fa-plus"></i></button>
                </div>
            
                </div>
                <div className="search">
                    <input type="search" placeholder="Search" id="searchInput" />
                </div>
                {/* Users Div */}
                <div className="contacts">
                    <div className="contactsCard">
                        <div ref={chatsCard} className="user-card"  >
                            <div className="user-profile">
                                <img src="https://images.unsplash.com/photo-1701615004837-40d8573b6652?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" alt="user 1" />
                                <div className="user-infos">
                                <span className="user-name"><strong>Sara Saners</strong></span>
                               <p> <small>can you buy me dinner?</small></p>
                                </div>
                            </div>
                            <div className="user">
                                <button>12:35</button><br />
                                <button id="msg-indicator">100</button>
                            </div>
                        </div>
                        <div ref={chatsCard} className="user-card"  >
                            <div className="user-profile">
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600" alt="user 2" />
                                <div className="user-infos">
                                <span className="user-name"><strong>Doris Diaz</strong></span>
                               <p> <small>Read this article, it is so awesome...</small></p>
                                </div>
                            </div>
                            <div className="user">
                                <button>12:35</button><br />
                                <button id="msg-indicator">99+</button>
                            </div>
                        </div>
                        <div ref={chatsCard} className="user-card"  >
                            <div className="user-profile">
                                <img src="https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" alt="user 3" />
                                <div className="user-infos">
                                <span className="user-name"><strong>Mich Gabriel</strong></span>
                               <p> <small>Where are you at? I'm here.</small></p>
                                </div>
                            </div>
                            <div className="user">
                                <button>12:35</button><br />
                                <button id="msg-indicator">3</button>
                            </div>
                        </div>
                        <div ref={chatsCard} className="user-card"  >
                            <div className="user-profile">
                                <img src="https://images.unsplash.com/photo-1678286742832-26543bb49959?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" alt="user 4" />
                                <div className="user-infos">
                                <span className="user-name"><strong>Alvarez Fox</strong></span>
                               <p> <small>What do you need?</small></p>
                                </div>
                            </div>
                            <div className="user">
                                <button>12:35</button><br />
                                {/* <button id="msg-indicator">100</button> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Bottom Container */}
                <div className="bottomContents">
                    <div className="bottomContainer">
                        <div className="camera"></div>
                    </div>
                </div>
            </div>  
        </>
    );
};

export default Entry;