import {Component} from '@angular/core';
import {QuestionComponent} from '../../components/question/question.component';

@Component({
    selector: 'app-q18',
    templateUrl: './q18.page.html',
    styleUrls: ['./q18.page.scss'],
})
export class Q18Page extends QuestionComponent {

    private streetName = 'WEST BAY ST. #1';
    private questionNumber = 'q18';
    private nextQuestionNumber = 'q19';
}
