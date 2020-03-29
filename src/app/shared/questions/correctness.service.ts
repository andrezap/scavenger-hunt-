import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CorrectnessService {
  
  private answersQ1 = [0,1,2,5];
  private answersQ2 = [1,2,4,5];
  private answersQ3 = [0];
  private answersQ4 = [0,3,4,5];
  private answersQ5 = [0,1,3,4];
  
  constructor() { }
  
  public correctAnswer(question : string) 
  {
    let answersToQuestion = {
      'Q1' : this.answersQ1,
      'Q2' : this.answersQ2,
      'Q3' : this.answersQ3,
      'Q4' : this.answersQ4,
      'Q5' : this.answersQ5
    };
    
    return answersToQuestion[question];
  }
}
