import url from "url";
import { argv } from "process";

const URL =
  "https://user:password@www.example.com:8080/demo/example.cgi?utm_source=google&utm_medium=banner&utm_campaign=urlfilter#zahashowane";

// console.log(argv[2]);
const urlFromTerminal = argv[2] || "";

export function urlInfo(urlInString = urlFromTerminal) {
  const urlToParse = new url.URL(urlInString);
  const protocol = urlToParse.protocol;
  const hostname = urlToParse.hostname;
  const port = urlToParse.port;
  const pathname = urlToParse.pathname;
  const searchParams = urlToParse.searchParams;
  const hash = urlToParse.hash;

  const urlInfo = `
  Protocol: ${protocol}
  Host name: ${hostname}
  Port: ${port}
  Path: ${pathname}
  Search params: ${searchParams}
  Hash: ${hash}`;

  console.log(urlInfo);
}

urlInfo();
urlInfo(
  "https://user:password@www.google.com:8080/demogorgon/example.cgi?utm_source=google&utm_medium=banner&utm_campaign=urlfilter#zahashowane"
);
