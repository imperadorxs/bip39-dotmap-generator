# BIP-39 Dotmap Generator

A simple educational tool that converts BIP-39 mnemonic words into their corresponding binary representation — and vice versa.  
You can also add words to a live list with indexed order display.

![BIP-39 Dotmap Generator Screenshot](.git/screenshot.png)

> ⚠️ **Security Notice:**  
> This site is intended for **testing and educational purposes only**.  
> For better security, download the code from GitHub and run it locally on your own machine with the internet disconnected.

---

## ✨ Features

- 🔡 Convert BIP-39 words to binary (bit) representation
- 🔁 Convert binary bits back into BIP-39 words
- 📋 Add and manage a FIFO list of words with index tracking
- 🎮 Retro pixel interface inspired by 8-bit style
- ⚛️ Built with modern web tools (React, Vite, Tailwind, shadcn/ui)

---

## 📋 Prerequisites

Make sure you have **Node.js** installed on your machine:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- npm (comes with Node.js)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/imperadorxs/bip39-dotmap-generator.git
cd bip39-dotmap-generator
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

### 4. Open in browser

Visit `http://localhost:5173` to see the app running.

---

## 📖 How to Use

### Binary to Word Conversion
1. Check/uncheck the 11 bit checkboxes to create a binary pattern
2. The corresponding BIP-39 word will appear automatically
3. View the decimal index and binary representation

### Word to Binary Conversion
1. Type a valid BIP-39 word in the input field
2. The checkboxes will update to show the binary representation
3. See the word's position in the BIP-39 wordlist

### Word List Management
1. Add words to create a numbered list
2. View the index order of your selected words
3. Clear the list when needed

---

## 🛠 Tech Stack

- **React** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components

---

## 🏗 Build for Production

```bash
npm run build
```

The optimized files will be generated in the `dist/` folder.

---

## 📄 License

MIT License - feel free to use this project for educational purposes.

---

⭐ **Star this repo if it helped you understand BIP-39 better!**

---

## 💝 Support This Project

If this tool helped you understand BIP-39 better, consider supporting its development:

**Bitcoin:** `bc1pkrgzkhq5rl0l388crkm3mhse088ll5kefzcexgft3dv7sja4zg6qcdapae`

**Ethereum:** `0xd28A3C167Ef81A5B1adb31ae0b57BfEFC2166154`

**Solana:** `4kW7QzizSo84mZZdZ93AR7MoUJFsJrnh3QyRizTi4Ho2`

Every satoshi helps keep this project maintained and improved! 🙏