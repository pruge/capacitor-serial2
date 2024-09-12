var capacitorSerial = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
