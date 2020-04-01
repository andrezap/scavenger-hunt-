import {Component} from '@angular/core';
import {QuestionComponent} from '../../components/question/question.component';

@Component({
    selector: 'app-q8',
    templateUrl: './q8.page.html',
    styleUrls: ['./q8.page.scss'],
})
export class Q8Page extends QuestionComponent {

    private streetName = 'WEST HILL ST. #1';
    private questionNumber = 'q8';
    private nextQuestionNumber = 'q9';
}
