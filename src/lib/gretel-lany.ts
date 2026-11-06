export type Lang = 'es' | 'en';

export type ShopLink = {
  href: string;
  label: { es: string; en: string };
};

export type ShopTopic = {
  id: string;
  keywords: string[];
  es: string;
  en: string;
  links: ShopLink[];
  next: string[];
  ask: { es: string; en: string };
};

const anchor = (id: string, es: string, en: string): ShopLink => ({
  href: `#${id}`,
  label: { es, en },
});

const kitLink = anchor('package', 'Ver el kit completo', 'Explore the full kit');
const methodLink = anchor('program', 'Ver el método', 'Explore the method');
const productsLink = anchor('materials', 'Ver materiales', 'View materials');
const schoolsLink = anchor('schools', 'Ver opciones para escuelas', 'Explore school options');
const contactLink = anchor('contact', 'Ver contacto', 'View contact section');

export const SHOP_TOPICS = ['shop-kit', 'shop-method', 'shop-options', 'shop-order'];

export const SHOP_KB: ShopTopic[] = [
  {
    id: 'shop-kit',
    keywords: ['kit', 'package', 'paquete', 'included', 'includes', 'incluye', 'learning kit', 'materials', 'materiales'],
    es: 'El kit de La Cartilla de Gretel reúne un rotafolio de 17″ × 22″ con caballete, el libro del alumno de 92 páginas, carteles reproducibles de sílabas y vocales, tareas, evaluaciones y claves de respuestas, CD de poemas, guía del maestro y bolsa de lona con carpetas. ¿Quieres conocer el método o comparar los formatos?',
    en: 'The La Cartilla de Gretel kit brings together a 17″ × 22″ flipchart with easel, a 92-page Student Book, reproducible syllabic and vowel charts, homework, evaluations and answer keys, a poems audio CD, Teacher’s Guide, and canvas bag with folders. Would you like to explore the method or compare formats?',
    links: [kitLink],
    next: ['shop-method', 'shop-options', 'shop-order'],
    ask: { es: '¿Qué incluye el kit?', en: "What's in the Learning Kit?" },
  },
  {
    id: 'shop-method',
    keywords: ['method', 'metodo', 'phonetic', 'fonetico', 'phonics', 'teach', 'ensenar', 'teaching', 'funciona', 'works'],
    es: 'El método fonético controlado usa asociaciones de sonidos para recordar vocales y consonantes. Avanza de sonidos de letras a sílabas, palabras, oraciones, párrafos y poemas; introduce cada sonido antes de usarlo en material posterior. ¿Lo buscas para casa o para un aula?',
    en: 'The controlled phonetic method uses sound associations to help children remember vowels and consonants. It moves from letter sounds to syllables, words, sentences, paragraphs, and poems, introducing sounds before using them in later material. Are you looking for home or classroom materials?',
    links: [methodLink],
    next: ['shop-home', 'shop-classroom'],
    ask: { es: '¿Cómo funciona el método?', en: 'How does the method work?' },
  },
  {
    id: 'shop-options',
    keywords: ['options', 'opciones', 'compare', 'comparar', 'formats', 'formatos', 'lany', 'books', 'products', 'productos'],
    es: 'LANY Books presenta un libro del alumno de 92 páginas con 24 lecciones de fonética, un paquete de 10 libros para el aula y un kit de aula con 25 libros, rotafolio y láminas reproducibles. Los precios y la disponibilidad están por confirmar. ¿Es para casa o para un grupo?',
    en: 'LANY Books lists a 92-page Student Workbook with 24 phonics lessons, a 10-workbook classroom pack, and a classroom kit with 25 workbooks, a flipchart, and reproducible syllable charts. Prices and availability still need confirmation. Is this for home or a group?',
    links: [productsLink, kitLink],
    next: ['shop-home', 'shop-classroom', 'shop-price'],
    ask: { es: 'Comparar opciones', en: 'Compare options' },
  },
  {
    id: 'shop-home',
    keywords: ['home', 'casa', 'parent', 'parents', 'padres', 'hijo', 'daughter', 'son', 'child'],
    es: 'Para practicar con un niño, recomendamos el libro del alumno: 92 páginas, 24 lecciones de fonética y actividades de trazado y escritura. El programa está diseñado para Kindergarten, primer grado y segundo grado. ¿Quieres ver cómo se enseña?',
    en: 'For practice with one child, we recommend exploring the Student Workbook: 92 pages, 24 phonics lessons, and tracing and writing activities. The program is designed for Kindergarten through Grade 2. Would you like to see how the teaching works?',
    links: [productsLink, methodLink],
    next: ['shop-method', 'shop-age', 'shop-order'],
    ask: { es: 'Para casa', en: 'For home' },
  },
  {
    id: 'shop-classroom',
    keywords: ['classroom', 'aula', 'school', 'escuela', 'district', 'distrito', 'teacher', 'maestro', 'group', 'grupo', '25', '10'],
    es: 'Para un grupo, compara el paquete de 10 libros con el kit de 25 libros, rotafolio y láminas de sílabas reproducibles. El rotafolio sirve para presentar el material y los libros para la práctica del alumno. Para escuelas o distritos, revisa las opciones para escuelas.',
    en: 'For a group, compare the 10-workbook pack with the 25-workbook kit, flipchart, and reproducible syllable charts. The flipchart supports presenting the material, while workbooks support student practice. For schools or districts, explore school options.',
    links: [productsLink, schoolsLink],
    next: ['shop-kit', 'shop-price', 'shop-order'],
    ask: { es: 'Para un aula o escuela', en: 'For a classroom or school' },
  },
  {
    id: 'shop-age',
    keywords: ['age', 'ages', 'edad', 'edades', 'grade', 'grado', 'kindergarten', 'suitable', 'nivel'],
    es: 'La Cartilla de Gretel está diseñada para Kindergarten, primer grado y segundo grado, para lectura y escritura en español. Debe tenerse en cuenta el nivel de lectura del niño, no solo su edad. ¿Quieres explorar el libro individual o el kit de aula?',
    en: 'La Cartilla de Gretel is designed for Kindergarten, First Grade, and Second Grade, for Spanish reading and writing. Consider a child’s reading level as well as age when choosing. Would you like to explore the individual workbook or classroom materials?',
    links: [methodLink],
    next: ['shop-home', 'shop-classroom'],
    ask: { es: '¿Para qué grados?', en: 'Which grade levels?' },
  },
  {
    id: 'shop-price',
    keywords: ['price', 'prices', 'precio', 'precios', 'cost', 'cuesta', 'discount', 'descuento', 'shipping', 'envio', 'stock', 'refund', 'devolucion'],
    es: 'Los precios y la disponibilidad aún están por confirmar. Puedes revisar los formatos disponibles en las secciones de materiales y paquete.',
    en: 'Prices and availability still need confirmation. You can review the available formats in the materials and package sections.',
    links: [productsLink],
    next: ['shop-options', 'shop-order'],
    ask: { es: 'Precios y disponibilidad', en: 'Prices & availability' },
  },
  {
    id: 'shop-order',
    keywords: ['checkout', 'check out', 'buy', 'comprar', 'purchase', 'order', 'pedido', 'pay', 'pagar', 'payment', 'pago', 'cart', 'carrito', 'contact', 'contacto'],
    es: '¡Te ayudo a elegir el siguiente paso! Puedes revisar los productos y preparar el formato, la cantidad y el grado que necesitas. Para cualquier consulta adicional, revisa la sección de contacto.',
    en: 'I can help you choose your next step! You can review products and prepare your preferred format, quantity, and grade level. For inquiries, please check the contact section.',
    links: [productsLink, contactLink],
    next: ['shop-options', 'shop-home', 'shop-classroom'],
    ask: { es: 'Ayuda para ordenar', en: 'Help me order' },
  },
];

const strip = (s: string) =>
  s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9ñ\s]/g, ' ');

const EN_HINTS = ['the', 'how', 'what', 'is', 'do', 'i', 'my', 'where', 'who', 'are', 'you', 'hello', 'hi', 'can'];

export function detectLang(q: string): Lang {
  return strip(q).split(/\s+/).some((w) => EN_HINTS.includes(w)) ? 'en' : 'es';
}

function dist(a: string, b: string): number {
  let prev = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    for (let j = 1; j <= b.length; j++) {
      cur[j] = Math.min((prev[j] ?? 0) + 1, (cur[j - 1] ?? 0) + 1, (prev[j - 1] ?? 0) + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = cur;
  }
  return prev[b.length] ?? 0;
}

function wordScore(w: string, k: string): number {
  if (w === k) return 2;
  if (k.length >= 4 && (w.startsWith(k) || k.startsWith(w)) && w.length >= 4) return 1.5;
  if (k.length >= 5 && dist(w, k) <= 1) return 1;
  if (k.length >= 7 && dist(w, k) <= 2) return 1;
  return 0;
}

export const byId = (id: string): ShopTopic | undefined => SHOP_KB.find((e) => e.id === id);

export type ShopReply = {
  text: string;
  links: ShopLink[];
  lang: Lang;
  next: string[];
  matched: boolean;
  id?: string;
};

export function answerShop(q: string, forcedLang?: Lang): ShopReply {
  const lang = forcedLang ?? detectLang(q);
  const words = strip(q).split(/\s+/).filter(Boolean);

  let best: ShopTopic | null = null;
  let score = 0;

  for (const e of SHOP_KB) {
    let s = 0;
    for (const k of e.keywords) {
      const kk = strip(k).trim();
      if (kk.includes(' ')) {
        if (strip(q).includes(kk)) s += 2;
        continue;
      }
      s += Math.max(0, ...words.map((w) => wordScore(w, kk)));
    }
    if (s > score) {
      score = s;
      best = e;
    }
  }

  if (!best) {
    return {
      lang,
      links: [productsLink],
      matched: false,
      next: ['shop-kit', 'shop-method', 'shop-order'],
      text:
        lang === 'en'
          ? "I can help with the Learning Kit, teaching method, product formats, and inquiry options. What would you like to explore?"
          : 'Puedo ayudarte con el kit, el método de enseñanza, los formatos y las opciones de consulta. ¿Qué te gustaría conocer?',
    };
  }

  return {
    lang,
    matched: true,
    id: best.id,
    text: best[lang],
    links: best.links,
    next: best.next,
  };
}
