import {Component, OnInit} from '@angular/core';
import {QuestionComponent} from '../../components/question/question.component';

@Component({
    selector: 'app-q23',
    templateUrl: './q23.page.html',
    styleUrls: ['./q23.page.scss'],
})
export class Q23Page extends QuestionComponent implements OnInit {

  private streetName = 'WEST BAY ST. #3';
  private questionNumber = 'q23';
  private nextQuestionNumber = 'q24';
}
