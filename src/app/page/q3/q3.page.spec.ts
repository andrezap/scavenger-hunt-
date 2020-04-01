import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Q3Page } from './q3.page';

describe('Q3Page', () => {
  let component: Q3Page;
  let fixture: ComponentFixture<Q3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Q3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
