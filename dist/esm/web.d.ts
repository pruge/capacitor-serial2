import { WebPlugin } from '@capacitor/core';
import type { SerialPlugin, SerialResponse } from './definitions';
export declare class SerialWeb extends WebPlugin implements SerialPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    registerUsbAttachedDetachedCallback(): Promise<string>;
    devices(): Promise<SerialResponse<any>>;
    open(): Promise<SerialResponse<any>>;
    close(): Promise<SerialResponse<any>>;
    read(): Promise<SerialResponse<any>>;
    write(): Promise<SerialResponse<any>>;
    registerReadCallback(): Promise<string>;
}
