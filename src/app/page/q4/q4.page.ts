import {Component} from '@angular/core';
import {QuestionComponent} from '../../components/question/question.component';

@Component({
    selector: 'app-q4',
    templateUrl: './q4.page.html',
    styleUrls: ['./q4.page.scss'],
})
export class Q4Page extends QuestionComponent {

    private streetName = 'SHIRLEY ST. #1';
    private questionNumber = 'q4';
    private nextQuestionNumber = 'q5';
}
