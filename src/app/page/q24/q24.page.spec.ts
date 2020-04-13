import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Q24Page } from './q24.page';

describe('Q24Page', () => {
  let component: Q24Page;
  let fixture: ComponentFixture<Q24Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q24Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Q24Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
