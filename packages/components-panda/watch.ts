#!/usr/bin/env bun
import { $, spawn } from "bun";

const bun = await $`which bun`.text();

const buildProcess = spawn([bun, "run", "build", "--watch", "--clearScreen", "false"], { stdout: "inherit", stderr: "inherit", cwd: process.cwd()  });
const genCssProcess = spawn([bun, "run", "gen:css", "--watch"], { stdout: "inherit", stderr: "inherit", cwd: process.cwd() });

await buildProcess.exited;
await genCssProcess.exited;




