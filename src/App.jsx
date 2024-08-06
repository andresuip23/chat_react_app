import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ChatBar from "./components/chatbar";
import OpenChat from "./components/openChat";

function App() {
  return (
    <>
        <div className="flex bg-blue-100 overflow-y-scroll h-screen">
          <ChatBar/>     
          <OpenChat/>   
        </div>
    </>
  );
}

export default App;
