import { SlPaperClip } from "react-icons/sl";
import { SlOptionsVertical } from "react-icons/sl";

function OpenChat() {
    return ( 
        <div className="h-screen w-screen flex flex-col">
            <div className="flex items-center p-2 bg-blue-dark text-white justify-between ">
            <div className=" ml-4 mr-4 h-12 w-12 bg-blue-200 rounded-full"></div>
            <div className="flex pr-4">
              <SlPaperClip className="mr-10 text-xl"/>
              <SlOptionsVertical className="text-xl"/>
              </div>
            </div>
            <div className="flex-1 p-4 bg-blue-darker overflow-y-scroll">
              <div className="mb-4">
                <div className="bg-blue-neutral p-2 rounded shadow-md w-max">
                  <p className="text-sm">Hola, ¿cómo estás?</p>
                </div>
                <div className="text-xs text-gray-500 mt-1">10:00 AM</div>
              </div>
              <div className="mb-4 flex justify-end">
                <div className="bg-blue-dark text-white p-2 rounded shadow-md w-max">
                  <p className="text-sm">¡Hola! Estoy bien, ¿y tú?</p>
                </div>
                <div className="text-xs text-gray-500 mt-1">10:02 AM</div>
              </div>
            </div>

            {/* Input Field */}
            <div className="flex items-center p-4 bg-blue-darker border-t border-blue-dark">
              <input
                type="text"
                className="flex-1 p-2 border border-blue-darker rounded mr-2 bg-blue-dark text-white"
                placeholder="Escribe un mensaje"
              />
              <button className="bg-green-500 text-white p-2 rounded">
                Enviar
              </button>
            </div>
          </div>
     );
}

export default OpenChat;