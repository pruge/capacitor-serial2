import { registerPlugin } from '@capacitor/core';
const Serial = registerPlugin('Serial', {
    web: () => import('./web').then(m => new m.SerialWeb()),
});
export * from './definitions';
export { Serial };
//# sourceMappingURL=index.js.map