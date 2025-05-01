var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/index.ts
import fs from "fs";
import https from "https";
var googleTTS = __require("google-tts-api");
function textToSpeech(text, fileName) {
  return __async(this, null, function* () {
    try {
      const url = googleTTS.getAudioUrl(text, {
        lang: "en",
        slow: false,
        host: "https://translate.google.com"
      });
      const file = fs.createWriteStream(`${fileName}.mp3`);
      https.get(url, (res) => {
        res.pipe(file);
        file.on("finish", () => {
          file.close();
          console.log("\u2705 Audio saved successfully!");
        });
      });
    } catch (err) {
      console.error("\u274C Error generating audio:", err);
    }
  });
}
export {
  textToSpeech
};
