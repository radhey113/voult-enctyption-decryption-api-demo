import crypto from "crypto";
import { cryptoKey, encryptionIV } from "../config/crypto.js";

/**
 * Encrypt data
 * @param {*} data
 * @returns
 */
export function encryptData(data) {
  const cipher = crypto.createCipheriv(
    process.env.ENCRYPTION_METHOD,
    cryptoKey,
    encryptionIV
  );
  return Buffer.from(
    cipher.update(JSON.stringify(data), "utf8", "hex") + cipher.final("hex")
  ).toString("base64"); // Encrypts data and converts to hex and base64
}

/**
 * Decrypt data
 * @param {*} encryptedData
 * @returns
 */
export function decryptData(encryptedData) {
  const buff = Buffer.from(encryptedData, "base64");
  const decipher = crypto.createDecipheriv(
    process.env.ENCRYPTION_METHOD,
    cryptoKey,
    encryptionIV
  );
  return (
    decipher.update(buff.toString("utf8"), "hex", "utf8") +
    decipher.final("utf8")
  ); // Decrypts data and converts to utf8
}
