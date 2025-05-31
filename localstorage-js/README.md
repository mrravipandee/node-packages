# localstorage-js

A lightweight and powerful JavaScript utility for handling `localStorage` operations with ease. It supports data expiry, backup/restore, and includes debug tools to simplify development. Works with Vanilla JS, React, Next.js, Vue, Angular, and more.

---

## 🚀 Features

- Simple `set` and `get` methods  
- Expiry support (auto-remove items after time)  
- Backup & restore storage data  
- Debug logging for development  
- Works with all JavaScript frameworks  
- Zero dependencies

---

## 📦 Installation

```bash
npm install @mrravipandee/localstorage-js
```

---

## 📚 Usage

### Basic Usage (Vanilla JS / ES Module)

```js
import { storage } from '@mrravipandee/localstorage-js';

// Set and Get
storage.setItem('user', { name: 'Ravi', role: 'Developer' });
console.log(storage.getItem('user'));
```

### Expiry Support

```js
// Store with 1-minute expiry
storage.setWithExpiry('session', 'abc123', 1);
console.log(storage.getWithExpiry('session'));
```

### Backup & Restore

```js
const backup = storage.backup();
storage.clear();
storage.restore(backup);
```

### Debugging

```js
storage.debugSet('email', 'imravipanday@gmail.com');
storage.debugGet('email');
```

---

## 🧪 Example (HTML Test)

Create a file `test.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Test LocalStorage</title>
  </head>
  <body>
    <h2>Check Console for Output</h2>
    <script type="module">
      import { storage } from '../src/index.js';

      storage.setItem('user', { name: 'Ravi', role: 'Dev' });
      console.log('User:', storage.getItem('user'));

      storage.setWithExpiry('session', 'abc123', 1);
      console.log('Session:', storage.getWithExpiry('session'));

      const backup = storage.backup();
      console.log('Backup:', backup);

      storage.clear();
      console.log('After clear:', storage.getItem('user'));

      storage.restore(backup);
      console.log('Restored:', storage.getItem('user'));

      storage.debugSet('email', 'imravipanday@gmail.com');
      storage.debugGet('email');
    </script>
  </body>
</html>
```

---

## 🛠 Tech Stack
- JavaScript (ES6)
- LocalStorage API

---

## ✍ Author

**Ravi Pandey**  
Web: [https://imravidev.vercel.app](https://imravidev.vercel.app)  
Email: imravipanday@gmail.com

---

## 📦 GitHub Repo

[https://github.com/mrravipandee/node-packages/tree/main/localstorage-js](https://github.com/mrravipandee/node-packages/tree/main/localstorage-js)

---

## 🔒 License

MIT License
