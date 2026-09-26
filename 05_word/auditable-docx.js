// Auditable 2026 · Generador de Word (.docx) con branding oficial.
// ES module sin dependencias. Uso: ver 05_word/ejemplo-uso.js y auditable_2026.md §5.
// Todas las medidas en twips (1 in = 1440). Página carta 12240×15840, márgenes 1080, área útil 10080.

export const C = { RED:'F20530', DEEP:'020A1B', NAVY:'0C2649', SKY:'C5E3EF', GRAY:'E6EAF1', W:'FFFFFF' };
export const SERIF = 'IBM Plex Serif', SANS = 'IBM Plex Sans';
export const BODY = 10080;
const TXT = C.DEEP;

const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

/** Texto. o: {f,b,caps,sp,c,sz} — sz en medios puntos (20 = 10 pt). */
export function run(t, o = {}) {
  const f = o.f || SANS;
  let r = `<w:rFonts w:ascii="${f}" w:hAnsi="${f}" w:cs="${f}"/>`;
  if (o.b) r += '<w:b/>';
  if (o.caps) r += '<w:caps/>';
  if (o.sp) r += `<w:spacing w:val="${o.sp}"/>`;
  r += `<w:color w:val="${o.c || TXT}"/><w:sz w:val="${o.sz || 20}"/><w:szCs w:val="${o.sz || 20}"/>`;
  return `<w:r><w:rPr>${r}</w:rPr><w:t xml:space="preserve">${esc(t)}</w:t></w:r>`;
}

/** Texto con **negritas** en línea. o.bc = color de las negritas. */
export function rich(s, o = {}) {
  return s.split(/(\*\*[^*]+\*\*)/).filter(Boolean)
    .map(seg => seg.startsWith('**') ? run(seg.slice(2, -2), { ...o, b: true, c: o.bc || o.c }) : run(seg, o)).join('');
}

/** Párrafo. Siempre keepLines (no se parte). o: {keep,jc,after,line,left,hang,tabs} */
export function para(runs, o = {}) {
  let p = '';
  if (o.keep) p += '<w:keepNext/>';
  p += '<w:keepLines/>';
  if (o.tabs) p += `<w:tabs>${o.tabs}</w:tabs>`;
  p += `<w:spacing w:before="0" w:after="${o.after ?? 120}" w:line="${o.line || 276}" w:lineRule="auto"/>`;
  if (o.left || o.hang) p += `<w:ind w:left="${o.left || 0}" w:hanging="${o.hang || 0}"/>`;
  if (o.jc) p += `<w:jc w:val="${o.jc}"/>`;
  return `<w:p><w:pPr>${p}</w:pPr>${Array.isArray(runs) ? runs.join('') : runs}</w:p>`;
}

/** Párrafo justificado estándar (10 pt, Deep Blue, negritas Blue). */
export const J = (s, o = {}) => para(rich(s, { sz: o.sz || 20, c: o.c, bc: o.bc || C.NAVY }), { jc: 'both', ...o });

/** Viñeta con guion rojo. */
export function bullet(s, o = {}) {
  return para([run('—', { c: o.mc || C.RED, b: true, sz: o.sz || 20 }), run('\t', { sz: 20 }), rich(s, { sz: o.sz || 20, bc: C.NAVY })],
    { jc: 'both', after: o.after ?? 90, left: 300, hang: 300, tabs: '<w:tab w:val="left" w:pos="300"/>', keep: o.keep });
}

/** Celda. o: {w,shd,top,left,bottom,right:{sz,c},pt,pl,pb,pr,va,span} */
export function tc(content, o = {}) {
  let p = `<w:tcW w:w="${o.w}" w:type="dxa"/>`;
  if (o.span) p += `<w:gridSpan w:val="${o.span}"/>`;
  p += '<w:tcBorders>' + ['top', 'left', 'bottom', 'right'].map(s => o[s]
    ? `<w:${s} w:val="single" w:sz="${o[s].sz}" w:space="0" w:color="${o[s].c}"/>` : `<w:${s} w:val="nil"/>`).join('') + '</w:tcBorders>';
  if (o.shd) p += `<w:shd w:val="clear" w:color="auto" w:fill="${o.shd}"/>`;
  p += `<w:tcMar><w:top w:w="${o.pt ?? 110}" w:type="dxa"/><w:left w:w="${o.pl ?? 150}" w:type="dxa"/><w:bottom w:w="${o.pb ?? 110}" w:type="dxa"/><w:right w:w="${o.pr ?? 150}" w:type="dxa"/></w:tcMar>`;
  p += `<w:vAlign w:val="${o.va || 'top'}"/>`;
  return `<w:tc><w:tcPr>${p}</w:tcPr>${content || spacer(0)}</w:tc>`;
}

/** Fila que nunca se corta entre páginas. o.head = se repite como cabecera. */
export const tr = (cells, o = {}) => `<w:tr><w:trPr><w:cantSplit/>${o.head ? '<w:tblHeader/>' : ''}</w:trPr>${cells.join('')}</w:tr>`;

/** Tabla sin bordes, layout fijo. grid = anchos de columna (suman ≤ 10080). */
export function tbl(rows, grid) {
  const total = grid.reduce((a, b) => a + b, 0);
  const nil = ['top', 'left', 'bottom', 'right', 'insideH', 'insideV'].map(s => `<w:${s} w:val="nil"/>`).join('');
  return `<w:tbl><w:tblPr><w:tblW w:w="${total}" w:type="dxa"/><w:tblInd w:w="0" w:type="dxa"/><w:tblLayout w:type="fixed"/><w:tblBorders>${nil}</w:tblBorders><w:tblCellMar><w:top w:w="0" w:type="dxa"/><w:left w:w="0" w:type="dxa"/><w:bottom w:w="0" w:type="dxa"/><w:right w:w="0" w:type="dxa"/></w:tblCellMar><w:tblLook w:val="0000" w:noHBand="1" w:noVBand="1"/></w:tblPr><w:tblGrid>${grid.map(w => `<w:gridCol w:w="${w}"/>`).join('')}</w:tblGrid>${rows.join('')}</w:tbl>`;
}

/** Espacio vertical (twips). keep = amarra al bloque siguiente. */
export const spacer = (h, keep) => `<w:p><w:pPr>${keep ? '<w:keepNext/>' : ''}<w:spacing w:before="0" w:after="${h}" w:line="20" w:lineRule="exact"/></w:pPr></w:p>`;

/** Imagen inline. rid: 'rIdNeg' | 'rIdRed'. cx/cy en EMU (1 in = 914400). */
export function pic(rid, cx, cy, id = 100) {
  return `<w:r><w:drawing><wp:inline distT="0" distB="0" distL="0" distR="0"><wp:extent cx="${cx}" cy="${cy}"/><wp:effectExtent l="0" t="0" r="0" b="0"/><wp:docPr id="${id}" name="Auditable"/><wp:cNvGraphicFramePr><a:graphicFrameLocks noChangeAspect="1"/></wp:cNvGraphicFramePr><a:graphic><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:pic><pic:nvPicPr><pic:cNvPr id="${id}" name="Auditable"/><pic:cNvPicPr/></pic:nvPicPr><pic:blipFill><a:blip r:embed="${rid}"/><a:stretch><a:fillRect/></a:stretch></pic:blipFill><pic:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="${cx}" cy="${cy}"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr></pic:pic></a:graphicData></a:graphic></wp:inline></w:drawing></w:r>`;
}
export const LOGO_NEG = (id) => pic('rIdNeg', 914400, 241063, id); // banner negativo ≈ 1,0 in
export const LOGO_RED = (id) => pic('rIdRed', 742950, 200978, id); // banner rojo ≈ 0,81 in

// ───────── Componentes de marca ─────────

/** Caja de una celda (callout, bloque de color). */
export const box = (inner, o = {}) => tbl([tr([tc(inner, { w: BODY, pt: 180, pl: 220, pb: 180, pr: 220, ...o })])], [BODY]);

/** Etiqueta MAYÚSCULAS bold 7,5 pt. */
export const label = (t, c = C.RED) => para([run(t, { c, b: true, sz: 15, sp: 24, caps: true })], { after: 80, line: 230, keep: true });

/** Título de sección: "01" rojo + título serif Blue + regla 2 px Blue. */
export function h2(num, title) {
  return para([run(num + '   ', { f: SERIF, b: true, c: C.RED, sz: 20 }), run(title, { f: SERIF, b: true, c: C.NAVY, sz: 28 })], { after: 0, line: 260, keep: true }) +
    `<w:p><w:pPr><w:keepNext/><w:pBdr><w:bottom w:val="single" w:sz="12" w:space="4" w:color="${C.NAVY}"/></w:pBdr><w:spacing w:before="0" w:after="200" w:line="20" w:lineRule="exact"/></w:pPr></w:p>`;
}
export const h3 = t => para([run(t, { b: true, c: C.NAVY, sz: 22 })], { after: 140, keep: true });

/** Header de portada azul + banda roja. meta = [línea1, línea2]; band = [[etiqueta, valor], …] */
export function header({ eyebrow, title, subtitle, meta = [], band = [] }) {
  const titleLines = Array.isArray(title) ? title : [title];
  let h = box(
    tbl([tr([
      tc(para([LOGO_NEG(101)], { after: 0 }), { w: 5000, pl: 0, pr: 0, pt: 0, pb: 0 }),
      tc(meta.map((m, i) => para([run(m, { c: C.SKY, sz: 16 })], { jc: 'right', after: i === meta.length - 1 ? 0 : 20, line: 230 })).join('') || spacer(0), { w: 4400, pl: 0, pr: 0, pt: 0, pb: 0 }),
    ])], [5000, 4400]) +
    spacer(420) +
    `<w:p><w:pPr><w:pBdr><w:top w:val="single" w:sz="30" w:space="0" w:color="${C.RED}"/></w:pBdr><w:spacing w:before="0" w:after="200" w:line="20" w:lineRule="exact"/><w:ind w:right="8500"/></w:pPr></w:p>` +
    (eyebrow ? para([run(eyebrow.toUpperCase(), { c: C.RED, b: true, sz: 16, sp: 30 })], { after: 120, line: 240 }) : '') +
    titleLines.map((t, i) => para([run(t, { f: SERIF, b: true, c: C.W, sz: 44 })], { after: i === titleLines.length - 1 ? 140 : 0, line: 260 })).join('') +
    (subtitle ? para([run(subtitle, { c: C.SKY, sz: 21 })], { after: 0, line: 250 }) : ''),
    { shd: C.NAVY, pt: 420, pl: 340, pb: 400, pr: 340 });
  if (band.length) {
    const runs = [];
    band.forEach(([k, v], i) => { if (i) runs.push(run('     ·     ', { c: C.W, sz: 18 })); runs.push(run(k + '  ', { c: C.W, sz: 18 }), run(v, { c: C.W, b: true, sz: 18 })); });
    h += box(para(runs, { after: 0, line: 250 }), { shd: C.RED, pt: 170, pl: 340, pb: 170, pr: 340 });
  }
  return h + spacer(360);
}

/** 3 tarjetas KPI. items = [{label,value,note,variant:'dark'|'red'|'blue'}] */
export function kpis(items) {
  const w = Math.floor((BODY - 120 * (items.length - 1)) / items.length);
  const cells = [], grid = [];
  items.forEach((k, i) => {
    if (i) { cells.push(tc(spacer(0), { w: 120, pl: 0, pr: 0, pt: 0, pb: 0 })); grid.push(120); }
    const dark = k.variant === 'dark', bl = k.variant === 'red' ? C.RED : C.NAVY;
    cells.push(tc(
      para([run(k.label, { c: dark ? C.RED : bl, b: true, sz: 15, sp: 20, caps: true })], { after: 100, line: 230 }) +
      para([run(k.value, { f: SERIF, b: true, c: dark ? C.W : bl, sz: 30 })], { after: 60, line: 260 }) +
      para([run(k.note || '', { c: dark ? C.SKY : C.NAVY, sz: 16 })], { after: 0, line: 230 }),
      { w, shd: dark ? C.NAVY : C.GRAY, pt: 200, pl: 220, pb: 200, pr: 180, left: dark ? null : { sz: 18, c: bl } }));
    grid.push(w);
  });
  return tbl([tr(cells)], grid) + spacer(360);
}

/** Callout Gray con borde izquierdo. accent: 'red'|'blue'. */
export const callout = (text, { lead, accent = 'red' } = {}) =>
  box(para((lead ? [run(lead + ' ', { b: true, c: accent === 'red' ? C.RED : C.NAVY, sz: 19 })] : []).concat(rich(text, { sz: 19, bc: C.NAVY })), { after: 0, jc: 'both', line: 265 }),
    { shd: C.GRAY, left: { sz: 24, c: accent === 'red' ? C.RED : C.NAVY } });

/** Callout fuerte Blue con texto blanco. */
export const calloutDark = (text, { lead } = {}) =>
  box(para((lead ? [run(lead + ' ', { b: true, c: C.W, sz: 19 })] : []).concat(rich(text, { sz: 19, c: C.W, bc: C.SKY })), { after: 0, jc: 'both', line: 265 }), { shd: C.NAVY });

/** Paso numerado. color: C.NAVY (default) o C.RED (último/crítico). */
export function step(n, text, { title, color = C.NAVY, extra = '' } = {}) {
  const num = tc(para([run(String(n), { f: SERIF, b: true, c: C.W, sz: 20 })], { after: 0, line: 240, jc: 'center' }), { w: 460, shd: color, pt: 90, pl: 0, pb: 90, pr: 0, va: 'center' });
  const gap = tc(spacer(0), { w: 220, pl: 0, pr: 0, pt: 0, pb: 0 });
  const body = tc((title ? para([run(title, { b: true, c: C.NAVY, sz: 20 })], { after: 50, line: 250 }) : '') + para(rich(text, { sz: 19, bc: C.NAVY }), { after: 0, line: 262, jc: 'both' }) + extra,
    { w: BODY - 680, pl: 0, pr: 0, pt: title ? 20 : 60, pb: 0 });
  return tbl([tr([num, gap, body])], [460, 220, BODY - 680]) + spacer(130);
}

/**
 * Tabla de datos. cols = [{title, w, align}], rows = [[celda,…]], opts.total = [celdas] (fila Blue).
 * Celda: string (admite **negrita**) o {t, b, c, align}.
 */
export function dataTable(cols, rows, opts = {}) {
  const grid = cols.map(c => c.w);
  const th = cols.map(c => tc(para([run(c.title, { c: C.W, b: true, sz: 17 })], { after: 0, line: 240, jc: c.align || 'left' }), { w: c.w, shd: C.NAVY, pt: 120, pb: 120 }));
  const cell = (v, i, shd) => {
    const o = typeof v === 'object' ? v : { t: v };
    const jc = o.align || cols[i].align || 'left';
    const content = o.b ? [run(o.t, { sz: 18, b: true, c: o.c || C.NAVY })] : rich(String(o.t), { sz: 18, c: o.c || TXT, bc: C.NAVY });
    return tc(para(content, { after: 0, line: 250, jc }), { w: cols[i].w, shd, bottom: { sz: 4, c: C.GRAY } });
  };
  const out = [tr(th, { head: true })];
  rows.forEach((r, ri) => out.push(tr(r.map((v, i) => cell(v, i, opts.zebra && ri % 2 ? C.GRAY : undefined)))));
  if (opts.total) out.push(tr(opts.total.map((v, i) => tc(para([run(typeof v === 'object' ? v.t : v, { f: i === opts.total.length - 1 ? SERIF : SANS, b: true, c: C.W, sz: i === opts.total.length - 1 ? 22 : 19 })], { after: 0, line: 250, jc: cols[i].align || 'left' }), { w: cols[i].w, shd: C.NAVY, pt: 150, pb: 150 }))));
  // amarrar la tabla a su título previo
  return tbl(out, grid);
}

/** Pastilla de estado para usar dentro de una celda. */
export function pill(text, kind = 'info', w = 1500) {
  const k = { error: [C.RED, C.W], ok: [C.NAVY, C.W], warn: [C.GRAY, C.NAVY], info: [C.SKY, C.NAVY] }[kind];
  return tbl([tr([tc(para([run(text, { sz: 15, b: true, c: k[1], caps: true, sp: 10 })], { after: 0, line: 230, jc: 'center' }), { w, shd: k[0], pt: 60, pb: 60, pl: 60, pr: 60, va: 'center' })])], [w]);
}

/** Cierre de documento: regla roja + logo rojo + razón social. */
export const closing = (lines = ['Auditable Soluciones Empresariales', 'Asesoría Tributaria, Contable y Laboral']) =>
  tbl([tr([
    tc(para([LOGO_RED(102)], { after: 0 }), { w: 4000, top: { sz: 24, c: C.RED }, pt: 190, pl: 0, pb: 0, pr: 0 }),
    tc(lines.map((l, i) => para([run(l, { c: C.NAVY, sz: 16 })], { jc: 'right', after: i === lines.length - 1 ? 0 : 30, line: 240 })).join(''), { w: 6080, top: { sz: 24, c: C.RED }, pt: 220, pl: 0, pb: 0, pr: 0, va: 'bottom' }),
  ])], [4000, 6080]);

// ───────── Empaquetado .docx ─────────

function footerXml(text) {
  const fr = (k) => `<w:r><w:rPr><w:color w:val="${C.NAVY}"/><w:sz w:val="15"/></w:rPr>${k}</w:r>`;
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<w:ftr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:tbl><w:tblPr><w:tblW w:w="10080" w:type="dxa"/><w:tblLayout w:type="fixed"/><w:tblBorders><w:top w:val="single" w:sz="8" w:space="0" w:color="${C.GRAY}"/><w:left w:val="nil"/><w:bottom w:val="nil"/><w:right w:val="nil"/><w:insideH w:val="nil"/><w:insideV w:val="nil"/></w:tblBorders><w:tblCellMar><w:left w:w="0" w:type="dxa"/><w:right w:w="0" w:type="dxa"/></w:tblCellMar></w:tblPr><w:tblGrid><w:gridCol w:w="8080"/><w:gridCol w:w="2000"/></w:tblGrid><w:tr><w:tc><w:tcPr><w:tcW w:w="8080" w:type="dxa"/><w:tcMar><w:top w:w="100" w:type="dxa"/></w:tcMar></w:tcPr>${para([run(text, { c: C.NAVY, sz: 15 })], { after: 0, line: 220 })}</w:tc><w:tc><w:tcPr><w:tcW w:w="2000" w:type="dxa"/><w:tcMar><w:top w:w="100" w:type="dxa"/></w:tcMar></w:tcPr><w:p><w:pPr><w:spacing w:after="0" w:line="220" w:lineRule="auto"/><w:jc w:val="right"/></w:pPr>${run('Auditable  ·  ', { c: C.NAVY, b: true, sz: 15 })}${fr('<w:fldChar w:fldCharType="begin"/>')}${fr('<w:instrText xml:space="preserve"> PAGE </w:instrText>')}${fr('<w:fldChar w:fldCharType="separate"/>')}${fr('<w:t>1</w:t>')}${fr('<w:fldChar w:fldCharType="end"/>')}</w:p></w:tc></w:tr></w:tbl><w:p><w:pPr><w:spacing w:after="0" w:line="20" w:lineRule="exact"/></w:pPr></w:p></w:ftr>`;
}

const CRC = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
const crc32 = b => { let c = 0xFFFFFFFF; for (let i = 0; i < b.length; i++) c = CRC[(c ^ b[i]) & 0xFF] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; };
const z16 = v => [v & 255, (v >> 8) & 255], z32 = v => [v & 255, (v >> 8) & 255, (v >> 16) & 255, (v >>> 24) & 255];

function zip(files) {
  const enc = new TextEncoder(), chunks = [], central = []; let off = 0;
  for (const [name, data] of files) {
    const nb = enc.encode(name), crc = crc32(data);
    const lh = new Uint8Array([...z32(0x04034b50), ...z16(20), ...z16(0x0800), ...z16(0), ...z16(0), ...z16(0), ...z32(crc), ...z32(data.length), ...z32(data.length), ...z16(nb.length), ...z16(0)]);
    chunks.push(lh, nb, data);
    central.push(new Uint8Array([...z32(0x02014b50), ...z16(20), ...z16(20), ...z16(0x0800), ...z16(0), ...z16(0), ...z16(0), ...z32(crc), ...z32(data.length), ...z32(data.length), ...z16(nb.length), ...z16(0), ...z16(0), ...z16(0), ...z16(0), ...z32(0), ...z32(off)]), nb);
    off += lh.length + nb.length + data.length;
  }
  const cds = central.reduce((a, c) => a + c.length, 0);
  const eocd = new Uint8Array([...z32(0x06054b50), ...z16(0), ...z16(0), ...z16(files.length), ...z16(files.length), ...z32(cds), ...z32(off), ...z16(0)]);
  return new Blob([...chunks, ...central, eocd], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
}

/**
 * Arma el .docx. body = string OOXML (concatenación de componentes).
 * logos = { neg: Uint8Array (02_logos/WORD/logo-neg.png), red: Uint8Array (02_logos/WORD/logo-red.png) }
 * footer = texto del pie (null = sin footer).
 */
export function buildDocx({ body, logos, footer = null }) {
  const enc = new TextEncoder();
  const NS = 'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"';
  const sect = `<w:sectPr>${footer ? '<w:footerReference w:type="default" r:id="rIdFtr"/>' : ''}<w:pgSz w:w="12240" w:h="15840" w:orient="portrait"/><w:pgMar w:top="1080" w:right="1080" w:bottom="1080" w:left="1080" w:header="600" w:footer="500" w:gutter="0"/><w:cols w:space="708"/><w:docGrid w:linePitch="360"/></w:sectPr>`;
  const doc = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<w:document ${NS}><w:body>${body}${sect}</w:body></w:document>`;
  const styles = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="${SANS}" w:hAnsi="${SANS}" w:cs="${SANS}"/><w:color w:val="${TXT}"/><w:sz w:val="20"/><w:szCs w:val="20"/><w:lang w:val="es-CL"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:spacing w:after="120" w:line="276" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults><w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/></w:style></w:styles>`;
  const settings = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<w:settings xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:compat><w:compatSetting w:name="compatibilityMode" w:uri="http://schemas.microsoft.com/office/word" w:val="15"/></w:compat></w:settings>`;
  const types = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Default Extension="png" ContentType="image/png"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/><Override PartName="/word/settings.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml"/>${footer ? '<Override PartName="/word/footer1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/>' : ''}</Types>`;
  const rootRels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>`;
  const R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/';
  const docRels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="${R}styles" Target="styles.xml"/><Relationship Id="rId2" Type="${R}settings" Target="settings.xml"/><Relationship Id="rIdNeg" Type="${R}image" Target="media/logo-neg.png"/><Relationship Id="rIdRed" Type="${R}image" Target="media/logo-red.png"/>${footer ? `<Relationship Id="rIdFtr" Type="${R}footer" Target="footer1.xml"/>` : ''}</Relationships>`;
  const files = [
    ['[Content_Types].xml', enc.encode(types)], ['_rels/.rels', enc.encode(rootRels)],
    ['word/document.xml', enc.encode(doc)], ['word/styles.xml', enc.encode(styles)], ['word/settings.xml', enc.encode(settings)],
    ['word/_rels/document.xml.rels', enc.encode(docRels)],
    ['word/media/logo-neg.png', logos.neg], ['word/media/logo-red.png', logos.red],
  ];
  if (footer) files.push(['word/footer1.xml', enc.encode(footerXml(footer))]);
  return zip(files);
}

// ───────── Lectura de .docx de origen ─────────

/** Extrae texto marcado de un .docx (Uint8Array): ¶ = párrafo, [ROW] = fila, | = celda, **negrita**. Requiere DecompressionStream. */
export async function readDocx(buf) {
  const u16 = o => buf[o] | buf[o + 1] << 8, u32 = o => (buf[o] | buf[o + 1] << 8 | buf[o + 2] << 16 | buf[o + 3] << 24) >>> 0;
  let eocd = -1; for (let i = buf.length - 22; i >= 0; i--) if (u32(i) === 0x06054b50) { eocd = i; break; }
  let p = u32(eocd + 16); const n = u16(eocd + 10), entries = [];
  for (let i = 0; i < n; i++) { const nl = u16(p + 28), el = u16(p + 30), cl = u16(p + 32); entries.push({ name: new TextDecoder().decode(buf.slice(p + 46, p + 46 + nl)), lho: u32(p + 42), method: u16(p + 10), csize: u32(p + 20) }); p += 46 + nl + el + cl; }
  const get = async e => { const s = e.lho + 30 + u16(e.lho + 26) + u16(e.lho + 28); const c = buf.slice(s, s + e.csize); return e.method === 0 ? c : new Uint8Array(await new Response(new Blob([c]).stream().pipeThrough(new DecompressionStream('deflate-raw'))).arrayBuffer()); };
  const xml = new TextDecoder().decode(await get(entries.find(e => e.name === 'word/document.xml')));
  const text = xml.replace(/<w:p [^>]*>|<w:p>/g, '\n¶').replace(/<w:tab\/>/g, '\t').replace(/<w:tc[ >]/g, ' | <w:tc ').replace(/<w:tr[ >]/g, '\n[ROW]<w:tr ')
    .replace(/<w:r>(<w:rPr>(?:(?!<\/w:rPr>).)*<w:b\/>(?:(?!<\/w:rPr>).)*<\/w:rPr>)/g, '<w:r>**$1').replace(/<[^>]+>/g, '').replace(/\n¶\s*(?=\n)/g, '');
  const media = {}; for (const e of entries.filter(x => x.name.startsWith('word/media/'))) media[e.name.split('/').pop()] = await get(e);
  return { text, media };
}
