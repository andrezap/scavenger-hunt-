import {Component} from '@angular/core';
import {QuestionComponent} from '../../components/question/question.component';

@Component({
    selector: 'app-q17',
    templateUrl: './q17.page.html',
    styleUrls: ['./q17.page.scss'],
})
export class Q17Page extends QuestionComponent {
    private streetName = 'MEETING ST.';
    private questionNumber = 'q17';
    private nextQuestionNumber = 'q18';
}
