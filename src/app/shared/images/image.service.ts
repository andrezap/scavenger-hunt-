import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  
  private baseSrc = 'assets/img/'
  
  constructor() { }
  
  public images(question : string) : string[]
  {
    let path = this.createPath(question);
    let imgsPath = [];
    
    for (let index = 0; index < 6; index++) {
      imgsPath[index] = path + (index + 1) + '.jpg'; 
    }
    
    return imgsPath;
  }
  
  private createPath(question : string) : string
  {
    return this.baseSrc + question + '/' + question + '_';
  }
}
