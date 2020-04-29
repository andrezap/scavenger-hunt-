import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PointsService} from '../../shared/point/points.service';
import {Platform} from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {

    public logo = 'assets/img/logo.png';
    private backBtnPressed = false;

    constructor(private router: Router, private pointService: PointsService, private platform: Platform) {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        this.platform.backButton.subscribe(() => {
            if (this.backBtnPressed) {
                navigator['app'].exitApp();
            }
            this.backBtnPressed = true;
        });
    }

    public start() {
        this.pointService.start();
        this.router.navigate(['q1']);
    }
}
