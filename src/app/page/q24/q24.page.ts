import {Component, OnInit} from '@angular/core';
import {QuestionComponent} from '../../components/question/question.component';

@Component({
    selector: 'app-q24',
    templateUrl: './q24.page.html',
    styleUrls: ['./q24.page.scss'],
})
export class Q24Page extends QuestionComponent implements OnInit {

    private streetName = 'WEST ST.';
    private questionNumber = 'q24';
    private nextQuestionNumber;
    private questionSentence = 'TAP the picture that represents the Junkanoo Museum.';
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
                this.nextQuestionNumber = 'q25';
            }
        });
    }
}
