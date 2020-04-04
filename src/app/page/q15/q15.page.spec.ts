import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Q15Page } from './q15.page';

describe('Q15Page', () => {
  let component: Q15Page;
  let fixture: ComponentFixture<Q15Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q15Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Q15Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
