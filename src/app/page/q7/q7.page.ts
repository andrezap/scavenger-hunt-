import { Component } from '@angular/core';
import {QuestionComponent} from '../../components/question/question.component';

@Component({
  selector: 'app-q7',
  templateUrl: './q7.page.html',
  styleUrls: ['./q7.page.scss'],
})
export class Q7Page extends QuestionComponent {

  private streetName = 'SHIRLEY ST. - MULT CHOICE #2';
  private questionNumber = 'q7';
  private nextQuestionNumber = 'q8';
  private questionSentence = 'TAP the statue that discovered the Bahamas.';
  private qntOfImages = 2;
}
