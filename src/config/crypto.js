import crypto from "crypto";
export const cryptoKey = crypto
  .createHash("sha512")
  .update(process.env.ENCRYPTION_SECRET_KEY)
  .digest("hex")
  .substring(0, 32);

export const encryptionIV = crypto
  .createHash("sha512")
  .update(process.env.ENCRYPTION_SECRET_VI)
  .digest("hex")
  .substring(0, 16);
