import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Q12Page } from './q12.page';

describe('Q12Page', () => {
  let component: Q12Page;
  let fixture: ComponentFixture<Q12Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q12Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Q12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
