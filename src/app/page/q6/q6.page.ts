import {Component} from '@angular/core';
import {QuestionComponent} from '../../components/question/question.component';

@Component({
    selector: 'app-q6',
    templateUrl: './q6.page.html',
    styleUrls: ['./q6.page.scss'],
})
export class Q6Page extends QuestionComponent {

    private streetName = 'SHIRLEY ST. - MULT CHOICE #1';
    private questionNumber = 'q6';
    private nextQuestionNumber = 'q7';
    private questionSentence = 'TAP the church tower that belongs to the oldest church on the island.';
    private qntOfImages = 2;
}
