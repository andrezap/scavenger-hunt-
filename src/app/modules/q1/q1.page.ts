import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/shared/images/image.service';
import { CorrectnessService } from 'src/app/shared/questions/correctness.service';

@Component({
  selector: 'app-q1',
  templateUrl: './q1.page.html',
  styleUrls: ['./q1.page.scss'],
})
export class Q1Page implements OnInit {
  
  private NOT_FOUND = -1;
  
  private imgs = [];
  private correctAnswers = [];
  private clickedAnswers = [];
  
  constructor(private imageService : ImageService, private correctnessService : CorrectnessService) { }
  
  ngOnInit() {
    this.imgs = this.imageService.images('q1');
    this.correctAnswers = this.correctnessService.correctAnswer('Q1');
  }
  
  public clickAnswer(index : number)  : void {
    if(!this.clicked(index)) {
      this.clickedAnswers.push(index);
    }
  }
  
  public isCorrect(index : number) : boolean {
    let correctAnswersIndex = this.correctAnswers.indexOf(index);
    return correctAnswersIndex !== this.NOT_FOUND; 
  }
  
  public clicked(index : number) : boolean {
    return this.clickedAnswers.indexOf(index) !== this.NOT_FOUND;
  }

  public color(index : number) : string {
    if (this.clicked(index) && this.isCorrect(index)) {
      return 'secondary';
    }

    return '';
  }
}
