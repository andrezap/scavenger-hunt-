import {Injectable} from '@angular/core';
import {Plugins} from '@capacitor/core';

const {Storage} = Plugins;

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    async setString(key: string, value: string) {
        await Storage.set({key, value});
    }

    async getString(key: string): Promise<{ value: any }> {
        return (await Storage.get({key}));
    }

    async clear() {
        await Storage.clear();
    }
}
