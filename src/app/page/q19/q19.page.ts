import {Component} from '@angular/core';
import {QuestionTextAlternativeComponent} from '../../components/question-text-alternative/question-text-alternative.component';

@Component({
    selector: 'app-q19',
    templateUrl: './q19.page.html',
    styleUrls: ['./q19.page.scss'],
})
export class Q19Page extends QuestionTextAlternativeComponent {

    private streetName = 'MARLBOROUGH ST.';
    private questionNumber = 'q19';
    private nextQuestionNumber = 'q20';
    private questionSentence = 'The British Colonial Hilton is the site of the oldest hotel on the island.  ' +
        'The original hotel, The Colonial Hotel, was constructed in what year?';
    private qntOfImages = 1;
    private alternativesArr = ['1924', '2008', '1901', '1966'];
}
