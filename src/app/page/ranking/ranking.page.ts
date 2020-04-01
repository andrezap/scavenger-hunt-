import {Component, OnInit} from '@angular/core';
import {PointsService} from '../../shared/point/points.service';

@Component({
    selector: 'app-ranking',
    templateUrl: './ranking.page.html',
    styleUrls: ['./ranking.page.scss'],
})
export class RankingPage implements OnInit {

    private total;

    constructor(private pointsService: PointsService) {
    }

    ngOnInit(): void {
        this.total = this.pointsService.total();
    }
}
