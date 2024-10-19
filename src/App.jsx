import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [isDarkMode, setIsDarkMod] = useState(false);
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleReset = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const handleThem = () => {
    setIsDarkMod((prev) => !prev);
  };
  return (
    <div
      className={`flex w-full justify-center my-8 ${
        isDarkMode ? "bg-black" : "bg-white"
      } `}
    >
      <div
        className={`w-80  sm:w-96 md:w-[30rem] max-h-screen ${
          isDarkMode ? "bg-slate-600" : "bg-slate-300"
        } p-4 rounded-md shadow-lg`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2
            className={`font-bold text-2xl ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            calc
          </h2>
          <div className="flex justify-between gap-x-4 items-center">
            <p className={`${isDarkMode ? "text-white" : "text-black"}`}>
              THEME
            </p>
            <button
              onClick={handleThem}
              className=" w-8 h-8 rounded-full flex items-center justify-between"
            >
              {isDarkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <p
          className={`${
            isDarkMode ? "bg-slate-400 text-white" : "bg-white"
          } w-full h-20 my-6 rounded-md p-4 text-3xl`}
        >
          {input}
        </p>
        <div className="grid grid-cols-4 gap-4 bg-slate-300 w-full my-6 rounded-md p-4">
          <button
            onClick={() => handleClick("7")}
            className={`w-full h-16 text-2xl font-bold ${
              isDarkMode ? "bg-slate-400 text-white" : "bg-white"
            } bg-white rounded-md`}
          >
            7
          </button>
          <button
            onClick={() => handleClick("8")}
            className={`w-full h-16 text-2xl font-bold ${
              isDarkMode ? "bg-slate-400 text-white" : "bg-white"
            } bg-white rounded-md`}
          >
            8
          </button>
          <button
            onClick={() => handleClick("9")}
            className={`w-full h-16 text-2xl font-bold ${
              isDarkMode ? "bg-slate-400 text-white" : "bg-white"
            } bg-white rounded-md`}
          >
            9
          </button>
          <button
            onClick={handleDelete}
            className="w-full h-16 text-2xl font-bold rounded-md bg-green-700 text-white"
          >
            DEL
          </button>
          <button
            onClick={() => handleClick("4")}
            className={`w-full h-16 text-2xl font-bold ${
              isDarkMode ? "bg-slate-400 text-white" : "bg-white"
            } bg-white rounded-md`}
          >
            4
          </button>
          <button
            onClick={() => handleClick("5")}
            className={`w-full h-16 text-2xl font-bold ${
              isDarkMode ? "bg-slate-400 text-white" : "bg-white"
            } bg-white rounded-md`}
          >
            5
          </button>
          <button
            onClick={() => handleClick("6")}
            className={`w-full h-16 text-2xl font-bold ${
              isDarkMode ? "bg-slate-400 text-white" : "bg-white"
            } bg-white rounded-md`}
          >
            6
          </button>
          <button
            onClick={() => handleClick("+")}
            className={`w-full h-16 text-2xl font-bold ${
              isDarkMode ? "bg-slate-400 text-white" : "bg-white"
            } bg-white rounded-md`}
          >
            +
          </button>
          <button
            onClick={() => handleClick("1")}
            className={`w-full h-16 text-2xl font-bold ${
              isDarkMode ? "bg-slate-400 text-white" : "bg-white"
            } bg-white rounded-md`}
          >
            1
          </button>
          <button
            onClick={() => handleClick("2")}
            className={`w-full h-16 text-2xl font-bold ${
              isDarkMode ? "bg-slate-400 text-white" : "bg-white"
            } bg-white rounded-md`}
          >
            2
          </button>
          <button
            onClick={() => handleClick("3")}
            className={`w-full h-16 text-2xl font-bold ${
              isDarkMode ? "bg-slate-400 text-white" : "bg-white"
            } bg-white rounded-md`}
          >
            3
          </button>
          <button
            onClick={() => handleClick("-")}
            className={`w-full h-16 text-2xl font-bold ${
              isDarkMode ? "bg-slate-400 text-white" : "bg-white"
            } bg-white rounded-md`}
          >
            -
          </button>
          <button
            onClick={() => handleClick(".")}
            className={`w-full h-16 text-2xl font-bold ${
              isDarkMode ? "bg-slate-400 text-white" : "bg-white"
            } bg-white rounded-md`}
          >
            .
          </button>
          <button
            onClick={() => handleClick("0")}
            className={`w-full h-16 text-2xl font-bold ${
              isDarkMode ? "bg-slate-400 text-white" : "bg-white"
            } bg-white rounded-md`}
          >
            0
          </button>
          <button
            onClick={() => handleClick("/")}
            className={`w-full h-16 text-2xl font-bold ${
              isDarkMode ? "bg-slate-400 text-white" : "bg-white"
            } bg-white rounded-md`}
          >
            /
          </button>
          <button
            onClick={() => handleClick("*")}
            className={`w-full h-16 text-2xl font-bold ${
              isDarkMode ? "bg-slate-400 text-white" : "bg-white"
            } bg-white rounded-md`}
          >
            X
          </button>
          <button
            onClick={handleReset}
            className="w-full h-16 text-2xl font-bold col-span-2 text-white bg-green-700 rounded-md"
          >
            Reset
          </button>
          <button
            onClick={handleCalculate}
            className="w-full h-16 text-2xl font-bold col-span-2 text-white bg-orange-700 rounded-md"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
