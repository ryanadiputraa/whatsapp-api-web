import { AES, enc } from "crypto-js"

const KEY = String(import.meta.env.VITE_CRYPTO_KEY)
console.log(KEY)

export const encryptString = (text: string) => AES.encrypt(text, KEY).toString()

export const decryptString = (encryptedText: string) =>
  AES.decrypt(encryptedText, KEY).toString(enc.Utf8)
