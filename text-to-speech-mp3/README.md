# 🎙️ text-to-speech-mp3

A beginner-friendly Node.js + TypeScript package to convert text to speech (TTS) using the Google Translate API. Instantly generate `.mp3` audio files from plain text with a single function call — no API key required!

---

## 📦 Installation

Install the package in your Node.js project:

```bash
npm install text-to-speech-mp3
```

---

## 🚀 Usage

```ts
import { textToSpeech } from 'text-to-speech-mp3';

textToSpeech("Hello, welcome to my project!", "welcome");
// Creates a file named 'welcome.mp3' in your current directory
```

---

## 🧠 Function Details

```ts
textToSpeech(text: string, filename: string): Promise<void>
```

- **text** – The message to convert into speech.
- **filename** – The name for the output `.mp3` file (no need to include `.mp3` extension).

---

## 📁 Example File Structure

```
your-project/
├── node_modules/
├── src/
│   └── index.ts
├── dist/
│   └── output.mp3
├── package.json
└── README.md
```

---

## 🌐 Language Support

By default, it uses English (`en`). You can modify the source code to support other [Google Translate TTS languages](https://cloud.google.com/translate/docs/languages).

---

## 🛠 Requirements

- Node.js v14+
- Internet connection (for fetching TTS audio)

---

## ✨ Features

- 🔊 One-click audio generation
- ⚡ Fast and lightweight
- 🧩 TypeScript support
- ✅ No API keys or billing required

---

## 👨‍💻 Author

**Ravi Pandey**  
Helping developers and businesses bring voice to their ideas.

---

## 📄 License

MIT – Free to use, modify, and distribute.

---

## 🤝 Contribute

Found a bug or want a new feature? Feel free to open an issue or submit a pull request.
