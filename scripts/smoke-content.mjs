import fs from 'node:fs';
import { products, getProducts, getActiveBuyLink } from '../src/config/products.ts';
import { fileURLToPath } from 'node:url';

const files = { app: '../src/App.tsx', copy: '../src/copy.ts', products: '../src/config/products.ts', html: '../index.html', env: '../.env.example' };
const contents = {};
for (const [k, v] of Object.entries(files)) { try { contents[k] = fs.readFileSync(fileURLToPath(new URL(v, import.meta.url)), 'utf8'); } catch(e) { console.error(`Cannot read ${k}: ${e.message}`); } }
let p = 0, f = 0;
function check(n, c) { if(c) { p++; console.log(`  ok   ${n}`); } else { f++; console.error(`  FAIL ${n}`); } }
console.log('\nLANY Books — Smoke guard\n');
check('no (555) in app', !(contents.app||'').includes('(555)'));
check('no (555) in copy', !(contents.copy||'').includes('(555)'));
check('no GATE visible', !(contents.products||'').includes('(GATE)'));
check('no bookingPlaceholder', !(contents.app||'').includes('bookingPlaceholder'));
check('no Purchase Now', !(contents.copy||'').includes('Purchase Now'));
check('no Comprar ahora', !(contents.copy||'').includes('Comprar ahora'));
check('all checkout links disabled', products.length > 0 && products.every(p => p.stripeLink === null && getActiveBuyLink(p) === '#contact'));
check('Spanish catalog preserves product identities and prices', getProducts('es').every((p, i) => p.id === products[i].id && p.price === products[i].price && p.stripeLink === null));
check('Spanish catalog translated', getProducts('es').every(p => p.priceNote === 'Precio por confirmar' && p.name !== products.find(original => original.id === p.id).name));
check('no InStock', !(contents.html||'').includes('InStock'));
check('no 150.00 Offer', !(contents.html||'').includes('"150.00"'));
check('no fake $150/$20 price copy', !(contents.copy||'').includes('$150') && !(contents.copy||'').includes('$20'));
check('no online-store claim', !(contents.copy||'').toLowerCase().includes('online store') && !(contents.copy||'').toLowerCase().includes('tienda en linea'));
check('document.lang set', (contents.app||'').includes('document.documentElement.lang'));
check('default lang is English', (contents.app||'').includes("useState<Lang>('en')"));
check('canonical uses vercel', (contents.html||'').includes('lany-books-web.vercel.app'));
check('no VITE_CONTACT_PHONE', !(contents.env||'').includes('VITE_CONTACT_PHONE'));
check('no VITE_BOOKING_HREF', !(contents.env||'').includes('VITE_BOOKING_HREF'));
check('no invented licensing claims', !(contents.products||'').toLowerCase().includes('license'));
check('no invented digital companion claims', !(contents.products||'').toLowerCase().includes('digital companion'));
check('no invented read-aloud claims', !(contents.products||'').toLowerCase().includes('read-aloud'));
check('no invented teacher dashboard claims', !(contents.products||'').toLowerCase().includes('dashboard'));
check('no invented training claims', !(contents.products||'').toLowerCase().includes('training'));
check('no invented dedicated support claims', !(contents.products||'').toLowerCase().includes('dedicated support'));
check('OWNER-DECISIONS.md exists', fs.existsSync(fileURLToPath(new URL('../OWNER-DECISIONS.md', import.meta.url))));
console.log(`\n${p} passed, ${f} failed\n`);
process.exit(f ? 1 : 0);

