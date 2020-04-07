import {Component} from '@angular/core';
import {QuestionTextAlternativeComponent} from '../../components/question-text-alternative/question-text-alternative.component';

@Component({
    selector: 'app-q20',
    templateUrl: './q20.page.html',
    styleUrls: ['./q20.page.scss'],
})
export class Q20Page extends QuestionTextAlternativeComponent {

    private streetName = 'WEST BAY ST. #1';
    private questionNumber = 'q20';
    private nextQuestionNumber = 'q21';
    private questionSentence = 'TAP the correct answer: Junkanoo was originally started by';
    private qntOfImages = 2;
    private alternativesArr = ['SLAVES', 'MUSICIANS', 'GOVERNMENT', 'CLOWNS'];
}
