import crypto from "crypto";

// const defaultKey = crypto.randomBytes(24);
const defaultSalt = crypto.randomBytes(16);
const algorithm = "sha256";

export function generateHash(password, salt = defaultSalt) {
  const hash = crypto.createHash(algorithm);
  hash.update(password, "utf8");
  hash.update(salt);
  let hashedPassword = hash.digest("hex");
  //   console.log(hashedPassword);
  return { hashedPassword, salt };
}

generateHash("dupa", "dupencyjka");
