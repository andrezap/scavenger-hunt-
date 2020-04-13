import {Component} from '@angular/core';
import {QuestionComponent} from '../../components/question/question.component';

@Component({
    selector: 'app-q13',
    templateUrl: './q13.page.html',
    styleUrls: ['./q13.page.scss'],
})
export class Q13Page extends QuestionComponent {
    private streetName = 'MEETING ST.';
    private questionNumber = 'q13';
    private nextQuestionNumber = 'q14';
}
