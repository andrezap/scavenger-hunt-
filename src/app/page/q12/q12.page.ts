import {Component} from '@angular/core';
import {QuestionComponent} from '../../components/question/question.component';

@Component({
    selector: 'app-q12',
    templateUrl: './q12.page.html',
    styleUrls: ['./q12.page.scss'],
})
export class Q12Page extends QuestionComponent {

    private streetName = 'WEST ST. - MULT. CHOICE';
    private questionNumber = 'q12';
    private nextQuestionNumber = 'q13';
    private questionSentence = 'TAP the picture that represents the Junkanoo Museum.';
    private qntOfImages = 2;

}
