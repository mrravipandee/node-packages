# 🎙️ text-to-speech-mp3

A beginner-friendly Node.js + TypeScript package to convert text to speech (TTS) using the Google Translate API. Instantly generate `.mp3` audio files from plain text with a single function call — no API key required!

---

## 📦 Installation

Install the package in your Node.js project:

```bash
npm install text-to-speech-mp3
```

---

## 🚀 Quick Usage

You can use this package with either **CommonJS** or **ES Modules**, depending on your setup:

### ✅ CommonJS (default Node.js setup)

```js
// index.js
const { textToSpeech } = require('text-to-speech-mp3');

textToSpeech("Hello from CommonJS!", "output");
```

> No need to change your `package.json`.

---

### ✅ ES Module (import/export syntax)

1. In your `package.json`, add:
   ```json
   "type": "module"
   ```

2. Then in your file:

```ts
// index.js
import { textToSpeech } from 'text-to-speech-mp3';

textToSpeech("Hello from ESModule!", "output");
```

---

## 🧠 Function Details

```ts
textToSpeech(text: string, filename: string): Promise<void>
```

- `text` – The message to convert into speech.
- `filename` – The name for the output `.mp3` file (no `.mp3` extension needed).

---

## 📁 Example File Structure

```
your-project/
├── node_modules/
├── index.js
├── output.mp3
├── package.json
└── README.md
```

---

## 🌐 Language Support

By default, it uses English (`en`). You can customize the source to support other [Google Translate TTS languages](https://cloud.google.com/translate/docs/languages).

---

## 🛠 Requirements

- Node.js v14+
- Internet connection

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
[GitHub](https://github.com/mrravipandee)

---

## 📄 License

MIT – Free to use, modify, and distribute.

---

## 🤝 Contribute

Found a bug or want a new feature? Feel free to open an issue or submit a pull request!