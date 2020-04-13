import {Component, OnInit} from '@angular/core';
import {QuestionComponent} from '../../components/question/question.component';

@Component({
    selector: 'app-q22',
    templateUrl: './q22.page.html',
    styleUrls: ['./q22.page.scss'],
})
export class Q22Page extends QuestionComponent implements OnInit {

    private streetName = 'WEST BAY ST. #2';
    private questionNumber = 'q22';
    private nextQuestionNumber;
    private questionSentence = 'TAP the picture that represents the five men that perished while trying to save two men from Nassau’s bar during rough seas in 1861.';
    private qntOfImages = 2;

    ngOnInit() {
        super.ngOnInit();
        this.getNextQuestion();
    }

    private getNextQuestion(): void {
        this.routeService.currentRoute().then(data => {
            const currentRoute = data.value;
            if (currentRoute === 'A') {
                this.nextQuestionNumber = 'ranking';
            }
            if (currentRoute === 'B') {
                this.nextQuestionNumber = 'q23';
            }
        });
    }
}
