#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { exec,execSync } from "child_process";
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
        () => {
          console.log('✔ extensions.json')
        }
      );
      fs.writeFileSync(
        `${process.cwd()}/.vscode/settings.json`,
        `{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always"
  }
}`,
        () => {
          console.log('✔ settings.json')
        }
      );

      const extensions = [
        { id: 'Vue.volar', name: 'Vue Language Server Protocol' },
        { id: 'EditorConfig.EditorConfig', name: 'EditorConfig' },
        { id: 'bradlc.vscode-tailwindcss', name: 'Tailwindcss Language Server Protocol' },
        { id: 'dbaeumer.vscode-eslint', name: 'ESLint' },
      ]

      const installed = Buffer.from(execSync('code --list-extensions'),'utf-8').toString().split(/[\s\n]/)

      for (const extension of extensions) {
        if(installed.indexOf(extension.id) === -1) {
          execSync(`code --install-extension ${extension.id}`)
          console.log(`✔ 成功安装 ${extension.name}`)
        } else {
          console.log(`✔ ${extension.name}`)
        }
      }

      console.log('✔ 完成插件安装')
    }
  });
});
