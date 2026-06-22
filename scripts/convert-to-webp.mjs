import sharp from "sharp";
import { readdirSync, statSync } from "fs";
import { join, extname, basename } from "path";

const PUBLIC_DIR = new URL("../public", import.meta.url).pathname;

const targets = [
  "aboutus-card1.png",
  "aboutus-bg1.png",
  "contactus-bg1.png",
  "cta-box.png",
  "hero-bg.png",
  "hero-bg2.png",
  "ourwork-branding_sq1.png",
  "ourwork-fbpost_sq1.png",
  "ourwork-igreel_sq1.png",
  "ourwork-landingpage_h1.png",
  "ourwork-landingpage_h2.png",
  "ourwork-landingpage_sq1.png",
  "service-bg1.png",
  "whoweare-card.png",
  "work-bg1.png",
];

for (const file of targets) {
  const input = join(PUBLIC_DIR, file);
  const output = join(PUBLIC_DIR, file.replace(".png", ".webp"));
  try {
    const info = await sharp(input)
      .webp({ quality: 82, effort: 4 })
      .toFile(output);
    const originalSize = statSync(input).size;
    const saving = (((originalSize - info.size) / originalSize) * 100).toFixed(1);
    console.log(`✓ ${file} → ${file.replace(".png", ".webp")} | ${(originalSize/1024/1024).toFixed(1)}MB → ${(info.size/1024/1024).toFixed(1)}MB (${saving}% saved)`);
  } catch (err) {
    console.error(`✗ ${file}: ${err.message}`);
  }
}
console.log("\nDone.");
