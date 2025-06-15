import systemInfo from "./systemInfo.js";
import { urlInfo, defaultURL } from "./urlParser.js";
import generateHash from "./passwordHasher.js";
import { hashEventEmitter } from "./eventHandler.js";
import { argv } from "process";
import * as readline from "node:readline/promises";
import console from "node:console";
import { stdin as input, stdout as output } from "node:process";
import { url } from "node:inspector";
// import { markAsUncloneable } from "node:worker_threads";

const urlFromTerminal = argv[2] || null;
console.clear();

// console.log(systemInfo());
// console.log(urlParser(urlFromTerminal));
let exit = false;
const CLI = readline.createInterface({ input, output });
while (!exit) {
  const answer = await CLI.question(
    `What do you want to do?
[press 0 (zero) to display available options]
`
  );
  //   CLI.close();

  switch (answer.trim()) {
    case "0":
      console.log(`
1 - display system info
2 - display URL info (url had to be provided as an argument, otherwise a default example url will be parsed)
3 - input a password and see it's hashed form
0 - display this info
exit - exit application
`);
      break;
    case "1":
      handleDisplaySystemInfo();
      break;
    case "2":
      await handleParseUrl();
      break;
    case "3":
      await handleHashPassword();
      break;
    case "exit":
      handleExit();
      exit = true;
      break;
    default:
      console.log("Invalid option. Try again");
  }
}

function handleDisplaySystemInfo() {
  console.clear();
  console.log(`System info:\n\n${systemInfo()}\n`);
}

async function handleParseUrl() {
  console.clear();
  const option =
    await CLI.question(`URL Parser\n\nWhere do you want to parse an URL from?
1 - from argv (you had to provide this as an argument in terminal)
2 - provide it below, manually
3 - display an example URL
`);
  //   urlCLI.close();

  switch (option.trim()) {
    case "1":
      if (urlFromTerminal === null) {
        console.log(`URL not provided in argv\n`);
        break;
      }
      console.log(urlInfo(urlFromTerminal));
      break;
    case "2":
      const manualURL = await CLI.question(`Input your URL (with protocol):\n`);
      console.log(`${urlInfo(manualURL)}\n`);
      break;
    case "3":
      console.log(`${urlInfo(defaultURL)}\n`);
      break;
  }
}

async function handleHashPassword() {
  console.clear();
  console.log(`Password hasher\n`);

  const password = await CLI.question(`Input a password: `);
  let salt;
  const userWantsToInputSalt = await CLI.question(
    `Do you want to provide salt? [y/n] `
  );
  if (userWantsToInputSalt.match(/[yY]|yes|Yes/)) {
    salt = await passwordCLI.question(`Provide salt: `);
  }

  const hashObject = generateHash(password, salt);

  if ("hashedPassword" in hashObject) {
    hashEventEmitter.emit("hashGenerated");
  }
  console.log(
    `\nHashed password: ${hashObject.hashedPassword}\nSalt: ${hashObject.salt}\n`
  );
}

function handleExit() {
  console.clear();
  console.log("Terminating application");
}

process.on("exit", () => {
  CLI.close();
  console.log(`Goodbye`);
});
