import url from "url";
import { argv } from "process";

export function urlInfo(urlInString = urlFromTerminal) {
  const urlToParse = new url.URL(urlInString);
  const protocol = urlToParse.protocol;
  const hostname = urlToParse.hostname;
  const port = urlToParse.port;
  const pathname = urlToParse.pathname;
  const searchParams = urlToParse.searchParams;
  const hash = urlToParse.hash;

  console.log(`\nParsing:\n${urlInString}:\n`);
  return `Protocol: ${protocol}
Host name: ${hostname}
Port: ${port}
Path: ${pathname}
Search params: ${searchParams}
Hash: ${hash}`;
}

export const defaultURL =
  "https://user:password@www.example.com:8080/demo/example.cgi?utm_source=google&utm_medium=banner&utm_campaign=urlfilter#zahashowane";
