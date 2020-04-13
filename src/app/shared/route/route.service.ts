import {Injectable} from '@angular/core';
import {StorageService} from '../service/storage.service';

@Injectable({
    providedIn: 'root'
})
export class RouteService {

    private ROUTE_KEY = 'route';

    constructor(private storage: StorageService) {
    }

    async setRoute(route: string) {
        await this.storage.setString(this.ROUTE_KEY, route);
    }

    currentRoute() {
        return this.storage.getString(this.ROUTE_KEY);
    }
}
