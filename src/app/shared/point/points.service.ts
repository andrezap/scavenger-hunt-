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
        }).catch((e) => console.log(e));
    }

    countWrongAnswer() {
        this.storage.getString('points').then((data: any) => {
            const point = Number(data.value) - 1;
            this.storage.setString('points', point.toString());
        });
    }

    async start() {
         await this.storage.setString('points', '0');
    }

    total() {
        return this.storage.getString('points');
    }
}
