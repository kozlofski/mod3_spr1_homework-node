import crypto from "crypto";

const defaultSalt = crypto.randomBytes(16);
const algorithm = "sha256";

export default function generateHash(password, salt = defaultSalt) {
  const hash = crypto.createHash(algorithm);
  hash.update(password, "utf8");
  hash.update(salt);
  let hashedPassword = hash.digest("hex");
  return { hashedPassword, salt };
}
