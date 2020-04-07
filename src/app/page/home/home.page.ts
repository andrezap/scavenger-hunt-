import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {PointsService} from '../../shared/point/points.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    public logo = 'assets/img/logo.png';

    constructor(private router: Router, private pointService: PointsService) {
    }

    public start() {
        // this.pointService.start();
        this.router.navigate(   ['q1']);
    }
}
