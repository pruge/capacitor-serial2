import { WebPlugin } from '@capacitor/core';
export class SerialWeb extends WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
    registerUsbAttachedDetachedCallback() {
        throw new Error('Method not implemented.');
    }
    devices() {
        throw new Error('Method not implemented.');
    }
    open() {
        throw new Error('Method not implemented.');
    }
    close() {
        throw new Error('Method not implemented.');
    }
    read() {
        throw new Error('Method not implemented.');
    }
    write() {
        throw new Error('Method not implemented.');
    }
    registerReadCallback() {
        throw new Error('Method not implemented.');
    }
}
//# sourceMappingURL=web.js.map