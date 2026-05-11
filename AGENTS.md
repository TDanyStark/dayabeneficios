# Dayabeneficios — Agent Skills

## Project Stack

- **Framework**: Astro 6 + Tailwind CSS 4
- **Output**: Static site, base path `/apps/abbott/dayabeneficios`
- **Scripts**: `is:inline` para lógica de quiz (sin bundling), módulos ES para imports de librerías

## Skills

| Skill | Descripción | Archivo |
|-------|-------------|---------|
| `quiz-confetti` | Confetti lateral al acertar un ítem y lluvia aleatoria de 3 s en perfect score, usando `canvas-confetti` expuesto como `window.quizConfetti` | [SKILL.md](skills/quiz-confetti/SKILL.md) |

## Brand Colors

Los colores de la marca de este proyecto para usar en `CONFETTI_COLORS` y cualquier efecto visual:

| Token         | Valor     |
|---------------|-----------|
| Rosa primario | `#b10165` |
| Rojo medio    | `#ff2b01` |
| Dorado        | `#db8d14` |
| Azul          | `#1686cd` |
| Blanco        | `#ffffff` |
