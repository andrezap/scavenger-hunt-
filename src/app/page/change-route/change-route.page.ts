import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RouteService} from '../../shared/route/route.service';

@Component({
    selector: 'app-change-route',
    templateUrl: './change-route.page.html',
    styleUrls: ['./change-route.page.scss'],
})
export class ChangeRoutePage implements OnInit {

    private nextQuestionA = 'q9';
    private nextQuestionB = 'q16';

    constructor(private router: Router, private routeService: RouteService) {
    }

    ngOnInit(): void {
    }

    private chooseA(): void {
        const page = '/' + this.nextQuestionA;
        this.routeService.setRoute('A');
        this.router.navigate([page]);
    }

    private chooseB(): void {
        const page = '/' + this.nextQuestionB;
        this.routeService.setRoute('B');
        this.router.navigate([page]);
    }
}
