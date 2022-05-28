import { NextApiRequest } from "next";
import crypto from "crypto";

export const getIpFromReq = (req: NextApiRequest) => {
  if (
    req.headers["x-forwarded-for"] &&
    typeof req.headers["x-forwarded-for"] === "string"
  ) {
    return req.headers["x-forwarded-for"].split(",")[0];
  } else if (req.headers["x-real-ip"]) {
    return req.connection.remoteAddress;
  } else if (req.connection.remoteAddress) {
    return req.connection.remoteAddress;
  }
  return "default";
};

export const getEncryptedAndDecryptedIp = (ipOfUser: string) => {
  let algorithm = "aes256"; // or any other algorithm supported by OpenSSL
  let key = process.env.CRYPTO_KEY || ""; // or any key from .env
  let iv = process.env.CRYPTO_IV || ""; // or you can add static value from .env

  let cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(ipOfUser, "utf8", "hex") + cipher.final("hex");
  let decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted =
    decipher.update(encrypted, "hex", "utf8") + decipher.final("utf8");

  return {
    encrypted,
    decrypted,
  };
};
