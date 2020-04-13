import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StorageService} from '../../shared/service/storage.service';

@Component({
    selector: 'app-change-route',
    templateUrl: './change-route.page.html',
    styleUrls: ['./change-route.page.scss'],
})
export class ChangeRoutePage implements OnInit {

    private nextQuestionA = 'q9';
    private nextQuestionB = 'q16';

    constructor(private router: Router, private storageService: StorageService) {
    }

    ngOnInit(): void {
    }

    private chooseA(): void {
        const page = '/' + this.nextQuestionA;
        this.storageService.setString('route', 'A');
        this.router.navigate([page]);
    }

    private chooseB(): void {
        const page = '/' + this.nextQuestionB;
        this.storageService.setString('route', 'B');
        this.router.navigate([page]);
    }
}
