# SYSTEM DESIGN & BRAND GUIDELINES (`auditable_2026.md`)

> **Fuente única de verdad (SSOT) — Auditable 2026**
> Versión 1.1 · 26-09-2026 · Idioma de trabajo: español (Chile)
> **Cambios v1.1:** fidelidad al formato de origen (orientación, tamaño y número de páginas) (§1.6), conservación de íconos y elementos gráficos (§1.6 y §2.4), uso activo del Sky Blue (§2.1) y nuevos separadores de capítulo (§3.4-A.4).
> Fuentes: *Brand Guidelines Auditable 2026* (`01_manual/01_brandguidelines.pdf`, 31 págs.), logos (`02_logos/`), patrón (`03_patron/`), plantillas aprobadas (`04_plantillas/`), generador Word (`05_word/`), ejemplos entregados (`06_ejemplos_word/`), y las correcciones y aprobaciones del usuario en las sesiones de diseño anteriores.
>
> **Este archivo vive en la raíz de la carpeta `auditable_kit/`. Todas las rutas citadas son relativas a esa carpeta.** El índice completo de archivos y cómo usarlos está en la **sección 5**.
>
> **Cómo leer este archivo:** las reglas marcadas **[MANUAL]** vienen del manual de marca y no se negocian. Las marcadas **[USUARIO]** son preferencias o correcciones explícitas del usuario. Las marcadas **[ESTÁNDAR]** son decisiones de implementación ya aprobadas en entregables previos. Si dos reglas chocan, manda este orden: **USUARIO > MANUAL > ESTÁNDAR**, salvo que el usuario diga otra cosa en la sesión actual.

---

## 0. TL;DR — Las 15 reglas que nunca se rompen

1. **Nunca inventar, resumir, reescribir ni eliminar el contenido del cliente.** Títulos, cifras, tablas, numeración y orden se copian tal cual del documento original. Solo se cambia el diseño. [USUARIO]
2. **Solo 5 colores de marca + blanco y negro:** `#F20530` · `#020A1B` · `#0C2649` · `#C5E3EF` · `#E6EAF1`. Nada de tintes inventados (rosados, grises intermedios, celestes derivados). [MANUAL][USUARIO]
3. **Rojo `#F20530` = protagonista con moderación:** datos clave, alertas, acentos, botones. No abusar: el grueso del color lo llevan los azules. [USUARIO][MANUAL]
4. **Fondos oscuros en Blue `#0C2649`**, no en negro ni en Deep Blue, salvo pedido explícito. [USUARIO]
5. **Colores sólidos, sin degradados** en fondos, tarjetas, barras y gráficos. La única excepción es el degradado de opacidad del patrón (sección 2.6). [USUARIO][MANUAL]
6. **Tipografías: IBM Plex Serif (titulares) + IBM Plex Sans (cuerpo).** Nunca Inter, Roboto, Arial ni Poppins fuera del logo. [MANUAL][USUARIO]
7. **Logo en su archivo original:** versión negativa sobre fondo oscuro y positiva o roja sobre fondo claro. Nunca recolorear con filtros CSS, estirar, rotar ni poner sobre fondos de bajo contraste. [MANUAL][USUARIO]
8. **Banner (horizontal) en headers y footers**; perfil (vertical) solo en formatos cuadrados. [MANUAL][USUARIO]
9. **Texto largo justificado** (`text-align: justify` / `w:jc="both"`). [USUARIO]
10. **Nada se corta entre páginas:** bloques, filas de tabla, títulos y sus párrafos van juntos. [USUARIO]
11. **Tamaño carta (Letter 8,5 × 11 in)**, con header azul a sangre, de extremo a extremo. [USUARIO]
12. **Entregables en Word (.docx) y/o PDF**, que se vean igual al HTML. [USUARIO]
13. **Sin emoji.** Íconos solo lineales y en blanco sobre oscuro, o ninguno. [USUARIO][MANUAL]
14. **Gráficos minimalistas:** barras sólidas, etiquetas fuera de las formas, alto contraste. Nunca texto sobre segmentos de torta. [USUARIO]
15. **Respuestas cortas y directas.** Hacer lo pedido y nada más; sugerir extras en vez de aplicarlos. [USUARIO]
16. **Respetar el formato del original:** horizontal sigue horizontal, vertical sigue vertical, con el mismo tamaño de página y aproximadamente el mismo número de páginas. Solo se cambia si el usuario lo pide de forma explícita. [USUARIO] (§1.6)
17. **Conservar los íconos y elementos gráficos del original** (íconos, cifras destacadas, diagramas, fotos, divisores), redibujados con el estilo de marca. Nunca eliminarlos para "simplificar". [USUARIO] (§1.6)
18. **El Sky Blue `#C5E3EF` se usa activamente:** en fondos de bloque, cifras y titulares sobre Blue, íconos y detalles. El texto nunca debe verse apagado ni grisáceo. [USUARIO] (§2.1)

---

## 1. Visión General y Preferencias del Usuario

### 1.1 Contexto de marca
- **Auditable** es una consultora contable y tributaria chilena enfocada en pymes. Traduce la complejidad del cumplimiento tributario en procesos claros, ordenados y a tiempo, para que el cliente no tenga sustos con el SII. Combina tecnología y acompañamiento cercano: contabilidad al día, automatización y anticipación de cada obligación, desde el F29 mensual hasta el cierre anual. [MANUAL]
- **Valores:** Tecnológico · **Cercanía** (hablamos claro, sin tecnicismos innecesarios) · **Orden** (procesos anticipados, nunca a última hora) · **Confianza** (transparencia total en cada gestión). [MANUAL]
- **Implicancia de diseño:** la marca debe verse **precisa, ordenada, confiable y cercana**. Nada decorativo que no aporte a la comprensión.
- **Dominio del contenido:** tributario, contable, laboral y societario chileno (F29, F21, IVA, SII, TGR, DT, SENCE, RES, Previred, IMM, UTM, finiquitos, convenios de pago, cotizaciones y giros).

### 1.2 Estilo visual preferido
- **Corporativo-editorial moderno y minimalista, con alto contraste.** Parecido a un informe de consultora: header institucional azul, jerarquía tipográfica serif/sans marcada, mucho aire en blanco y color usado con intención.
- **Geometría recta:** esquinas rectas (radius 0) en documentos. Barras de acento finas (3–4 px) y reglas de 1,5–2 px para ordenar.
- **Color sólido y plano.** Sin sombras en documentos. Sin glassmorphism ni neón.
- **Legibilidad antes que decoración:** jerarquía clara, contraste AA o superior y tamaños cómodos de lectura.

### 1.3 Gustos específicos del usuario (patrones aprobados)
| Elemento | Preferencia aprobada |
|---|---|
| **Formato de entrega** | Documento tipo informe (preferido sobre infografía; al cliente le gustaron los colores, pero no el formato infografía). Word `.docx` descargable y PDF, tamaño carta. |
| **Header** | Banda Blue `#0C2649` a sangre (edge-to-edge), con el logo negativo banner arriba a la izquierda y los metadatos (N° de informe, fecha) arriba a la derecha en Sky Blue. Debajo va una barra roja de 56×4 px, luego el eyebrow rojo en mayúsculas, el H1 serif blanco y el subtítulo Sky Blue. |
| **Banda de datos** | Franja roja `#F20530` a sangre bajo el header, con texto blanco: contribuyente, RUT, folio, fecha o portal. |
| **KPIs** | 3 tarjetas en fila. La destacada va con fondo Blue y texto blanco; las demás, con fondo claro y un borde izquierdo de 3 px (rojo si es un monto crítico, azul si es informativo). |
| **Secciones** | En informes técnicos: numeración `01`, `02`… en serif roja, seguida del título H2 serif azul y una regla inferior de 2 px Blue. En brochures, presentaciones y piezas comerciales: **separador de capítulo** (§3.4-A.4); la regla fina no se usa en esas piezas. **Todos los puntos numerados del original se mantienen.** |
| **Tablas** | Cabecera Blue con texto blanco, filas separadas por líneas Gray, fila de total Blue con el monto en serif blanca. Los montos van alineados a la derecha. |
| **Callouts** | Caja Gray `#E6EAF1` con borde izquierdo de 4 px (rojo = importante/crítico, azul = informativo). |
| **Paso a paso** | Cuadrado numerado de 28–32 px (Blue; el último paso o el paso crítico en rojo) con el texto a la derecha. |
| **Gráficos** | Barras horizontales sólidas y finas, con el valor en texto al lado. Los azules son la base y el rojo marca solo el dato principal. |
| **Cierre** | Una regla roja de 3 px, el logo banner rojo a la izquierda y "Auditable Soluciones Empresariales · Asesoría Tributaria, Contable y Laboral" a la derecha. |
| **Footer de página** | Línea Gray, nombre del documento a la izquierda y "Auditable · N° pág." a la derecha. Si el usuario lo pide, se elimina por completo. |
| **Texto** | Justificado. Negritas para montos, plazos y conceptos legales clave. |

### 1.4 Flujo de trabajo del usuario
1. Sube un `.docx`, `.pdf` o texto pegado (informes, cotizaciones, guías, paso a paso, correos).
2. Pide "aplicar el branding de Auditable".
3. Revisa la vista previa y corrige puntualmente: colores, cortes de página, justificado, logo.
4. Pide la exportación: **Word** (lo más frecuente) o **PDF**, en tamaño carta.
5. A veces pide derivados: un correo al cliente (solo texto), cambios de datos o versiones nuevas.

**Qué espera Claude en cada paso:** leer el archivo real (nunca asumir su contenido), conservar el 100 % de la información, entregar rápido y con un resumen breve.

### 1.5 Lecciones aprendidas — errores que NUNCA deben repetirse
| # | Error cometido en el pasado | Regla correcta |
|---|---|---|
| L1 | Se inventaron datos, títulos y secciones ("Lecciones aprendidas", cifras ficticias) porque no se pudo leer el `.docx`. | **Jamás inventar.** Si el archivo no se puede leer, pedir el texto al usuario. Los `.docx` se leen descomprimiendo el zip y parseando `word/document.xml`. |
| L2 | Se omitieron puntos del documento original. | Mantener **todos** los puntos numerados, en su orden y con sus títulos originales. |
| L3 | Se usó el logo de color sobre fondo rojo u oscuro, y quedó ilegible. | Usar la **versión negativa** (`N00`/`N01`) sobre fondos oscuros. |
| L4 | Se recoloreó el logo con `filter: brightness(0) invert(1)`. | Usar el archivo de logo correcto; **nunca** usar filtros. |
| L5 | Se escribió mal un HEX (`#20530`, `#205300`). | El rojo es **`#F20530`** (seis dígitos). Verificar cada HEX contra la sección 2.1. |
| L6 | Se usaron degradados en tarjetas y barras. | **Colores sólidos.** El usuario dijo explícitamente que no le gustan los degradados. |
| L7 | Se usaron tintes fuera de paleta (`#FFF0F2`, `#FFE8EB`, `#D1E8F2`, `#B8DFF5`). | Las cajas suaves van en **Gray `#E6EAF1`**; los acentos fríos, en Sky Blue `#C5E3EF`. |
| L8 | Un gráfico de torta tenía las etiquetas dentro de los segmentos, sin contraste. | Etiquetas **fuera** de la forma, en Blue sobre blanco. Preferir barras a tortas. |
| L9 | Se usó un emoji (💰) como ícono de sección. | Sin emoji. Si hace falta, un ícono lineal blanco; si no, ninguno. |
| L10 | Había demasiado rojo. | El rojo destaca **un** dato por bloque; la estructura va en azules. |
| L11 | Los fondos oscuros iban en negro. | Los fondos de color van en **Blue `#0C2649`**. |
| L12 | Los textos quedaban cortados entre páginas en Word/PDF. | Usar `keepNext` + `keepLines` + `cantSplit` y `break-inside: avoid` (ver sección 4.3). |
| L13 | El header no llegaba a los bordes de la hoja. | Header y bandas **a sangre**, de extremo a extremo. |
| L14 | El documento descargado salía "todo corrido", sin paginar. | Paginar en carta tanto el HTML (`doc-page`) como el Word. |
| L15 | Las tachaduras sobre imágenes eran irregulares. | Tachado **recto, armónico y uniforme**: líneas rectas del mismo grosor y ángulo, en rojo de marca. |
| L16 | Se renombraron o reinterpretaron conceptos del original (p. ej., el pie "Bruto Finanzas"). | Si un nombre propio del original contradice la marca, **preguntar** antes de cambiarlo, o avisarlo claramente al entregar. |
| L17 | Las respuestas eran largas y con listas de "✓ logros". | Resúmenes de 1–3 líneas: qué cambió y qué falta. |
| L18 | Un brochure horizontal de 17 láminas (1920×1080) se convirtió en un documento vertical de 7 páginas tamaño carta. | **Mantener orientación, tamaño y ritmo de páginas del original** (§1.6). Horizontal 16:9 → presentación de 1920×1080, con una lámina por lámina. |
| L19 | Se eliminaron los íconos y los elementos gráficos del original, y el resultado quedó plano y con puro texto. | **Inventariar y conservar** cada ícono, cifra destacada y recurso gráfico, redibujados con el estilo de marca (§2.4). |
| L20 | Los textos se veían apagados: gris y Deep Blue en todo, sin presencia de Sky Blue. | Aplicar la **distribución de color de §2.1**: bloques Sky Blue, cifras y titulares en Sky Blue sobre Blue, y palabras clave en Blue semibold. |
| L21 | Los separadores de capítulo (número pequeño + título + regla fina) se veían feos y pobres. | Usar uno de los **separadores de capítulo de §3.4-A.4**, según el formato. |

### 1.6 Fidelidad al formato de origen (regla por defecto)
Antes de diseñar, **medir el original** y registrar cinco cosas: orientación, tamaño de página, número de páginas o láminas, tipo de pieza y el inventario de elementos gráficos. **El entregable conserva los cuatro primeros y todos los elementos del inventario**, salvo que el usuario diga otra cosa ("pásalo a vertical", "hazlo informe carta", "resúmelo en 2 páginas").

| Original | Salida por defecto |
|---|---|
| Horizontal 16:9 (1920×1080, 1280×720, PPT o brochure en láminas) | **Presentación de 1920×1080** (starter `deck_stage.js`), con **una lámina por cada lámina original**. PDF: una página por lámina. |
| Carta u oficio horizontal (792×612 pt) | `doc-page` con `orientation="landscape"` y tamaño carta; en Word, `w:orient="landscape"` (`w:w="15840" w:h="12240"`). |
| Carta vertical (612×792 pt) | `doc-page` en carta vertical (estándar de informes, §4.1). |
| A4 (595×842 pt) | Mantener A4 (`size="a4"`) y la orientación del original. |
| Cuadrado o redes (1080×1080, 1080×1350, 1080×1920) | Mismo tamaño en píxeles, con una pieza por pieza original. |
| Word sin formato especial | Informe carta vertical (estándar). |

**Cómo medirlo:**
- **PDF:** `pdf-parse` → `getInfo({ parsePageInfo: true })` → `pages[i].width` / `height`. Si el ancho es mayor que el alto, es horizontal.
- **Word:** leer `w:pgSz` (`w:orient`, `w:w`, `w:h`) en `word/document.xml`.
- **PowerPoint:** `ppt/presentation.xml` → `p:sldSz`.

**Inventario de elementos (obligatorio en brochures, presentaciones y piezas comerciales):** íconos (cuántos y de qué), cifras destacadas, fotos o imágenes, diagramas o líneas de tiempo, logos de terceros o clientes, divisores y fondos, y la estructura de columnas por lámina. Cada elemento del inventario debe aparecer en la salida:
- **Íconos:** se redibujan como íconos lineales de marca (§2.4), manteniendo el mismo concepto.
- **Fotos:** se conservan, extraídas del original, o se reemplazan por un marcador que indique qué foto va ahí.
- **Cifras:** en formato de cifra destacada.
- **Diagramas:** se rehacen con los componentes de marca.

Si no se puede extraer algo, avisarlo en el resumen final; nunca omitirlo en silencio.

---

## 2. Identidad de Marca

### 2.1 Paleta de colores [MANUAL]
| Rol | Nombre | HEX | RGB | CMYK | Uso |
|---|---|---|---|---|---|
| **Principal** | Rojo | **`#F20530`** | 242 · 5 · 48 | 0 · 97 · 75 · 0 | Datos clave, alertas, acentos, CTA, numeración de sección, bandas de datos. |
| Secundario | Deep Blue | **`#020A1B`** | 2 · 10 · 27 | 100 · 86 · 54 · 82 | Texto de cuerpo largo (recomendado por el manual), fondos "casi negro" solo si se piden. |
| Secundario | Blue | **`#0C2649`** | 12 · 38 · 73* | 100 · 82 · 42 · 43 | **Color estructural principal:** headers, cabeceras de tabla, fondos oscuros, títulos, números de paso. |
| Secundario | Sky Blue | **`#C5E3EF`** | 197 · 227 · 239 | 27 · 2 · 6 · 0 | Texto secundario sobre Blue, bordes de input, acentos fríos, barras secundarias. |
| Secundario | Gray | **`#E6EAF1`** | 230 · 234 · 241 | 12 · 6 · 4 · 0 | Cajas suaves, callouts, divisores, fondos de sección, pistas de barras. |
| Neutro | Blanco | `#FFFFFF` | 255 · 255 · 255 | 0 · 0 · 0 · 0 | Fondo base, texto sobre oscuro. |
| Neutro | Negro | `#000000` | 0 · 0 · 0 | 0 · 0 · 0 · 100 | Logo positivo, impresión a una tinta, texto largo. |

\* El manual indica R12 G38 B63 para Blue, pero su HEX `#0C2649` equivale a R12 G38 B73. **Manda el HEX.**

**Estados funcionales** (la paleta no tiene verde ni amarillo, así que no se agregan):
| Estado | Tratamiento |
|---|---|
| Error / crítico / alerta | Pastilla o caja **Rojo** con texto blanco, o borde izquierdo rojo sobre Gray. |
| Éxito / completado / vigente | Pastilla **Blue** con texto blanco, o el ícono check lineal del isotipo. |
| Advertencia / pendiente / parcial | Pastilla **Gray** con texto Blue y borde rojo de 1,5 px, si hace falta diferenciarla. |
| Informativo / neutro | Pastilla **Sky Blue** con texto Blue. |
| Deshabilitado | Fondo Gray con texto Blue al 100 %. Se distingue por el contexto; nunca bajar la opacidad del texto. |

**Proporción de color recomendada:**
- **Informe técnico:** ~65 % blanco · ~15 % Blue · **~12 % Sky Blue** · ~4 % Gray · **≤ 5 % Rojo**.
- **Brochure, presentación o pieza comercial:** ~45 % blanco · ~25 % Blue · **~22 % Sky Blue** · ≤ 8 % Rojo. Gray solo en detalles.

**Uso activo del Sky Blue `#C5E3EF` (obligatorio) [USUARIO]:** el Sky Blue es el color que da luz y vida a la marca. No es un color de relleno de fondo, y el texto nunca debe verse apagado.
| Aplicación | Cómo |
|---|---|
| **Bloques destacados** | Fondo Sky Blue con texto Blue (ratio 11,2 : 1). Es el callout preferido en brochures: reemplaza al Gray. |
| **Titulares y cifras sobre Blue** | Cifras grandes (`+100`, `+30`) y palabras clave del H1 en Sky Blue; el resto del H1 en blanco. |
| **Subtítulos y eyebrows sobre Blue** | Sky Blue en lugar de blanco atenuado. |
| **Íconos** | Trazo Sky Blue sobre Blue, o ícono Blue dentro de un círculo o cuadrado Sky Blue sobre fondo blanco. |
| **Paneles alternos** | En layouts de 2 columnas, un panel Blue y un panel Sky Blue, alternados entre láminas o secciones. |
| **Detalles** | Números de lámina, barras secundarias en gráficos, filas zebra de tablas y líneas de acento. |
| **Palabras clave en párrafos** | En Blue semibold (sobre blanco) o con resaltado de fondo Sky Blue (`background:#C5E3EF; padding:0 3px`). |

**Anti-apagado:**
- El cuerpo va en Deep Blue `#020A1B` y los títulos y el texto secundario en **Blue `#0C2649`**. **Nunca** usar grises (`#6B7280`, `#666`, `#999`) ni opacidades bajo 100 % en el texto.
- Nunca poner texto Sky Blue sobre blanco (ratio 1,3 : 1, ilegible). El Sky Blue sobre claro se usa solo como fondo o forma, nunca como texto.

**Contraste (WCAG 2.1, valores calculados):**
| Texto / Fondo | Ratio | Veredicto |
|---|---|---|
| Deep Blue `#020A1B` / Blanco | ~19,8 : 1 | AAA — cuerpo largo ideal |
| Blue `#0C2649` / Blanco | ~15,1 : 1 | AAA — títulos, cuerpo, tablas |
| Blanco / Blue `#0C2649` | ~15,1 : 1 | AAA — headers y bloques oscuros |
| Blue / Gray `#E6EAF1` | ~12,5 : 1 | AAA — callouts |
| Blue / Sky Blue `#C5E3EF` | ~11,2 : 1 | AAA — pastillas informativas |
| Sky Blue / Blue | ~11,2 : 1 | AAA — metadatos en el header |
| Rojo `#F20530` / Blanco | ~4,3 : 1 | **Solo texto grande** (≥ 14 pt bold o ≥ 18 pt) o etiquetas en mayúscula bold ≥ 8 pt con tracking. Nunca un párrafo en rojo. |
| Blanco / Rojo | ~4,3 : 1 | Igual que arriba: pastillas, bandas y botones con texto bold. |
| Rojo / Gray | ~3,6 : 1 | Solo cifras grandes o etiquetas bold. |
| **Rojo / Blue o Deep Blue** | ~3,5 : 1 | **PROHIBIDO** para texto [MANUAL]. Usar una pastilla roja con texto blanco. |

**Excepción aprobada:** sobre el header Blue se usan un **eyebrow rojo en mayúsculas bold de 8 pt** y la barra roja de acento. Se tolera porque es una etiqueta corta; no extenderlo a otro texto sobre azul.

**Reglas de aplicación cromática [MANUAL]:**
- En textos extensos usar siempre **negro o Deep Blue sobre blanco**.
- No usar texto rojo directo sobre fondos oscuros o azules; usar un contenedor o pastilla roja con texto blanco.
- **Fondo claro:** el rojo protagoniza botones y elementos clave, y el texto va en azul o gris oscuro. Es la combinación más limpia.
- **Fondo oscuro:** textos claros. El rojo no va directo al fondo; va en un contenedor claro o en una pastilla.
- **Dashboards e interfaces:** grises y azules oscuros para un look tecnológico. El rojo se reserva **exclusivamente** para el dato más importante o para alertas.

### 2.2 Tipografía [MANUAL]
| Rol | Familia | Pesos disponibles | Uso |
|---|---|---|---|
| Titulares y destacados | **IBM Plex Serif** | Thin → Black. Estilo de marca: **Medium Italic** | Portadas, H1, H2, cifras destacadas, citas. |
| Cuerpo, UI y datos | **IBM Plex Sans** | Thin → Bold (Regular y Medium son los principales) | Párrafos, tablas, formularios, etiquetas, botones. |
| Solo logotipo | Poppins Bold + Poppins ExtraLight | — | **Nunca** usar Poppins en textos. El logo nunca se recompone con tipografía; siempre se usa el archivo. |

**Carga web:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,400;0,500;0,600;0,700;1,500&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
```
**Fallbacks:**
- Serif: `'IBM Plex Serif', Georgia, 'Times New Roman', serif`
- Sans: `'IBM Plex Sans', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif`. Arial solo como último fallback técnico, nunca como elección.
- En Word: si el equipo no tiene IBM Plex instalado, Word la sustituye. Recomendar instalar IBM Plex (gratuita, OFL) o exportar a PDF para garantizar la fidelidad.

**Escala oficial — Fibonacci (piezas digitales, redes y presentaciones) [MANUAL]:**
| Nivel | Fuente | Tamaño | Aplicación |
|---|---|---|---|
| H1 Titulares | IBM Plex Serif Medium Italic | **55 – 89 pt/px** | Portadas, cabeceras principales, anuncios |
| H2 Subtítulos | IBM Plex Sans Medium | **21 – 34 pt/px** | Títulos de sección, encabezados secundarios, destacados |
| P1 Párrafos | IBM Plex Sans Regular | **13 – 21 pt/px** | Textos continuos, párrafos explicativos |
| P2 Secundario | IBM Plex Sans Regular | **8 pt/px** | Notas al pie, leyendas, datos técnicos |

Pasos de la serie para derivar niveles intermedios: 8 · 13 · 21 · 34 · 55 · 89.

**Escala para documentos impresos en carta (informes, cotizaciones, guías) [ESTÁNDAR, aprobada]:**
| Token | Fuente / peso | Tamaño | Interlineado | Tracking | Color |
|---|---|---|---|---|---|
| `doc-h1` | Plex Serif Bold (o Medium Italic, ver nota) | 25 – 30 pt | 1,12 – 1,16 | −0,5 px | Blanco (sobre Blue) |
| `doc-subtitle` | Plex Sans Medium | 10,5 – 12 pt | 1,4 | 0 | Sky Blue |
| `doc-eyebrow` | Plex Sans Bold, MAYÚSCULAS | 8 pt | 1,3 | 1,8 – 2 px | Rojo |
| `doc-h2` | Plex Serif Bold | 14 – 15 pt | 1,25 | 0 | Blue |
| `doc-h2-num` | Plex Serif Bold | 10 pt | — | 0 | Rojo |
| `doc-h3` | Plex Sans Bold | 10,5 – 11 pt | 1,3 | 0 | Blue |
| `doc-kpi` | Plex Serif Bold | 17 pt | 1,0 | 0 | Blue / Rojo / Blanco |
| `doc-body` | Plex Sans Regular | 10 – 10,5 pt | 1,65 – 1,7 | 0 | Deep Blue / negro |
| `doc-body-sm` | Plex Sans Regular | 9 – 9,5 pt | 1,6 | 0 | Deep Blue |
| `doc-table` | Plex Sans Regular | 9,5 pt (cabecera 8,5 pt bold) | 1,4 | 0,4 px en la cabecera | Deep Blue / Blanco |
| `doc-label` | Plex Sans Bold, MAYÚSCULAS | 7,5 – 8 pt | 1,3 | 1,2 – 1,6 px | Blue / Rojo |
| `doc-foot` | Plex Sans Regular | 7,5 – 8 pt | 1,5 | 0 | Blue |

- **Mínimo absoluto para impresos: 7,5 pt**, solo en etiquetas y footers. El texto corrido nunca baja de 9 pt.
- **Nota de coherencia:** el manual pide **Serif Medium Italic** para titulares y destacados. En los informes aprobados se usó Serif Bold recta en H1/H2. Para piezas de marca (portadas, redes, presentaciones, anuncios) usar Medium Italic. Para informes técnicos se acepta Bold recta, salvo que el usuario pida alinearlos al manual. **Confirmar con el usuario si hay duda.**
- **Mínimo para texto en slides de 1920×1080:** 24 px.

### 2.3 Logotipo e isotipo [MANUAL]
**Construcción:** imagotipo = isotipo (portapapeles con check, línea continua) + logotipo "Auditable" (Poppins Bold "Audi" + Poppins ExtraLight "table"). Ambos elementos se pueden usar juntos o por separado.

**Archivos y nomenclatura** (`02_logos/SVG/*.svg` y `02_logos/PNG/*@2x-8.png`; referencia visual en `02_logos/00_Nomenclatura.png`. PNG = uso digital general, SVG = vector escalable, TIFF = impresión, no incluido en el kit):
| Código | Variante | Archivos | Cuándo usar |
|---|---|---|---|
| `Bxx` | **Banner (horizontal)** | `B00_rojo` · `B01_rojo_negro` · `B02_azul` | Headers, footers, encabezados de documento, papelería, email, banners. |
| `Vxx` | **Vertical / perfil** | `V00_rojo` · `V01_rojo_negro` · `V02_azul` | Formatos 1:1, avatares, sellos, favicon, apps. |
| `Nxx` | **Negativo (blanco)** | `N00_perfil` · `N01_banner` | Sobre Blue, Deep Blue, rojo o fotos oscuras. **Es el logo por defecto de los headers azules.** |
| `Pxx` | **Positivo (negro)** | `P00_perfil` · `P01_banner` | Una tinta, grabado, timbres, fondos claros. |
| `Oxx` | **Outline** | `O00_perfil` · `O01_banner` | Bordado textil, corte o grabado láser, troquel. |

**Copias de trabajo:**
- Dentro de las plantillas: `04_plantillas/assets/logo-negativo-banner.svg` (= N01), `logo-negativo.svg` (= N00) y `logo-banner-rojo.svg` (= B00).
- Para Word: `02_logos/WORD/logo-neg.png` (N01) y `02_logos/WORD/logo-red.png` (B00), rasterizados.

**Área de protección:** unidad **X = altura de la "A" mayúscula del logotipo**. Margen libre mínimo de **1X** en todos los lados, sin texto, imágenes, cambios bruscos de color ni texturas.

**Tamaños mínimos:**
| Medio | Perfil (vertical) | Banner (horizontal) |
|---|---|---|
| Digital | 70 × 50 px | 152 × 40 px |
| Análogo / impreso | 18 × 12 mm | 30 × 8 mm |

En documentos el banner se usa a 22–27 px de alto en el header y el cierre, y a 16 px en headers internos. Por debajo de 152 px de ancho, usar el perfil o el isotipo solo.

**Usos prohibidos:** colores fuera de la paleta, fondos de poco contraste, rotar o girar, deformar o estirar, recolorear con filtros, agregar sombras o contornos, recomponer con otra tipografía, logo de color sobre fondo de color.

**Matriz fondo → logo:**
| Fondo | Logo |
|---|---|
| Blanco / Gray / Sky Blue | `B00_rojo` (preferido), `B01_rojo_negro`, `B02_azul` o `P01` |
| Blue / Deep Blue | `N01_banner` / `N00_perfil` |
| Rojo | `N01` / `N00` (blanco) |
| Foto oscura | `N01` / `N00` |

### 2.4 Iconografía [MANUAL]
- Coherente con el isotipo: **línea continua, sin relleno sólido**.
- Trazo **medio-grueso**, sin líneas finas. Referencia de implementación: **2 px en una grilla de 24 px** (1,75–2,5 px según el tamaño), `stroke-linecap: round`, `stroke-linejoin: round` y esquinas suavizadas como en el portapapeles.
- Color: Blue sobre claro, **blanco sobre oscuro** (preferencia del usuario) y rojo solo para un ícono de alerta.
- Tamaños: 16 / 20 / 24 / 32 px. Área de toque mínima de 44 px en UI móvil.
- **Nunca emoji.** En informes técnicos, un ícono que no aporta se elimina.
- **Excepción, brochures y piezas comerciales:** si el original tiene íconos, **se conservan todos** (regla 17), redibujados como línea de marca. Ahí los íconos se consideran contenido, no decoración.
- Íconos de base aceptables: Lucide o Tabler (lineales), con trazo ajustado a 2 px. En HTML se escriben como `<svg>` inline con los paths de la librería; se pueden escribir directamente, pero no se inventan formas ilustrativas complejas.
- **Contenedores de ícono** (dan presencia y usan Sky Blue):
  - **Sobre blanco:** cuadrado o círculo de 48–64 px con fondo Sky Blue e ícono Blue de 24–32 px.
  - **Sobre Blue:** ícono Sky Blue de 32–40 px sin contenedor, o dentro de un contorno Sky Blue de 1,5 px.
  - **Ícono de alerta:** contenedor rojo con ícono blanco (uno por lámina como máximo).
- **Mapeo sugerido de conceptos frecuentes a íconos de Lucide:**
  - misión → `target`
  - visión → `eye`
  - clientes → `users`
  - experiencia → `award`
  - empresas creadas → `building-2`
  - términos de giro → `file-x`
  - digitalización → `monitor-smartphone`
  - aliado → `handshake`
  - atención personalizada → `message-circle`
  - contabilidad → `calculator`
  - tributario → `receipt`
  - laboral → `briefcase`
  - societario → `landmark`
  - plazos → `calendar-clock`
  - seguridad → `shield-check`
  - reportes → `bar-chart-3`
  - contacto → `mail` / `phone` / `map-pin`

### 2.5 Voz y copy
- Español de Chile, claro y sin tecnicismos innecesarios, pero con precisión legal (artículos, leyes y códigos exactos).
- Formatos: moneda `$ 1.234.567` (punto de miles, espacio tras `$`), decimales con coma (`7,7 %`), fechas `dd-mm-aaaa` o "14 de septiembre de 2026", RUT `78.036.185-9`, siglas oficiales (SII, TGR, DT, IMM, UTM, IPC, F29, F21, DTE).
- Los títulos y el contenido del cliente **no se reescriben** (regla 1). El copy nuevo solo se permite en elementos de diseño: eyebrows, etiquetas de tarjetas o la frase de cierre, y siempre derivado del contenido original.

### 2.6 Patrón gráfico [MANUAL]
- **Origen:** el isotipo (portapapeles) repetido en una grilla escalonada.
- **Archivos** (`03_patron/`):
  - Sin fondo: `03_patron/sin_fondo/p00_individual.svg`, `p01_horizontal.svg` y `p02_diagonal.svg`.
  - Aplicados (`03_patron/aplicado/*.png`): `00_negro_sobre_fondo_blanco` · `01_azul_sobre_fondo_celeste` · `02_blanco_sobre_fondo_negro_horizontal` · `03_blanco_sobre_fondo_azul` · `04_blanco_sobre_fondo_negro` · `05_rojo_sobre_fondo_azul` · `06_blanco_sobre_fondo_rojo`.
- **Aplicación sólida:** patrón en un color sólido sobre un fondo sólido autorizado. Usar solo las combinaciones de la lista anterior.
- **Aplicación en degradado:** transición de **opacidad** por pasos de 100 · 85 · 75 · 50 · 25 · 15 · 5 %. Puede ser diagonal (desde la esquina inferior izquierda) u horizontal (de izquierda a derecha), y siempre empieza en 100 % en el origen. **Es el único degradado permitido en todo el sistema.**
- **Uso recomendado:** portadas, fondos de redes, separadores de capítulo o bandas decorativas. **Nunca detrás de texto de lectura** ni dentro del área de protección del logo. En informes técnicos, usarlo con moderación o no usarlo.

---

## 3. UI Components & Tokens Estructurales

### 3.1 Tokens (CSS custom properties de referencia)
> Para código web convencional o React. En Design Components (`.dc.html`) **no se usan clases ni variables**: los valores literales se escriben inline (ver 4.1).
```css
:root {
  /* Color */
  --au-red:        #F20530;
  --au-deep-blue:  #020A1B;
  --au-blue:       #0C2649;
  --au-sky:        #C5E3EF;
  --au-gray:       #E6EAF1;
  --au-white:      #FFFFFF;
  --au-black:      #000000;

  /* Roles */
  --au-text:            var(--au-deep-blue);
  --au-text-strong:     var(--au-blue);
  --au-text-on-dark:    var(--au-white);
  --au-text-muted-dark: var(--au-sky);     /* secundario sobre Blue */
  --au-surface:         var(--au-white);
  --au-surface-soft:    var(--au-gray);
  --au-surface-dark:    var(--au-blue);
  --au-accent:          var(--au-red);
  --au-border:          var(--au-gray);
  --au-border-strong:   var(--au-blue);

  /* Tipografía */
  --au-font-serif: 'IBM Plex Serif', Georgia, 'Times New Roman', serif;
  --au-font-sans:  'IBM Plex Sans', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  --au-fs-8: 8px; --au-fs-13: 13px; --au-fs-21: 21px;
  --au-fs-34: 34px; --au-fs-55: 55px; --au-fs-89: 89px;

  /* Espaciado (base 4 / ritmo 8) */
  --au-s-1: 4px;  --au-s-2: 8px;  --au-s-3: 12px; --au-s-4: 16px;
  --au-s-5: 20px; --au-s-6: 24px; --au-s-8: 32px; --au-s-10: 40px;
  --au-s-12: 48px; --au-s-16: 64px; --au-s-20: 80px;

  /* Bordes */
  --au-radius-doc: 0;
  --au-radius-ui:  4px;
  --au-radius-pill: 999px;
  --au-accent-bar: 4px;   /* borde izquierdo de callouts */
  --au-rule: 2px;         /* regla bajo H2 */
  --au-hairline: 1px;     /* separador de filas */

  /* Elevación (solo UI digital) */
  --au-shadow-0: none;
  --au-shadow-1: 0 1px 2px rgba(2,10,27,.08);
  --au-shadow-2: 0 4px 16px rgba(2,10,27,.12);
}
```
**Tailwind (si se usa):**
```js
theme: { extend: {
  colors: { au: { red:'#F20530', deep:'#020A1B', blue:'#0C2649', sky:'#C5E3EF', gray:'#E6EAF1' } },
  fontFamily: { serif:['"IBM Plex Serif"','Georgia','serif'], sans:['"IBM Plex Sans"','"Segoe UI"','Arial','sans-serif'] },
  fontSize: { 8:'8px', 13:'13px', 21:'21px', 34:'34px', 55:'55px', 89:'89px' },
  borderRadius: { none:'0', ui:'4px', pill:'999px' },
}}
```
Al usar Tailwind, deshabilitar o no usar la paleta por defecto (`red-500`, `slate-*`, etc.).

### 3.2 Espaciado y grid
| Contexto | Especificación |
|---|---|
| **Página carta (impresión)** | 8,5 × 11 in · márgenes de **0,75 in** (1080 twips) · área útil de 7 in (10080 twips). Header y bandas **a sangre** (márgenes negativos de −0,75 in en HTML, o una tabla a ancho completo en Word). |
| **Separación entre secciones** | 30–34 px (≈ 400 twips en Word). |
| **Título de sección → contenido** | 16–18 px. |
| **Párrafo → párrafo** | 14 px (≈ 120–140 twips). |
| **Padding de tarjetas y callouts** | 14–20 px vertical · 16–22 px horizontal. |
| **Gap de grillas de tarjetas** | 10–12 px. |
| **Grillas de documento** | 1 columna de lectura; tarjetas en 2 o 3 columnas iguales (`grid-template-columns: 1fr 1fr` / `1fr 1fr 1fr`). |
| **Web / UI** | Contenedor `max-width: 1200px`, gutter de 24 px, grilla de 12 columnas. Breakpoints: 640 / 768 / 1024 / 1280. Por debajo de 768 px, las grillas pasan a 1 columna y el padding lateral a 20 px. |
| **Slides** | 1920 × 1080, márgenes de 96–120 px, texto ≥ 24 px. |
| **Redes** | 1080 × 1080 / 1080 × 1350 / 1080 × 1920, margen de seguridad de 80 px y logo con 1X de protección. |

Usar siempre **flex/grid con `gap`**, nunca espaciado por márgenes sueltos ni espacios en blanco.

### 3.3 Bordes y sombras
| Elemento | Radius | Borde | Sombra |
|---|---|---|---|
| Documentos: todo (cards, cajas, tablas, pasos) | **0** | Acento izquierdo de 3–4 px o superior de 3 px | **Ninguna** |
| Regla de H2 | — | Inferior de 2 px Blue | — |
| Filas de tabla | — | Inferior de 1 px Gray (2 px antes de los subtotales) | — |
| Footer de página | — | Superior de 1,5 px Gray | — |
| Cierre de documento | — | Superior de 3 px Rojo | — |
| UI: botón o input | 4 px | Input de 1 px Sky Blue; foco de 2 px Blue | Botón: none; hover: `--au-shadow-1` |
| UI: card | 4 px (máx. 8 px) | 1 px Gray | `--au-shadow-1` |
| UI: modal o menú desplegable | 8 px | none | `--au-shadow-2` |
| Pastilla de estado | 0 en documentos / 999 px en UI | none | none |

### 3.4 Componentes base

#### A. Documento (informe, cotización, guía) [ESTÁNDAR aprobado]
1. **Header de portada**
   - Fondo Blue a sangre, padding de 46 px arriba y 44 px abajo.
   - Fila superior: logo `N01` de 27 px de alto a la izquierda; metadatos a la derecha (8 pt, Sky Blue, alineados a la derecha).
   - Luego: barra roja de 56×4 px, eyebrow rojo (8 pt, bold, MAYÚSCULAS, tracking de 2 px), H1 Serif Bold blanco de 25–30 pt y subtítulo Sky Blue de 10,5–12 pt.
2. **Banda de datos:** Rojo a sangre, padding de 14 px, texto blanco de 9 pt con la etiqueta regular y el valor en semibold. En la misma fila: izquierda = sujeto, derecha = folio o fecha.
3. **KPI cards (×3):**
   - Etiqueta de 8 pt bold MAYÚSCULAS.
   - Valor en Serif Bold de 17 pt.
   - Nota de 8,5 pt.
   - Variantes:
     - Destacada: fondo Blue, etiqueta roja, valor blanco y nota Sky Blue.
     - Crítica: fondo claro, borde izquierdo rojo de 3 px, valor rojo.
     - Informativa: fondo claro, borde izquierdo Blue de 3 px, valor Blue.
4. **Separador de capítulo** (reemplaza a la regla fina en brochures, presentaciones y documentos de más de 4 capítulos). Elegir **uno** y usarlo en todo el documento:
   - **A. Portadilla completa** (presentaciones de 16:9 y brochures). Lámina o página entera en Blue.
     - A la izquierda, el número del capítulo en IBM Plex Serif de 180–240 px en Sky Blue.
     - A la derecha, el eyebrow rojo ("CAPÍTULO") y el título en Serif blanca de 55–89 px.
     - Bajo el título, una línea roja de 80×6 px.
     - Patrón `03_patron/aplicado/03_blanco_sobre_fondo_azul.png` al 8–12 % de opacidad en el tercio derecho, lejos del texto. Logo N01 abajo a la derecha.
   - **B. Banda de capítulo** (documentos largos en carta u horizontales). Banda a sangre de 90–120 px de alto en Blue.
     - A la izquierda, un bloque cuadrado Sky Blue con el número en Serif Bold Blue de 28–34 pt.
     - Al lado, el título en Serif Bold blanca de 18–22 pt, con la bajada opcional en Sky Blue.
     - Sin reglas finas.
   - **C. Marcador lateral** (piezas de 1–4 capítulos, fichas y cotizaciones).
     - Número en Serif de 48–60 pt en Sky Blue sobre una columna Blue de 70–90 px a la izquierda del contenido.
     - Título en Serif Bold Blue de 18–21 pt alineado arriba.
   - **Prohibido:** número pequeño + título + regla fina de 1–2 px como único separador en brochures o presentaciones; separadores con degradados; o un título de capítulo sin ningún cambio de color o de escala.
5. **Heading de sección (informes técnicos):**
   - Fila con `01` (Serif Bold de 10 pt, rojo) y el título (Serif Bold de 15 pt, Blue).
   - Regla inferior de 2 px Blue y 10 px de separación.
   - Mantener siempre la numeración del original.
5. **Párrafo:** Sans de 10,5 pt, interlineado de 1,7, **justificado**. Negritas para cifras, plazos y artículos legales.
6. **Callout:** fondo Gray, borde izquierdo de 4 px (rojo o Blue) y padding de 16×18 px. Etiqueta opcional de 8 pt bold MAYÚSCULAS y texto de 10 pt.
7. **Callout fuerte:** fondo Blue con texto blanco. Si lleva etiqueta, va en rojo (8 pt bold) y el texto de apoyo en Sky Blue.
8. **Tabla:**
   - Cabecera Blue con texto blanco de 8,5 pt semibold y tracking de 0,4 px.
   - Celdas con padding de 10–11×12 px.
   - Filas con divisor Gray de 1 px (zebra opcional en Gray).
   - Subtotal: semibold Blue con borde superior de 2 px.
   - **Total:** fila Blue con el monto en Serif Bold blanca de 13 pt.
   - Columnas numéricas alineadas a la derecha con `white-space: nowrap`.
   - Montos negativos o recargos en rojo semibold.
9. **Paso a paso:**
   - Cuadrado de 28–32 px (Blue; el último o el crítico en rojo) con el número en Serif Bold blanca.
   - Gap de 14–16 px y el texto justificado de 10 pt a la derecha.
   - Título opcional de 10,5 pt bold Blue.
10. **Pastilla de estado:** 7,5 pt bold MAYÚSCULAS, padding de 3×8 px. Colores según los estados de la sección 2.1.
11. **Gráfico de barras:**
    - Etiqueta a la izquierda y valor a la derecha (Blue semibold; rojo solo en el dato principal).
    - Pista Gray de 6–20 px de alto y relleno sólido (Blue, Sky Blue o rojo para el dato principal).
    - Sin degradados, sin texto dentro de la barra si mide menos de 30 % y sin tortas con etiquetas internas.
12. **Fórmula o cálculo destacado:** caja clara con borde izquierdo rojo de 3 px y la fórmula centrada en Serif Bold de 14 pt, con el resultado en rojo.
13. **Cierre:** fuentes en 8,5 pt; debajo, una regla roja de 3 px con el logo `B00` de 22 px a la izquierda y la razón social de 8 pt a la derecha.
14. **Footer repetido por página:** borde superior Gray de 1,5 px, 8 pt, nombre del documento a la izquierda y "Auditable · N°" (Blue semibold) a la derecha. Se elimina si el usuario lo pide.

#### B. UI digital (web, dashboards, formularios)
| Componente | Especificación |
|---|---|
| **Botón primario** | Fondo Rojo, texto blanco Sans SemiBold de 14–16 px, padding de 12×20 px, radius de 4 px, alto mínimo de 44 px. Hover: fondo Blue. Foco: outline de 2 px Blue con offset de 2 px. |
| **Botón secundario** | Fondo Blue, texto blanco. Hover: Deep Blue. |
| **Botón terciario / ghost** | Transparente, borde de 1,5 px Blue, texto Blue. Hover: fondo Gray. |
| **Botón sobre fondo oscuro** | Pastilla roja con texto blanco, o fondo blanco con texto Blue. **Nunca** texto rojo sobre azul. |
| **Card** | Fondo blanco, borde de 1 px Gray, radius de 4 px, padding de 20–24 px y título H3 Sans SemiBold Blue. Variante destacada: fondo Blue con texto blanco. |
| **KPI de dashboard** | Etiqueta de 13 px MAYÚSCULAS Blue y valor en Serif de 34 px Blue. Solo el KPI crítico va en rojo. |
| **Input** | Alto de 44 px, borde de 1 px Sky Blue, radius de 4 px, fondo blanco, texto Deep Blue de 15 px y etiqueta de 12 px bold MAYÚSCULAS Blue encima. Foco: borde de 2 px Blue. Error: borde de 2 px Rojo y mensaje de 13 px rojo bold debajo. Campo clave o requerido: borde de 1,5 px rojo, como el formulario de la guía F29. |
| **Select / dropdown** | Igual que el input, con un chevron lineal de 2 px Blue. El menú desplegable lleva radius de 8 px, `shadow-2` y un item hover en Gray. |
| **Modal** | Overlay Deep Blue al 60 %, panel blanco con radius de 8 px, `max-width` de 560 px y padding de 32 px. Header con título Serif de 21–34 px Blue y botón de cierre lineal. Footer con los botones alineados a la derecha (primario rojo). |
| **Navegación superior** | Barra Blue de 64–72 px de alto con el logo `N01` a la izquierda (≥ 152 px de ancho). Links blancos Sans Medium de 15 px; el activo lleva subrayado rojo de 3 px. CTA: pastilla roja. |
| **Navegación lateral** | Fondo Blue, items blancos. El activo lleva fondo Deep Blue y una barra izquierda roja de 3 px. |
| **Tabs** | Texto Blue; el activo lleva un borde inferior de 3 px rojo. |
| **Tabla de datos** | Igual que la tabla de documento, más hover de fila en Gray. |
| **Toast / alerta** | Error: fondo rojo con texto blanco. Info: fondo Sky Blue con texto Blue. Éxito: fondo Blue con texto blanco y un check lineal. |

#### C. Email HTML
- Ancho de 600 px, header Blue con el logo `N01` en PNG y botón rojo con texto blanco.
- Tablas anidadas con estilos inline.
- Fuentes: IBM Plex con fallback a Arial/Helvetica. Es un fallback técnico aceptable solo en email.

#### D. Correo en texto plano (pedido frecuente)
- Saludo cordial, 3–5 párrafos breves y cifras con formato chileno.
- Cierre con firma "Equipo Auditable" y una línea de contacto.
- Tono cercano y claro, sin tecnicismos innecesarios.

---

## 4. Instrucciones de Implementación y Auditoría

### 4.1 Directrices de código (tech stack)
**Entorno de diseño de Claude (Design Components `.dc.html`):**
- Un solo DC por entregable, con un nombre descriptivo (`Informe Giro F21 Comercializadora CM.dc.html`).
- **Solo estilos inline.** Sin clases, sin hojas de estilo y sin `var()`. En `<helmet>` van únicamente `<link>` de fuentes, resets del body, estilos de `a`/`a:hover` (rojo → Blue) y `doc-page:not(:defined){visibility:hidden}`.
- Documentos imprimibles con el starter **`doc-page.js`**:
  - **Flujo continuo** (informes): `<doc-page margin="0.75in">` y header y bandas con márgenes negativos para llegar a sangre.
  - **Paginación explícita** (guías maquetadas): `<doc-page>` con hijos `<section class="page">` a tamaño carta.
  - Footer repetido: `slot="footer"`.
- Los logos se referencian desde `assets/`, junto al `.dc.html`. Al crear un entregable nuevo, copiar `04_plantillas/assets/`, `doc-page.js` y `support.js` a la misma carpeta del nuevo archivo.

**Exportación a Word (.docx) — la técnica aprobada:**
- **Usar la librería `05_word/auditable-docx.js`**, que ya implementa todo lo de esta lista. El ejemplo listo para correr está en `05_word/ejemplo-uso.js` (ver sección 5.4). Solo escribir OOXML a mano si la librería no cubre un componente.
- Lo que hace internamente: OOXML generado a mano (zip STORE + CRC32) con `[Content_Types].xml`, `_rels/.rels`, `word/document.xml`, `styles.xml`, `settings.xml`, `footer1.xml`, `word/_rels/document.xml.rels` y `word/media/*.png`.
- **Página:** `w:pgSz w:w="12240" w:h="15840"` (carta) y `w:pgMar` de 1080 en los cuatro lados (0,75 in). Footer a 500.
- **Bloques de color = tablas de una celda** con `w:shd w:fill`, bordes `nil` salvo el acento (`w:left w:sz="18|24"`), `w:tblLayout type="fixed"` y ancho de 10080 twips.
- **Header a sangre en Word:** tabla Blue a ancho completo del área útil. Si el usuario exige un borde físico, usar `w:tblInd` negativo de −1080 y un ancho de 12240.
- **Anticorte:** `w:keepNext` en títulos y en todo párrafo previo a su bloque, `w:keepLines` en todos los párrafos, `w:cantSplit` en todas las filas y `w:tblHeader` en las cabeceras de tabla.
- **Justificado:** `w:jc w:val="both"` en todo el texto corrido.
- **Fuentes:** `w:rFonts` IBM Plex Sans/Serif y `docDefaults` en Plex Sans de 10 pt, color Deep Blue y `w:lang es-CL`.
- **Logos:** PNG embebidos (`logo-neg.png`, `logo-red.png`) con `wp:inline` y proporción original. El banner mide ~0,95 in de ancho en el header.
- **Footer:** tabla de 2 columnas con un campo `PAGE`.

**Exportación a PDF:** usar el DC basado en `doc-page` y el diálogo de exportación PDF (tamaño carta). Congelar antes cualquier animación.

**Lectura de archivos del usuario:**
- `.docx`: descomprimir (EOCD → directorio central → `DecompressionStream('deflate-raw')`) y parsear `word/document.xml`, marcando párrafos, filas de tabla, negritas y listas. Extraer `word/media/*`.
- `.pdf`: `pdf-parse@2.4.5` (`getText`; `getScreenshot` solo para pocas páginas y a escala baja, porque se agota el tiempo con facilidad).
- Si falla la lectura, **pedir el texto** y nunca improvisar el contenido.

**Código web o producción (si se pide):**
- CSS puro con los tokens de la sección 3.1, o Tailwind con el `theme.extend` de marca.
- React: componentes `Button`, `Card`, `KpiCard`, `SectionHeading`, `DataTable`, `Callout`, `StepList`, `StatusPill`, alimentados por los tokens y sin colores hardcodeados fuera de la paleta.
- Accesibilidad: contraste de la sección 2.1, foco visible Blue de 2 px, áreas de toque ≥ 44 px, `lang="es-CL"` y `alt="Auditable"` en los logos.

### 4.2 Reglas de consistencia para cualquier instancia de Claude
1. **Leer este archivo completo antes de diseñar.** Ante contradicción con la sesión actual, gana lo que diga el usuario ahora; si el cambio es duradero, proponer actualizar este archivo.
2. **Contenido intocable:** copiar literal el texto, los títulos, la numeración, las tablas y las cifras del original. Tampoco agregar secciones, "resúmenes", "lecciones" ni estadísticas. Si algo del original parece un error (frase incompleta, referencia a una sección inexistente, marcador tipo "@Someone"), **conservarlo o marcarlo y avisarlo** en el resumen final; nunca "arreglarlo" en silencio.
3. **Paleta cerrada:** antes de entregar, buscar en el código todo HEX que no sea `F20530 | 020A1B | 0C2649 | C5E3EF | E6EAF1 | FFFFFF | 000000` y reemplazarlo. Las plantillas de `04_plantillas/` y la librería `05_word/` ya están limpias. Los archivos antiguos fuera del kit pueden tener `#F7F8FA`, `#FFF0F2`, `#2C2C2C` o `#6B7280`, y deben migrarse (→ `#E6EAF1` / `#020A1B` / `#0C2649`). **Excepción conocida:** los ejemplos Word de `06_ejemplos_word/` se generaron antes de la limpieza; úsalos como referencia de estructura, no de color.
4. **Rojo con presupuesto:** como máximo 1 dato rojo por bloque y ≤ 7 % de la superficie. La estructura (headers, tablas, pasos) va en Blue.
5. **Legibilidad:** cumplir la tabla de contraste; texto corrido ≥ 9 pt en impresos, ≥ 13 px en pantalla y ≥ 24 px en slides.
6. **Logo:** archivo correcto según la matriz fondo → logo, 1X de protección, tamaño ≥ mínimo y sin filtros.
7. **Paginación:** carta; ningún bloque cortado; header a sangre.
8. **Formato de entrega:** preguntar solo si no está claro (Word, PDF o ambos). **Por defecto, el mismo formato que el original** (§1.6): orientación, tamaño y número de páginas. Si el original no tiene un formato definido (texto pegado o Word simple), se usa un informe carta vertical.
9. **Iterar de forma quirúrgica:** ante un cambio pequeño, editar solo eso (sin rediseñar lo demás). Ante un rediseño, copiar el archivo como `v2` para no perder la versión anterior.
10. **Comunicación:** respuestas breves en español, sin listas de "✓" ni autoelogios. Al final, indicar qué cambió, qué quedó pendiente y qué formato se entregó.

### 4.3 Checklist de auditoría pre-entrega (obligatorio)
**Contenido**
- [ ] Todas las secciones y puntos numerados del original están presentes, en orden y con su título exacto.
- [ ] Todas las tablas y cifras coinciden 1:1 con el original. No hay datos inventados.
- [ ] Las observaciones del original (frases incompletas, referencias rotas) están reportadas al usuario.

**Marca**
- [ ] Solo hay HEX de la paleta oficial y ningún degradado (salvo el patrón por opacidad).
- [ ] El rojo se usa solo en datos clave o acentos, sin texto rojo sobre azul u oscuro.
- [ ] Los fondos oscuros van en Blue `#0C2649`.
- [ ] Titulares en IBM Plex Serif y cuerpo en IBM Plex Sans; sin otras fuentes.
- [ ] Logo negativo sobre oscuro y banner en header y cierre; 1X de protección; tamaño ≥ mínimo; sin filtros ni deformación.
- [ ] Sin emoji; íconos lineales o ninguno.

**Legibilidad y layout**
- [ ] Contraste AA (4,5:1) en todo el texto normal; el rojo solo en tamaño grande o en etiquetas bold.
- [ ] Texto corrido justificado.
- [ ] Jerarquía H1 > H2 > H3 > cuerpo > etiqueta, reconocible de un vistazo.
- [ ] Gráficos sólidos y minimalistas, con etiquetas legibles fuera de las formas.

**Impresión y exportación**
- [ ] Orientación, tamaño y número de páginas iguales al original, o según lo que pidió el usuario (§1.6).
- [ ] Todos los íconos y elementos del inventario del original están presentes (§1.6).
- [ ] El Sky Blue tiene presencia visible (bloques, cifras o íconos) y ningún texto va en gris ni con opacidad (§2.1).
- [ ] Los separadores de capítulo siguen §3.4-A.4, con una sola variante en todo el documento.
- [ ] Informes: tamaño carta y márgenes de 0,75 in.
- [ ] Header y bandas a sangre.
- [ ] Ningún bloque, fila, título o paso cortado entre páginas (en HTML: `break-inside: avoid` / `break-after: avoid`; en Word: `keepNext` + `keepLines` + `cantSplit`).
- [ ] Footer con número de página, salvo que se haya pedido quitarlo.
- [ ] El Word abre sin errores y se ve igual al HTML; el PDF se exporta en carta.

### 4.4 Plantilla de arranque (esqueleto de informe en DC)
```html
<helmet>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,400;0,600;0,700;1,500&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    doc-page:not(:defined){visibility:hidden}
    body{font-family:'IBM Plex Sans',sans-serif;color:#020A1B}
    a{color:#F20530;text-decoration:none} a:hover{color:#0C2649}
  </style>
  <script src="./doc-page.js"></script>
</helmet>
<doc-page margin="0.75in">
  <div slot="footer" style="display:flex;justify-content:space-between;border-top:1.5px solid #E6EAF1;padding-top:8px;font-size:8pt;color:#0C2649;">
    <span>[Nombre del documento]</span><span style="font-weight:600;">Auditable</span>
  </div>
  <header style="background:#0C2649;margin:-0.75in -0.75in 0 -0.75in;padding:46px 0.75in 44px 0.75in;">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:46px;">
      <img src="assets/logo-negativo-banner.svg" alt="Auditable" style="height:27px;">
      <div style="text-align:right;font-size:8pt;color:#C5E3EF;line-height:1.8;">[N° informe]<br>[Fecha]</div>
    </div>
    <div style="width:56px;height:4px;background:#F20530;margin-bottom:20px;"></div>
    <div style="font-size:8pt;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#F20530;margin-bottom:12px;">[Eyebrow]</div>
    <h1 style="font-family:'IBM Plex Serif',serif;font-size:25pt;line-height:1.16;font-weight:700;color:#FFFFFF;margin:0 0 12px 0;">[Título original]</h1>
    <p style="font-size:10.5pt;color:#C5E3EF;margin:0;">[Subtítulo original]</p>
  </header>
  <div style="background:#F20530;margin:0 -0.75in 32px -0.75in;padding:14px 0.75in;font-size:9pt;color:#FFFFFF;">[Sujeto · RUT · Folio]</div>
  <section style="break-inside:avoid;margin-bottom:32px;">
    <div style="break-after:avoid;display:flex;align-items:baseline;gap:14px;margin-bottom:18px;border-bottom:2px solid #0C2649;padding-bottom:10px;">
      <span style="font-family:'IBM Plex Serif',serif;font-size:10pt;font-weight:700;color:#F20530;">01</span>
      <h2 style="font-family:'IBM Plex Serif',serif;font-size:15pt;font-weight:700;color:#0C2649;margin:0;">[Título de sección original]</h2>
    </div>
    <p style="font-size:10.5pt;line-height:1.7;margin:0 0 14px 0;text-align:justify;">[Texto original]</p>
    <div style="background:#E6EAF1;border-left:4px solid #F20530;padding:16px 18px;">
      <p style="font-size:10pt;line-height:1.65;margin:0;text-align:justify;">[Callout original]</p>
    </div>
  </section>
  <section style="break-inside:avoid;">
    <div style="border-top:3px solid #F20530;padding-top:16px;display:flex;justify-content:space-between;align-items:flex-end;">
      <img src="assets/logo-banner-rojo.svg" alt="Auditable" style="height:22px;">
      <div style="text-align:right;font-size:8pt;color:#0C2649;line-height:1.7;">Auditable Soluciones Empresariales<br>Asesoría Tributaria, Contable y Laboral</div>
    </div>
  </section>
</doc-page>
```

### 4.5 Registro de decisiones abiertas (confirmar con el usuario)
- **H1/H2 en informes:** ¿Serif Bold recta (práctica actual aprobada) o Serif Medium Italic (manual)?
- **Neutros de texto:** este archivo fija Deep Blue `#020A1B` para el cuerpo y Blue `#0C2649` para el texto secundario, en lugar de los grises usados antes. Validar visualmente en el próximo entregable.
- **Patrón en informes:** ¿se incorpora en portadas de informes o queda solo para piezas de marca y redes?
- **Colores de estado:** la paleta no tiene verde ni amarillo. Se mantiene la codificación con rojo, azules y gris; confirmar si el cliente requiere un semáforo.

---

## 5. Kit de archivos — índice y cómo citarlos

### 5.1 Estructura de la carpeta
```
auditable_kit/
├── auditable_2026.md                  ← ESTE ARCHIVO (leer primero)
├── logos_auditable.md                 ← logos en texto: SVG inline + PNG base64 (para canales sin imágenes)
├── README.md                          ← portada del repositorio
├── 01_manual/
│   └── 01_brandguidelines.pdf         ← Manual de marca oficial (fuente de §2)
├── 02_logos/
│   ├── 00_Nomenclatura.png            ← Mapa visual de variantes B/V/N/P
│   ├── SVG/  B00_rojo · B01_rojo_negro · B02_azul · V00_rojo · V01_rojo_negro · V02_azul
│   │         N00_perfil · N01_banner · P00_perfil · P01_banner · O00_perfil · O01_banner
│   ├── PNG/  (mismos 12 nombres + "@2x-8.png")
│   └── WORD/ logo-neg.png (N01) · logo-red.png (B00)   ← los que embebe la librería Word
├── 03_patron/
│   ├── sin_fondo/  p00_individual.svg · p01_horizontal.svg · p02_diagonal.svg
│   └── aplicado/   00_negro_sobre_fondo_blanco · 01_azul_sobre_fondo_celeste ·
│                   02_blanco_sobre_fondo_negro_horizontal · 03_blanco_sobre_fondo_azul ·
│                   04_blanco_sobre_fondo_negro · 05_rojo_sobre_fondo_azul · 06_blanco_sobre_fondo_rojo (.png)
├── 04_plantillas/                     ← Diseños HTML aprobados, abren directo en el navegador
│   ├── T01 Informe tecnico.dc.html
│   ├── T02 Informe de escenarios.dc.html
│   ├── T03 Guia paso a paso.dc.html
│   ├── T04 Guia paginada.dc.html
│   ├── T05 Cotizacion.dc.html
│   ├── doc-page.js                    ← motor de páginas carta e impresión (requerido)
│   ├── support.js                     ← runtime de los .dc.html (requerido)
│   └── assets/  logo-negativo-banner.svg · logo-negativo.svg · logo-banner-rojo.svg
├── 05_word/
│   ├── auditable-docx.js              ← librería para generar Word con la marca
│   ├── logos-base64.js                ← logos PNG en base64 (Word sin binarios)
│   └── ejemplo-uso.js                 ← script mínimo listo para correr
└── 06_ejemplos_word/                  ← Word ya entregados (referencia de resultado)
    ├── E01 Guia paso a paso.docx
    ├── E02 Informe de escenarios.docx
    └── E03 Cotizacion.docx
```
**No incluidos a propósito:** fuentes (IBM Plex se carga desde Google Fonts; para Word, instalar IBM Plex Sans y Serif desde fonts.google.com), TIFF de impresión, fotos de perfil de redes, borradores y documentos de clientes. Tampoco se incluye el prototipo antiguo del manual (`10_prototipo_brandguidelines.pdf`), que fue reemplazado por `01_brandguidelines.pdf`.

### 5.2 Índice: qué archivo usar para cada cosa
| Necesito… | Archivo | Cómo citarlo / usarlo |
|---|---|---|
| Validar una regla de marca | `01_manual/01_brandguidelines.pdf` | "Según `01_manual/01_brandguidelines.pdf` pág. 17…" (colores p. 16–18, tipografía p. 20–23, logo p. 7–14, patrón p. 25, íconos p. 26, aplicaciones p. 28). |
| Logo en un header azul u oscuro | `04_plantillas/assets/logo-negativo-banner.svg` | `<img src="assets/logo-negativo-banner.svg" alt="Auditable" style="height:27px;">` |
| Logo al cierre, sobre blanco | `04_plantillas/assets/logo-banner-rojo.svg` | `height:22px`. |
| Logo cuadrado o perfil | `02_logos/SVG/V00_rojo.svg` (claro) / `N00_perfil.svg` (oscuro) | Copiar a `assets/` del entregable. |
| Logo azul o positivo | `02_logos/SVG/B02_azul.svg` / `P01_banner.svg` | Copiar a `assets/`. |
| Logo para bordado o láser | `02_logos/SVG/O00_perfil.svg` / `O01_banner.svg` | Solo producción física. |
| Logo en Word | `02_logos/WORD/logo-neg.png`, `logo-red.png` | Pasarlos a `buildDocx({ logos })`. |
| Patrón de fondo | `03_patron/aplicado/03_blanco_sobre_fondo_azul.png` (u otro de la lista) | `background-image` en portadas o redes; nunca detrás del texto. |
| Patrón vectorial para recolorear | `03_patron/sin_fondo/p01_horizontal.svg` | Solo en colores de la paleta. |
| Informe técnico (giro, IVA, tributario) | `04_plantillas/T01 Informe tecnico.dc.html` | Base: header + banda + KPIs + secciones + tablas + fórmula + recomendaciones + cierre. |
| Informe legal o laboral con escenarios | `04_plantillas/T02 Informe de escenarios.dc.html` | Añade escenarios A/B/C, recomendación destacada, checklist con estados y guion. |
| Guía de trámite paso a paso | `04_plantillas/T03 Guia paso a paso.dc.html` | Etapas en tarjetas, pasos numerados y puntos críticos. |
| Guía corta maquetada por páginas | `04_plantillas/T04 Guia paginada.dc.html` | `<section class="page">` por hoja (4 págs.), mockup de formulario, comparación lado a lado. |
| Cotización comercial | `04_plantillas/T05 Cotizacion.dc.html` | Alcance, honorarios y condiciones. |
| Brochure o presentación horizontal (16:9) | Starter `deck_stage.js` + §1.6 + separador A (§3.4-A.4) | Una lámina por lámina del original, a 1920×1080. Reutilizar los componentes de las plantillas T01–T05 dentro de cada lámina. |
| Exportar a Word | `05_word/auditable-docx.js` + `05_word/ejemplo-uso.js` | Ver 5.4. |
| Ver cómo debe quedar un Word | `06_ejemplos_word/E0x *.docx` | Abrir en Word. Solo referencia visual de estructura (ver 4.2-3). |

### 5.3 Receta: nuevo entregable HTML/PDF
1. Leer este `.md` completo y el archivo de origen del cliente (`.docx` → `readDocx()` de la librería; `.pdf` → pdf-parse).
2. Elegir la plantilla según el tipo (tabla 5.2) y **duplicarla** con un nombre descriptivo (`Informe [Tema] [Cliente].dc.html`) en una carpeta que también tenga `assets/`, `doc-page.js` y `support.js`.
3. Reemplazar solo el contenido, copiando literal títulos, textos, tablas y cifras. Conservar los componentes y estilos inline de la plantilla. Si falta un componente, crearlo con los tokens de §3.
4. Correr el checklist de §4.3.
5. PDF: exportar en tamaño carta desde el diálogo de impresión (los documentos con `doc-page` ya son imprimibles).

### 5.4 Receta: nuevo entregable Word
```js
// run_script (Claude) — rutas relativas a la raíz del proyecto
const K = 'auditable_kit/';
const A = await import(URL.createObjectURL(new Blob([await readFile(K + '05_word/auditable-docx.js')], { type: 'text/javascript' })));
const bin = async p => new Uint8Array(await (await readFileBinary(p)).arrayBuffer());
// 1) leer el origen
const { text } = await A.readDocx(await bin('uploads/ORIGEN.docx')); log(text);
// 2) componer con los componentes de marca (contenido literal del origen)
let B = A.header({ eyebrow, title: [...], subtitle, meta: [...], band: [[k, v]] });
B += A.kpis([...]) + A.h2('01', 'Título original') + A.J('Texto original…') + A.callout('…', { lead: 'Importante:' });
B += A.dataTable(cols, rows, { total }) + A.step(1, '…') + A.closing();
// 3) empaquetar
await saveFile('Salida.docx', A.buildDocx({ body: B, footer: 'Documento · Cliente',
  logos: { neg: await bin(K + '02_logos/WORD/logo-neg.png'), red: await bin(K + '02_logos/WORD/logo-red.png') } }));
```
**API de la librería:**
| Función | Qué produce |
|---|---|
| `header({eyebrow,title,subtitle,meta,band})` | Header Blue con logo negativo y banda roja. |
| `kpis([{label,value,note,variant}])` | Tarjetas KPI (`variant`: `blue` / `red` / `dark`). |
| `h2(num,title)` · `h3(t)` · `label(t,c)` | Jerarquía de títulos. |
| `J(texto)` · `bullet(texto)` | Párrafo justificado y viñeta con guion rojo (admite `**negrita**`). |
| `callout(t,{lead,accent})` · `calloutDark(t,{lead})` | Cajas Gray o Blue. |
| `step(n,t,{title,color,extra})` | Paso numerado. |
| `dataTable(cols,rows,{total,zebra})` | Tabla de marca. |
| `pill(t,kind)` | Estado: `error` / `ok` / `warn` / `info`. |
| `box(inner,opts)` · `tbl` · `tr` · `tc` · `para` · `run` · `rich` · `spacer` | Piezas base para componentes nuevos. |
| `closing(lines)` | Cierre con regla roja y logo rojo. |
| `buildDocx({body,logos,footer})` | Blob `.docx` en carta, márgenes de 0,75 in, anticorte y numeración de página. `footer: null` quita el pie. |
| `readDocx(Uint8Array)` | Texto marcado del origen (`¶` párrafo, `[ROW]` fila, `\|` celda, `**` negrita) y sus imágenes. |

Fuera de Claude, en Node ≥ 18, la librería se importa igual (`import * as A from './05_word/auditable-docx.js'`). Leer los PNG con `fs.readFileSync` y guardar con `fs.writeFileSync(Buffer.from(await blob.arrayBuffer()))`.

### 5.5 Prompt de arranque recomendado (para otra persona u otra sesión)
> "Lee `auditable_kit/auditable_2026.md` completo y síguelo como norma. Aplica el branding de Auditable al archivo `[ruta del archivo]` sin cambiar ni eliminar su contenido. Usa como base `auditable_kit/04_plantillas/[T0x].dc.html` y entrégalo en [Word / PDF / ambos], tamaño carta."

---

## 6. Distribución: cómo conectar este kit a Claude

### 6.1 Qué canal usar
| Canal | Qué sincroniza | Veredicto |
|---|---|---|
| **GitHub → Proyecto de Claude** | Solo archivos de texto (`.md`, `.svg`, `.html`, `.js`). No sincroniza PNG, PDF ni DOCX. | **Recomendado.** Sincroniza toda la norma, los logos (SVG y `logos_auditable.md`), las plantillas y el generador Word. Cuando cambias algo en GitHub, se actualiza con un clic. |
| **Subida directa al Proyecto** | Archivos uno por uno (PDF, imágenes, texto). No acepta carpetas. | **Complemento:** úsala solo para el manual PDF (`01_manual/01_brandguidelines.pdf`), que GitHub no sincroniza. |
| **Google Drive → Proyecto** | Solo documentos de Google Docs. | **No recomendado:** se pierden los SVG, las plantillas y el generador. Úsalo solo si no hay otra opción, y convierte `auditable_2026.md` y `logos_auditable.md` a Google Docs. |
| **Claude Code / herramientas con acceso al repo** | El repositorio completo, incluidos los binarios. | Ideal para producción: se clona el repo y todo funciona con las rutas de §5. |

### 6.2 Reglas para Claude según el canal (leer siempre)
1. **Si no hay imágenes disponibles** (GitHub o Drive): tomar los logos de **`logos_auditable.md`**.
   - HTML: pegar el SVG inline.
   - Word: usar el base64. `05_word/logos-base64.js` exporta `LOGO_NEG_B64`, `LOGO_RED_B64` y `b64ToBytes()` para `buildDocx({ logos: { neg: b64ToBytes(LOGO_NEG_B64), red: b64ToBytes(LOGO_RED_B64) } })`.
   - **Nunca** redibujar, recolorear ni aproximar el logo con texto o con otra fuente.
2. **Si el manual PDF no está**, esta norma ya contiene todo lo necesario (§2). No inventar reglas nuevas.
3. **Plantillas:** si no se pueden abrir los `.dc.html` como diseño, leerlas como código y replicar exactamente sus estilos inline: medidas, colores, márgenes a sangre y orden de los componentes.
4. **Salida en claude.ai:**
   - **HTML/PDF:** artefacto HTML con las fuentes IBM Plex por Google Fonts, página carta (`@page { size: letter; margin: 0.75in }`), header a sangre y `break-inside: avoid` en cada bloque.
   - **Word:** usar la herramienta de creación de archivos o de ejecución de código con `05_word/auditable-docx.js`. Si se usa Python (`python-docx`), respetar los mismos valores: carta, márgenes de 0,75 in, tablas de una celda con sombreado para los bloques de color, `keep_with_next`, `keep_together`, filas que no se cortan y texto justificado.
5. **Márgenes y logo (lo que más se corrige):**
   - Página carta con 0,75 in de margen.
   - Header Blue a sangre con el logo N01 a 27 px (≈ 0,95 in de ancho).
   - Banda roja bajo el header.
   - Cierre con regla roja de 3 px y logo B00 a 22 px.
   - Área de protección de 1X alrededor del logo.

### 6.3 Paso a paso: subir el kit a GitHub (sin terminal)
1. Crea una cuenta en **github.com** (si no tienes) e inicia sesión.
2. Arriba a la derecha: **+ → New repository**.
   - Nombre: `auditable-brand-kit`.
   - Visibilidad: **Private**. El conector de Claude funciona con repos privados.
   - Marca **Add a README file**. Luego **Create repository**.
3. Descomprime en tu computador el zip `auditable_kit` que descargaste.
4. En el repo: **Add file → Upload files**.
5. Abre la carpeta `auditable_kit` descomprimida, **selecciona todo su contenido** (carpetas y archivos, no la carpeta madre) y **arrástralo** a la ventana de GitHub. GitHub acepta carpetas completas al arrastrar y conserva la estructura. El límite es de 100 archivos por subida; el kit tiene unos 60.
6. Escribe un mensaje (por ejemplo, "Kit Auditable 2026 v1") y presiona **Commit changes**. Se reemplaza el README por defecto por el del kit.
7. Verifica que en la raíz del repo estén `auditable_2026.md`, `logos_auditable.md`, `README.md` y las carpetas `01_manual` a `06_ejemplos_word`.

### 6.4 Paso a paso: conectarlo a un Proyecto de Claude
1. En **claude.ai** ve a **Projects → Create project**. Nombre: "Auditable 2026".
2. En el panel **Project knowledge** presiona **+ → GitHub**.
3. La primera vez, autoriza la app de Claude en GitHub y dale acceso al repo `auditable-brand-kit` ("Only select repositories").
4. Elige el repo y la rama `main`, y **selecciona todo** (o como mínimo `auditable_2026.md`, `logos_auditable.md`, `04_plantillas/` y `05_word/`). Presiona **Add selected files**.
5. **Sube el manual aparte:** en Project knowledge, **+ → Upload from device** → `01_manual/01_brandguidelines.pdf`.
6. En **Project instructions** (Set project instructions), pega:
   > Eres el diseñador de marca de Auditable. Antes de cualquier entregable, lee completos `auditable_2026.md` y `logos_auditable.md` del conocimiento del proyecto y cúmplelos como norma obligatoria. No cambies ni elimines el contenido del cliente; solo aplica el diseño. Usa el logo exacto de `logos_auditable.md` (nunca lo redibujes). Por defecto entrega en tamaño carta, en Word y/o PDF según se pida, con texto justificado y sin cortes entre páginas.
7. Prueba: abre un chat en el proyecto, adjunta un documento y escribe "Aplica el branding de Auditable a este archivo y entrégalo en Word".

### 6.5 Mantener el kit al día
- **Editar o agregar archivos:** en GitHub, abre el archivo → lápiz (Edit) → Commit. O usa **Add file → Upload files** con el mismo nombre para reemplazarlo.
- **Actualizar Claude:** en el proyecto, dentro de Project knowledge, presiona **Sync** (ícono ↻) sobre el repo. Si subes un manual nuevo, reemplaza el PDF a mano.
- **Cada aprobación o corrección nueva del usuario:** agregarla a §1.5 / §4.5 de este archivo con su fecha y hacer el commit. Así todos los proyectos conectados heredan la regla.
- **Compartir con el equipo:** en un plan Team o Enterprise, comparte el proyecto desde Share. Si no, cada persona conecta el mismo repo (debe tener acceso a él en GitHub).

### 6.6 Alternativa con Google Drive (si no se usa GitHub)
1. Sube la carpeta `auditable_kit` a Drive (Drive sí acepta arrastrar carpetas) para respaldo y descarga del equipo.
2. Abre `auditable_2026.md` y `logos_auditable.md` con Google Docs (Abrir con → Documentos de Google) y guárdalos como Docs.
3. En el Proyecto de Claude: Project knowledge → **+ → Google Drive** → elige esos 2 Docs.
4. Sube a mano, desde el dispositivo, el PDF del manual y las plantillas `T01`–`T05` (los `.html` se pueden subir como texto).
5. Pega las mismas Project instructions de 6.4-6.

---
*Mantenimiento: actualizar este archivo cada vez que el usuario apruebe un patrón nuevo o corrija un error recurrente. Registrar el cambio con fecha en la sección 1.5 o 4.5.*
