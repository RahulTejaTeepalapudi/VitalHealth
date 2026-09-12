import { copyFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const browserOutput = resolve('dist', 'vital-health-web', 'browser');
const csrIndex = resolve(browserOutput, 'index.csr.html');
const staticIndex = resolve(browserOutput, 'index.html');

if (!existsSync(csrIndex)) {
  throw new Error(`Angular browser entry was not found at ${csrIndex}`);
}

copyFileSync(csrIndex, staticIndex);
console.log(`Created Amplify static entry: ${staticIndex}`);
