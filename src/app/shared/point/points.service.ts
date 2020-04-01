import {Injectable} from '@angular/core';
import {StorageService} from '../service/storage.service';

@Injectable({
    providedIn: 'root'
})
export class PointsService {

    constructor(private storage: StorageService) {
    }

    countRightAnswer() {
        this.storage.getString('points').then((data: any) => {
            const point = Number(data.value) + 1;
            this.storage.setString('points', point.toString());
        });
    }

    countWrongAnswer() {
        this.storage.getString('points').then((data: any) => {
            const point = Number(data.value) - 1;
            this.storage.setString('points', point.toString());
        });
    }

    start() {
        this.storage.clear().then(() => {
            this.storage.setString('points', '0');
        });
    }

    total() {
        return this.storage.getString('points');
    }
}
