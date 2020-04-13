import {Injectable} from '@angular/core';
import {StorageService} from '../service/storage.service';

@Injectable({
    providedIn: 'root'
})
export class PointsService {

    private POINT_KEY = 'points';

    constructor(private storage: StorageService) {
    }

    countRightAnswer() {
        this.storage.getString(this.POINT_KEY).then((data: any) => {
            const point = Number(data.value) + 1;
            this.storage.setString(this.POINT_KEY, point.toString());
        }).catch((e) => console.log(e));
    }

    countWrongAnswer() {
        this.storage.getString(this.POINT_KEY).then((data: any) => {
            const point = Number(data.value) - 1;
            this.storage.setString(this.POINT_KEY, point.toString());
        });
    }

    async start() {
        await this.storage.setString(this.POINT_KEY, '0');
    }

    total() {
        return this.storage.getString(this.POINT_KEY);
    }
}
