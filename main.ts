// Everyday Things, Two Lines — line one explains one everyday thing to a
// 10-year-old in one vivid sentence; line two says what the analogy maps.
// First draft.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY =
  'A toaster is a tiny sun-tanning bed for bread: two hot glowing bars hug each slice until it turns golden, and if you leave it too long it comes out wearing a black sweater.\n' +
  'The bars are the sun, the bread is you on holiday — and the black sweater is a sunburn.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY, 'utf8');
