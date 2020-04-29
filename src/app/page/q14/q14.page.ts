import {Component} from '@angular/core';
import {QuestionComponent} from '../../components/question/question.component';

@Component({
    selector: 'app-q14',
    templateUrl: './q14.page.html',
    styleUrls: ['./q14.page.scss'],
})
export class Q14Page extends QuestionComponent {
    private streetName = 'GIBBS LANE/MARCUS BETHEL WAY';
    private questionNumber = 'q14';
    private nextQuestionNumber = 'q15';
}
