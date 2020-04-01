import {Component} from '@angular/core';
import {QuestionComponent} from '../../components/question/question.component';

@Component({
    selector: 'app-q2',
    templateUrl: './q2.page.html',
    styleUrls: ['./q2.page.scss'],
})
export class Q2Page extends QuestionComponent {

    private streetName = 'PARLIMENT ST. #2';
    private questionNumber = 'q2';
    private nextQuestionNumber = 'q3';
}
