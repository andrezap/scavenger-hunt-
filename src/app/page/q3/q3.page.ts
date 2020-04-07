import {Component} from '@angular/core';
import {QuestionComponent} from '../../components/question/question.component';

@Component({
    selector: 'app-q3',
    templateUrl: './q3.page.html',
    styleUrls: ['./q3.page.scss'],
})
export class Q3Page extends QuestionComponent {

    private streetName = 'PARLIMENT ST.';
    private questionNumber = 'q3';
    private nextQuestionNumber = 'q4';
    private questionSentence = 'TAP the picture that was once one of our oldest jails, but now a library?';
    private qntOfImages = 2;
}
