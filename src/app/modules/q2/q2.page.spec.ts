import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Q2Page } from './q2.page';

describe('Q2Page', () => {
  let component: Q2Page;
  let fixture: ComponentFixture<Q2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Q2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
