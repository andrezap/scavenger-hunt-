import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Q13Page } from './q13.page';

describe('Q13Page', () => {
  let component: Q13Page;
  let fixture: ComponentFixture<Q13Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q13Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Q13Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
