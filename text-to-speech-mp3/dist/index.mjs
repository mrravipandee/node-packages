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
import googleTTS from "google-tts-api";
import fs from "fs";
import https from "https";
function textToSpeech(text, filename = "output.mp3", lang = "en") {
  return __async(this, null, function* () {
    try {
      const url = googleTTS.getAudioUrl(text, {
        lang,
        slow: false,
        host: "https://translate.google.com"
      });
      const file = fs.createWriteStream(filename);
      https.get(url, (res) => {
        res.pipe(file);
        file.on("finish", () => {
          file.close();
          console.log(`\u2705 Saved MP3 as ${filename}`);
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
