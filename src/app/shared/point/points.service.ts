import {Injectable} from '@angular/core';
import {StorageService} from '../service/storage.service';

@Injectable({
    providedIn: 'root'
})
export class PointsService {

    private POINT_RIGHT_KEY = 'right_points';
    private POINTS_WRONG_KEY = 'wrong_points';
    private POINTS_TOTAL_KEY = 'total_points';

    constructor(private storage: StorageService) {
    }

    countRightAnswer() {
        this.storage.getString(this.POINT_RIGHT_KEY).then((data: any) => {
            const counterRightPoints = Number(data.value) + 1;
            this.storage.setString(this.POINT_RIGHT_KEY, counterRightPoints.toString());
            this.addTotal();
        }).catch((e) => console.log(e));
    }

    countWrongAnswer() {
        this.storage.getString(this.POINTS_WRONG_KEY).then((data: any) => {
            const counterWrongPoints = Number(data.value) + 1;
            this.storage.setString(this.POINTS_WRONG_KEY, counterWrongPoints.toString());
            this.subtractTotal();
        });
    }

    addTotal() {
        this.storage.getString(this.POINTS_TOTAL_KEY).then((data: any) => {
            const total = Number(data.value) + 1;
            this.storage.setString(this.POINTS_TOTAL_KEY, total.toString());
        });
    }

    subtractTotal() {
        this.storage.getString(this.POINTS_TOTAL_KEY).then((data: any) => {
            const total = Number(data.value) - 1;
            this.storage.setString(this.POINTS_TOTAL_KEY, total.toString());
        });
    }

    async start() {
        await this.storage.setString(this.POINT_RIGHT_KEY, '0');
        await this.storage.setString(this.POINTS_WRONG_KEY, '0');
        await this.storage.setString(this.POINTS_TOTAL_KEY, '0');
    }

    total() {
        return this.storage.getString(this.POINTS_TOTAL_KEY);
    }

    totalWrong() {
        return this.storage.getString(this.POINTS_WRONG_KEY);
    }

    totalRight() {
        return this.storage.getString(this.POINT_RIGHT_KEY);
    }
}
