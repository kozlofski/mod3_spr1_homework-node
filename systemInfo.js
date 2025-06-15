import os from "os";

const hostName = os.hostname();
const osType = os.type();
const procArchitecture = os.arch();
const totalMemory = os.totalmem();
const freeMemory = os.freemem();

export default function systemInfo() {
  return `Host name: ${hostName}
Operation System: ${osType}
CPU architecture: ${procArchitecture}
Free memory: ${freeMemory} Bytes
Total memory: ${totalMemory} Bytes`;
}
