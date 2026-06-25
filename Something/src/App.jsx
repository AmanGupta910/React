import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyinfo";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  // Fetch currency data
  const currencyInfo = useCurrencyInfo(from.toLowerCase());

  // Dropdown options
  const options = Object.keys(currencyInfo || {});

  // Swap currencies
  const swap = () => {
    const prevFrom = from;

    setFrom(to);
    setTo(prevFrom);

    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  // Convert currency
  const convert = () => {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/6353321/pexels-photo-6353321.jpeg')",
      }}
    >
      <div className="w-full max-w-md mx-auto">
        <div className="border border-gray-300 rounded-xl p-5 backdrop-blur-md bg-white/30 shadow-lg">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            {/* FROM */}
            <div className="mb-2">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                selectCurrency={from}
                onAmountChange={setAmount}
                onCurrencyChange={setFrom}
              />
            </div>

            {/* SWAP BUTTON */}
            <div className="relative h-2">
              <button
                type="button"
                onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-md border border-white"
              >
                Swap
              </button>
            </div>

            {/* TO */}
            <div className="mt-4 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                selectCurrency={to}
                onCurrencyChange={setTo}
                amountDisable
              />
            </div>

            {/* CONVERT BUTTON */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition"
            >
              Convert {from} to {to}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;