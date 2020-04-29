import {Component} from '@angular/core';
import {QuestionTextAlternativeComponent} from '../../components/question-text-alternative/question-text-alternative.component';

@Component({
    selector: 'app-q10',
    templateUrl: './q10.page.html',
    styleUrls: ['./q10.page.scss'],
})
export class Q10Page extends QuestionTextAlternativeComponent {

    private streetName = 'WEST HILL ST';
    private questionNumber = 'q10';
    private nextQuestionNumber = 'q11';
    private questionSentence = 'Graycliff is home to the ruins of the oldest church built in the Bahamas and houses up to 250,000 bottles of wine';
    private qntOfImages = 2;
    private alternativesArr = ['TRUE', 'FALSE'];
}
