import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Q7Page } from './q7.page';

describe('Q7Page', () => {
  let component: Q7Page;
  let fixture: ComponentFixture<Q7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Q7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
