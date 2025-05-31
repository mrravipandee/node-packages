// 📌 localstorage-js package by Ravi Pandey
//  Main Export
export const storage = {
  //  Set item without expiry
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },

  //  Get item
  getItem: (key) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  },

  //  Remove item
  removeItem: (key) => {
    localStorage.removeItem(key);
  },

  //  Clear all storage
  clear: () => {
    localStorage.clear();
  },

  //  Set with Expiry (in minutes)
  setWithExpiry: (key, value, minutes) => {
    const now = new Date();
    const expiryData = {
      value,
      expiry: now.getTime() + minutes * 60000, // minutes to milliseconds
    };
    localStorage.setItem(key, JSON.stringify(expiryData));
  },

  //  Get with Expiry
  getWithExpiry: (key) => {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) return null;

    const item = JSON.parse(itemStr);
    if (item.expiry && new Date().getTime() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }
    return item.value || null;
  },

  //  Backup (all or filtered by prefix)
  backup: (prefix = '') => {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(prefix)) {
        data[key] = localStorage.getItem(key);
      }
    }
    return JSON.stringify(data);
  },

  //  Restore from JSON backup
  restore: (json, prefix = '') => {
    try {
      const data = JSON.parse(json);
      Object.entries(data).forEach(([key, value]) => {
        if (key.startsWith(prefix)) {
          localStorage.setItem(key, value);
        }
      });
    } catch (e) {
      console.error("Restore failed:", e);
    }
  },

  //  Debug versions
  debugSet: (key, value) => {
    console.log(`Setting ${key}:`, value);
    storage.setItem(key, value);
  },

  debugGet: (key) => {
    const val = storage.getItem(key);
    console.log(`Getting ${key}:`, val);
    return val;
  },
};
