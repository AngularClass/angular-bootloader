/*
 * @AngularClass
 */

export function bootloader (main): void {
  switch (document.readyState) {
    case 'loading':
      function _domReadyHandler() {
        document.removeEventListener('DOMContentLoaded', _domReadyHandler, false);
        main();
      }
      document.addEventListener('DOMContentLoaded', _domReadyHandler, false);
      break;
    case 'interactive':
    case 'complete':
    default:
      main();
  }
}
