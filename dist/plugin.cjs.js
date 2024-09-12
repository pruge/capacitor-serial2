'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const Serial = core.registerPlugin('Serial', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.SerialWeb()),
});

class SerialWeb extends core.WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    SerialWeb: SerialWeb
});

exports.Serial = Serial;
//# sourceMappingURL=plugin.cjs.js.map
