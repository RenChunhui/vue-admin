#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { exec } from "child_process";
import { platform } from "os";

// 创建本地 .env.local
fs.access(".env.local", (err) => {
  if (err && err.code === "ENOENT") {
    fs.writeFile(path.join(process.cwd(), ".env.local"), "", () => {
      console.log(`✔ 成功创建本地 .env.local`);
    });
  }
});

const command = platform() === "win32" ? "where" : "which";

exec(`${command} code`, (error) => {
  if (error) return;
  fs.stat(`${process.cwd()}/.vscode`, (err) => {
    if (err && err.code === "ENOENT") {
      fs.mkdirSync(`${process.cwd()}/.vscode`);
      fs.writeFileSync(
        `${process.cwd()}/.vscode/extensions.json`,
        `{
  "recommendations": [
    "Vue.volar",
    "dbaeumer.vscode-eslint"
  ]
}`,
        () => {}
      );
      fs.writeFileSync(
        `${process.cwd()}/.vscode/settings.json`,
        `{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always"
  }
}`,
        () => {}
      );
    }
  });
});
