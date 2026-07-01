import { spawn } from "node:child_process";

const port = process.env.PORT ?? "3000";
const baseUrl = `http://127.0.0.1:${port}`;
const paths = ["/", "/donate", "/donate/money"];

const server = spawn(process.execPath, ["scripts/start-standalone.mjs"], {
  stdio: ["ignore", "pipe", "pipe"],
  detached: true,
  env: { ...process.env, PORT: port, HOSTNAME: "127.0.0.1" },
});

let output = "";
server.stdout.on("data", (chunk) => {
  output += chunk.toString();
});
server.stderr.on("data", (chunk) => {
  output += chunk.toString();
});

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

try {
  let ready = false;
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      const response = await fetch(baseUrl, { redirect: "manual" });
      if (response.ok || response.status === 307 || response.status === 308) {
        ready = true;
        break;
      }
    } catch {
      // Server is still starting.
    }
    await sleep(500);
  }

  if (!ready) {
    throw new Error(`Server did not become ready. Output:\n${output}`);
  }

  for (const path of paths) {
    const response = await fetch(`${baseUrl}${path}`);
    if (!response.ok) {
      throw new Error(`${path} returned HTTP ${response.status}`);
    }
    console.log(`Smoke OK: ${path} returned HTTP ${response.status}`);
  }
} finally {
  try {
    process.kill(-server.pid, "SIGTERM");
  } catch {
    server.kill("SIGTERM");
  }

  await Promise.race([
    new Promise((resolve) => server.once("exit", resolve)),
    sleep(3000).then(() => {
      try {
        process.kill(-server.pid, "SIGKILL");
      } catch {
        server.kill("SIGKILL");
      }
    }),
  ]);
}
