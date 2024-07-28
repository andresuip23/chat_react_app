import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  return (
    <>
      <div className="flex">
        <div className="flex p-4 bg-gray-100 overflow-y-scroll">
          {/* contactos */} 
          <div className="flex items-center h-20 w-5/12 bg-green-500">
            <div className=" ml-4 mr-4 h-16 w-16 bg-blue-200 rounded-full">
            </div>
            <div className="flex flex-col">
              <div>
              <h1 className="font-bold">Rolando Perez</h1>
              </div>
              <div>
                <h2 className="text-gray-300 text-sm">Haceme un pete</h2>
              </div>
            </div>

          </div>
          <div className="mb-4"></div>
          {/* chat */}
          <div className="h-screen w-screen flex flex-col">
            <div className="flex items-center p-4 bg-green-500 text-white">
              <h1 className="text-lg">WhatsApp Clone</h1>
            </div>
            <div className="flex-1 p-4 bg-gray-100 overflow-y-scroll">
              <div className="mb-4">
                <div className="bg-white p-2 rounded shadow-md w-max">
                  <p className="text-sm">Hola, ¿cómo estás?</p>
                </div>
                <div className="text-xs text-gray-500 mt-1">10:00 AM</div>
              </div>
              <div className="mb-4 flex justify-end">
                <div className="bg-green-500 text-white p-2 rounded shadow-md w-max">
                  <p className="text-sm">¡Hola! Estoy bien, ¿y tú?</p>
                </div>
                <div className="text-xs text-gray-500 mt-1">10:02 AM</div>
              </div>
            </div>

            {/* Input Field */}
            <div className="flex items-center p-4 bg-white border-t border-gray-300">
              <input
                type="text"
                className="flex-1 p-2 border border-gray-300 rounded mr-2"
                placeholder="Escribe un mensaje"
              />
              <button className="bg-green-500 text-white p-2 rounded">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
