import { useEffect, useState } from "react";
import { BIP39_WORDLIST } from "./constants/bip39words";
import { Checkbox } from "./components/ui/checkbox";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

function App() {
  const [bits, setBits] = useState(Array(11).fill(false)); // 11 bits for 2049 words (2^11 = 2048)
  const [wordIndex, setWordIndex] = useState(0);
  const [inputWord, setInputWord] = useState("");

  const [items, setItems] = useState<string[]>([]);

  const bitsToDecimal = (bitsArray: boolean[]) => {
    return bitsArray.reduce((acc, bit, index) => {
      return acc + (bit ? Math.pow(2, bitsArray.length - 1 - index) : 0);
    }, 0);
  };

  const decimalToBits = (decimal: number) => {
    const bitsArray = Array(11).fill(false);
    let num = decimal;

    for (let i = 10; i >= 0; i--) {
      const power = Math.pow(2, i);
      if (num >= power) {
        bitsArray[10 - i] = true;
        num -= power;
      }
    }

    return bitsArray;
  };

  useEffect(() => {
    const index = bitsToDecimal(bits);
    setWordIndex(index);
  }, [bits]);

  const handleWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(typeof e);
    const word = e.target.value.toLowerCase();
    setInputWord(word);

    const index = BIP39_WORDLIST.indexOf(word);
    if (index !== -1) {
      const newBits = decimalToBits(index);
      setBits(newBits);
      setWordIndex(index);
    }
  };

  const handleBitChange = (index: number) => {
    const newBits = [...bits];
    newBits[index] = !newBits[index];
    setBits(newBits);
  };

  const clearBits = () => {
    setBits(Array(11).fill(false));
    setInputWord("");
  };

  const handleAddItem = () => {
    setItems((prev) => [...prev, BIP39_WORDLIST[wordIndex]]);
  };

  const handleRemoveItem = (indexToRemove: number) => {
    setItems((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <main className="bg-zinc-950 text-gray-300 min-h-screen w-full font-pixel">
      <header className="max-w-[800px] mx-auto px-4 py-8">
        <h1 className="text-1xl text-white mb-4 font-black md:text-3xl">
          BIP-39 Dotmap Generator
        </h1>
      </header>
      <div className="max-w-[800px] mx-auto px-4 mb-8 text-gray-200 text-xs">
        ⚠️ This tool is for learning only. Never enter your actual wallet seed
        phrase. For your safety, clone the project from GitHub and run it
        offline on your own machine.
      </div>
      <div>
        <div className="max-w-[800px] mx-auto px-4">
          <div className="flex gap-4 justify-between flex-col md:flex-row">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Word</label>
              <Input
                type="text"
                value={inputWord}
                onChange={handleWordChange}
                placeholder="Type a BIP39 word..."
                className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col gap-2 mt-auto mx-auto">
              <label className="block text-sm text-gray-400 mb-2">
                Word dotmap
              </label>
              <div className="flex gap-2">
                {bits.map((bit, index) => (
                  <label key={index} className="flex flex-col items-center">
                    <Checkbox
                      checked={bit}
                      onCheckedChange={() => handleBitChange(index)}
                      className="w-6 h-6"
                    />
                    <span className="text-xl font-mono text-gray-100 mt-1">
                      {bit ? "1" : "0"}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="rounded-lg my-12">
              <div className="flex flex-col gap-4 justify-between md:flex-row">
                <div className="text-center">
                  <p className="text-sm text-gray-200 mb-1">Decimal index:</p>
                  <p className="text-2xl font-bold text-yellow-300">
                    {wordIndex}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-200 mb-1">BIP39 Word:</p>
                  <p className="text-2xl font-bold text-yellow-300">
                    {BIP39_WORDLIST[wordIndex] || "N/A"}{" "}
                    <Button onClick={handleAddItem} variant="outline">
                      <span className="text-2xl">+</span>
                    </Button>
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-200 mb-1">Binary:</p>
                  <p className="text-lg font-mono text-yellow-300">
                    {bits.map((bit) => (bit ? "1" : "0")).join("")}
                  </p>
                </div>
              </div>
              <Button
                className="w-full mt-4"
                variant="outline"
                onClick={clearBits}
              >
                Clear
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[800px] mx-auto px-4 pb-8 mb-[84px]">
        <h2 className="text-xl font-semibold text-gray-200 mb-4">
          Word List {items.length > 0 && `(${items.length})`}
        </h2>

        {items.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            <p className="text-lg">No items added yet</p>
            <p className="text-sm mt-2">
              Type something in the field above and click "+"
            </p>
          </div>
        ) : (
          <div>
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4"
              >
                <div className="flex items-center flex-1">
                  <span className="font-bold text-yellow-300 mr-4 min-w-[2rem]">
                    {index + 1}
                  </span>
                  <span className="text-white">-</span>
                  <span className="text-white ml-4 flex-1">{item}</span>
                </div>
                <Button
                  onClick={() => handleRemoveItem(index)}
                  className="ml-4 p-2"
                  title="Remove item"
                  variant="outline"
                >
                  remove
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
      <footer className="fixed bottom-0 left-0 w-full border-t border-gray-500 bg-zinc-950">
        <div className="max-w-[800px] mx-auto px-4 py-8 text-center text-gray-500">
          <p className="text-sm">
            Made with ❤️ by{" "}
            <a href="https://github.com/imperadorxs" target="_blank">
              imperadorxs 🇧🇷
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}

export default App;
