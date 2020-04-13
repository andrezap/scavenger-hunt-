import {Component} from '@angular/core';
import {QuestionComponent} from '../../components/question/question.component';

@Component({
    selector: 'app-q15',
    templateUrl: './q15.page.html',
    styleUrls: ['./q15.page.scss'],
})
export class Q15Page extends QuestionComponent {
    private streetName = 'GIBBS/MARCUS BETHEL WAY';
    private questionNumber = 'q15';
    private nextQuestionNumber = 'q21';
    private questionSentence = 'TAP the picture of the Guard House at Fort Charlotte.';
    private qntOfImages = 2;
}
