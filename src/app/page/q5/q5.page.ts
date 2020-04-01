import {Component} from '@angular/core';
import {QuestionComponent} from '../../components/question/question.component';

@Component({
    selector: 'app-q5',
    templateUrl: './q5.page.html',
    styleUrls: ['./q5.page.scss'],
})
export class Q5Page extends QuestionComponent {

    private streetName = 'SHIRLEY ST. #2';
    private questionNumber = 'q5';
    private nextQuestionNumber = 'q6';
}
