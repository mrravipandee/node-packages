"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.textToSpeech = textToSpeech;
const googleTTS = require('google-tts-api');
const fs_1 = __importDefault(require("fs"));
const https_1 = __importDefault(require("https"));
function textToSpeech(text, fileName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const url = googleTTS.getAudioUrl(text, {
                lang: 'en',
                slow: false,
                host: 'https://translate.google.com',
            });
            const file = fs_1.default.createWriteStream(`${fileName}.mp3`);
            https_1.default.get(url, (res) => {
                res.pipe(file);
                file.on('finish', () => {
                    file.close();
                    console.log('✅ Audio saved successfully!');
                });
            });
        }
        catch (err) {
            console.error('❌ Error generating audio:', err);
        }
    });
}
