import { WebPlugin } from '@capacitor/core';
import type { SerialPlugin } from './definitions';
export declare class SerialWeb extends WebPlugin implements SerialPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
