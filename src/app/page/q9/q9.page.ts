import {Component} from '@angular/core';
import {QuestionComponent} from '../../components/question/question.component';

@Component({
    selector: 'app-q9',
    templateUrl: './q9.page.html',
    styleUrls: ['./q9.page.scss'],
})
export class Q9Page extends QuestionComponent {

    private streetName = 'WEST HILL ST. #2';
    private questionNumber = 'q9';
    private nextQuestionNumber = 'q10';
}
