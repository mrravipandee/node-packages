const googleTTS = require('google-tts-api');
import fs from 'fs';
import https from 'https';

export async function textToSpeech(text: string, fileName: string) {
  try {
    const url = googleTTS.getAudioUrl(text, {
      lang: 'en',
      slow: false,
      host: 'https://translate.google.com',
    });

    const file = fs.createWriteStream(`${fileName}.mp3`);
    https.get(url, (res) => {
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('✅ Audio saved successfully!');
      });
    });
  } catch (err) {
    console.error('❌ Error generating audio:', err);
  }
}
