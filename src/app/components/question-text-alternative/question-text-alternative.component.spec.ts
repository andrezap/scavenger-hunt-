import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuestionTextAlternativeComponent } from './question-text-alternative.component';

describe('QuestionTextAlternativeComponent', () => {
  let component: QuestionTextAlternativeComponent;
  let fixture: ComponentFixture<QuestionTextAlternativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionTextAlternativeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionTextAlternativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
