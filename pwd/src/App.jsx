import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [Numberald, setNumberAld] = useState(false);
  const [Char, setChar] = useState(false);
  const [pwd, setpwd] = useState("");

  // useRef Hook
  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (Numberald) {
      str += "0123456789";
    }

    if (Char) {
      str += "!@#$^&*~`%";
    }

    for (let i = 1; i <= length; i++) {
      let chr = Math.floor(Math.random() * str.length);
      pass += str.charAt(chr);
    }

    setpwd(pass);
  }, [length, Numberald, Char]);

  useEffect(() => {
    passwordGenerator();
  }, [length, Numberald, Char, passwordGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, pwd.length);

    navigator.clipboard.writeText(pwd);
  }, [pwd]);

  return (
    <>
      <div className="w-full max-w-lg mx-auto mt-20 bg-gray-800 rounded-xl shadow-lg p-6">
        <h1 className="text-white text-2xl font-bold text-center mb-4">
          Password Generator
        </h1>

        <div className="flex shadow rounded-lg overflow-hidden">
          <input
            type="text"
            value={pwd}
            className="w-full px-4 py-3 outline-none text-gray-700 bg-white"
            placeholder="Generated Password"
            readOnly
            ref={passRef}
          />

          <button
            className="bg-blue-500 text-white px-4 hover:bg-blue-600 transition"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>

        <div className="flex items-center justify-between mt-4 text-orange-400 flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(Number(e.target.value));
              }}
            />
            <label className="whitespace-nowrap">
              Length: {length}
            </label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={Numberald}
              id="numberInput"
              onChange={() => {
                setNumberAld((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={Char}
              id="charInput"
              onChange={() => {
                setChar((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;