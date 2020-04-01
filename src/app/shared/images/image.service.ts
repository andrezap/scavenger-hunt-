import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ImageService {

    private baseSrc = 'assets/img/';

    public images(question: string, quantity = 6): string[] {
        const path = this.createPath(question);
        const imgsPath = [];

        for (let index = 0; index < quantity; index++) {
            imgsPath[index] = path + (index + 1) + '.jpg';
        }

        return imgsPath;
    }

    private createPath(question: string): string {
        return this.baseSrc + question + '/' + question + '_';
    }
}
