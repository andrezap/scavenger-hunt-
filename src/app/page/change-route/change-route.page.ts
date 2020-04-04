import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-change-route',
    templateUrl: './change-route.page.html',
    styleUrls: ['./change-route.page.scss'],
})
export class ChangeRoutePage implements OnInit {

    private nextQuestionA = 'q16';
    private nextQuestionB = 'q21';

    constructor(public router: Router) {
    }

    ngOnInit(): void {
    }

    private chooseA(): void {
        const page = '/' + this.nextQuestionA;
        this.router.navigate([page]);
    }

    private chooseB(): void {
        const page = '/' + this.nextQuestionB;
        this.router.navigate([page]);
    }
}
