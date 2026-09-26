// Ejemplo mínimo: genera un informe Word con branding Auditable.
// En Claude (run_script) pegar este código tal cual. Rutas relativas a la raíz del proyecto.
const K = 'auditable_kit/';
const src = await readFile(K + '05_word/auditable-docx.js');
const A = await import(URL.createObjectURL(new Blob([src], { type: 'text/javascript' })));
const bin = async p => new Uint8Array(await (await readFileBinary(p)).arrayBuffer());

let B = '';
B += A.header({
  eyebrow: 'Informe explicativo · Giro SII',
  title: ['Título original', 'del documento'],
  subtitle: 'Subtítulo original',
  meta: ['Informe N° 001 — 09/2026', '25 de septiembre de 2026'],
  band: [['Contribuyente', 'Empresa SpA · RUT 11.111.111-1'], ['Folio', '123456']],
});
B += A.kpis([
  { label: 'Impuesto', value: '$ 3.563.920', note: 'IVA postergado', variant: 'blue' },
  { label: 'Recargos', value: '$ 450.570', note: 'Reajuste, interés y multa', variant: 'red' },
  { label: 'Total', value: '$ 4.014.490', note: 'Vence el 22-09-2026', variant: 'dark' },
]);
B += A.h2('01', 'Antecedentes');
B += A.J('Texto **copiado literal** del documento original, justificado.');
B += A.callout('Mensaje clave del original.', { lead: 'Importante:' });
B += A.spacer(400);
B += A.h2('02', 'Detalle');
B += A.dataTable(
  [{ title: 'Concepto', w: 6080 }, { title: 'Código', w: 1600, align: 'center' }, { title: 'Monto (CLP)', w: 2400, align: 'right' }],
  [['Impuesto postergado', '091', '$ 3.563.920'], ['Reajuste IPC', '092', '$ 3.564']],
  { total: ['Total a pagar', '94', '$ 4.014.490'] });
B += A.spacer(400);
B += A.h2('03', 'Pasos');
B += A.step(1, 'Primer paso del original.');
B += A.step(2, 'Último paso del original.', { color: A.C.RED });
B += A.spacer(400);
B += A.closing();

const blob = A.buildDocx({
  body: B,
  logos: { neg: await bin(K + '02_logos/WORD/logo-neg.png'), red: await bin(K + '02_logos/WORD/logo-red.png') },
  footer: 'Nombre del documento · Cliente', // null para eliminar el pie
});
await saveFile('Salida Auditable.docx', blob);
log('ok');
