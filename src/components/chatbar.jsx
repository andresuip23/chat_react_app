import { SlOptionsVertical } from "react-icons/sl";
import { SlSpeech } from "react-icons/sl";
import { AiOutlineSearch } from "react-icons/ai";
import data from "../data.json";
function ChatBar() {
  return (
    <>
      <div className="flex flex-col w-5/12 ">
        <div className="flex items-center p-2 bg-blue-dark text-white justify-between pr-4 border-r border-blue-darker">
          <div className=" ml-4 mr-4 h-12 w-12 bg-blue-200 rounded-full"></div>
          <div className="flex">
            <SlSpeech className="mr-4 text-xl" />
            <SlOptionsVertical className="text-xl" />
          </div>
        </div>
        <div className="flex items-center p-2 bg-blue-darker pr-8 ">
          <AiOutlineSearch className="mr-4 ml-3 text-white" />
          <input
            type="text"
            className="flex-1 p-1  rounded mr-2"
            placeholder="Escribe un mensaje"
          />
        </div>
        <div className=" h-screen overflow-y-auto overscroll-contain ">
        {data.map((data, index) => (
          <div className="flex items-center h-20 bg-blue-darker border-t border-blue-dark" key={index}>
            <div className=" ml-4 mr-4 h-12 w-12 bg-blue-200 rounded-full"></div>
            <div className="flex flex-col">
              <div>
                <h1 className="font-bold text-white">{data.Nickname}</h1>
              </div>
              <div>
                <h2 className="text-gray-400 text-sm">{data.LastMessage}</h2>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </>
  );
}

export default ChatBar;
