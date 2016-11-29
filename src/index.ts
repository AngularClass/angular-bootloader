/*
 * @AngularClass
 */

export function bootloader (main): void {
  switch (document.readyState) {
    case 'loading':
      document.addEventListener('DOMContentLoaded', () => main());
      break;
    case 'interactive':
    case 'complete':
    default:
      main();
  }
}
