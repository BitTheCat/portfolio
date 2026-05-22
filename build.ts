import * as fs from "https://deno.land/std@0.208.0/fs/mod.ts";
import * as path from "https://deno.land/std@0.208.0/path/mod.ts";

const BUILD_DIR = "./_site";

// Clean build directory
if (await fs.exists(BUILD_DIR)) {
  await fs.emptyDir(BUILD_DIR);
} else {
  await fs.ensureDir(BUILD_DIR);
}

// Copy index.md as index.html
const indexMd = await Deno.readTextFile("./index.md");
await Deno.writeTextFile(path.join(BUILD_DIR, "index.html"), indexMd);

// Copy styles.css
const stylesCss = await Deno.readTextFile("./styles.css");
await Deno.writeTextFile(path.join(BUILD_DIR, "styles.css"), stylesCss);

// Copy assets
const assetsDir = "./assets";
if (await fs.exists(assetsDir)) {
  await fs.copy(assetsDir, path.join(BUILD_DIR, "assets"), { overwrite: true });
}

console.log("✓ Build complete!");
console.log(`✓ Output: ${BUILD_DIR}/`);
console.log("✓ Ready for deployment");
