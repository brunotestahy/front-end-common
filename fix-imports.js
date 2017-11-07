const fs = require("fs-extra");

class ImportFixer {
  constructor() {
    const libStr = fs.readFileSync("./fix.me.json");

    if (!this.isEmpty(libStr)) {
      this.libs = JSON.parse(libStr);

      if (!this.isEmpty(this.libs) && !this.isEmpty(this.libs.entries)) {
        this.libs = this.libs.entries.map(lib => {
          let from = lib.from;
          from.match(/\W/g).forEach(c => (from = from.replace(c, "\\" + c)));
          return {
            from,
            to: lib.to
          };
        });
        this.solved = [];
        this.timer = null;
      }
    }
  }

  isEmpty(value) {
    if (typeof value === "string") {
      return value == null || value.trim().length === 0;
    }
    return value == null || value.length === 0;
  }

  fixIt() {
    console.log("---------- Import Fixer start -------------");

    if (this.solved == null) {
      console.log("nothing to fix");
    } else {
      const folders = ["./.ng_build/", "./dist/"];

      folders.forEach(folder => {
        const bundles = `${folder}bundles/`;
        const frontEndCommon = `${folder}front-end-common/`;

        const bundlesFiles = fs.readdirSync(bundles);
        const fronEndCommonFiles = fs.readdirSync(frontEndCommon);

        const filePaths = [];

        bundlesFiles.forEach(file => {
          filePaths.push(`${bundles}${file}`);
        });

        fronEndCommonFiles.forEach(file => {
          filePaths.push(`${frontEndCommon}${file}`);
        });

        const files = bundlesFiles.concat(fronEndCommonFiles);

        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const filePath = filePaths[i];
          let fileContent = fs.readFileSync(filePath).toString();
          this.libs.forEach(lib => {
            const importRegex = new RegExp(`from \\'${lib.from}\\'`, "g");
            const requireRegex = new RegExp(
              `require\\(\\'${lib.from}\\'\\)`,
              "g"
            );
            if (fileContent.match(importRegex)) {
              console.log(`${lib.to} import fixed at ${filePath}`);
              fileContent = fileContent.replace(
                new RegExp(`from \\'${lib.from}\\'`, "g"),
                `from '${lib.to}'`
              );
            }
            if (fileContent.match(requireRegex)) {
              console.log(`${lib.to} require fixed at ${filePath}`);
              fileContent = fileContent.replace(
                new RegExp(`require\\(\\'${lib.from}\\'\\)`, "g"),
                `require('${lib.to})'`
              );
            }
          });
          fs.writeFileSync(filePath, fileContent);
        }
      });
    }
  }
}

class CssCopy {
  copyToDist() {
    console.log("---------- CSS Copy Start -------------");

    fs.copy("./src/assets/css/", "./dist/css/", err => {
      if (err) return console.error(err);
      console.log("css folder copied to dist!");
      process.exit();
    });
  }
}

const fixer = new ImportFixer();
const cssCopy = new CssCopy();

fixer.fixIt();
cssCopy.copyToDist();
