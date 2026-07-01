import { existsSync } from "node:fs";
import { spawn } from "node:child_process";

const serverEntry = existsSync("server.js")
  ? "server.js"
  : ".next/standalone/server.js";

if (!existsSync(serverEntry)) {
  console.error(
    `Could not find ${serverEntry}. Run \"npm run build\" before \"npm start\".`
  );
  process.exit(1);
}

const child = spawn(process.execPath, [serverEntry], {
  stdio: "inherit",
  env: {
    ...process.env,
    HOSTNAME: process.env.HOSTNAME ?? "0.0.0.0",
    PORT: process.env.PORT ?? "3000",
  },
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 0);
});
