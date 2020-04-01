import {Component} from '@angular/core';
import {QuestionComponent} from '../../components/question/question.component';

@Component({
    selector: 'app-q11',
    templateUrl: './q11.page.html',
    styleUrls: ['./q11.page.scss'],
})
export class Q11Page extends QuestionComponent {
    private streetName = 'WEST ST.';
    private questionNumber = 'q11';
    private nextQuestionNumber = 'q12';
}
