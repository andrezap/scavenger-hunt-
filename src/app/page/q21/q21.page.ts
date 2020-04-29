import {Component, OnInit} from '@angular/core';
import {QuestionComponent} from '../../components/question/question.component';

@Component({
    selector: 'app-q21',
    templateUrl: './q21.page.html',
    styleUrls: ['./q21.page.scss'],
})
export class Q21Page extends QuestionComponent implements OnInit {

    private streetName = 'WEST BAY ST. #2';
    private questionNumber = 'q21';
    private nextQuestionNumber;

    ngOnInit() {
        super.ngOnInit();
        this.getNextQuestion();
    }

    private getNextQuestion(): void {
        this.routeService.currentRoute().then(data => {
            if (data.value === null) {
                this.activeRoute.queryParams.subscribe(params => {
                    this.nextQuestionNumber = params.lastPage;
                });
            }
            const currentRoute = data.value;
            if (currentRoute === 'A') {
                this.nextQuestionNumber = 'q23';
            }

            if (currentRoute === 'B') {
                this.nextQuestionNumber = 'q22';
            }
        });
    }
}
