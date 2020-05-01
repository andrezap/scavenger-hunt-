import {Component, OnInit} from '@angular/core';
import {PointsService} from '../../shared/point/points.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-ranking',
    templateUrl: './ranking.page.html',
    styleUrls: ['./ranking.page.scss'],
})
export class RankingPage implements OnInit {

    private total;
    private totalRight;
    private totalWrong;

    constructor(private pointsService: PointsService, public router: Router) {
    }

    ngOnInit(): void {
        this.pointsService.total().then((data: any) => {
            this.total = data.value;
        });

        this.pointsService.totalRight().then(data => {
            this.totalRight = data.value;
        });

        this.pointsService.totalWrong().then(data => {
            this.totalWrong = data.value;
        });
    }

    restart() : void{
        this.router.navigate(['/home']);
    }
}
