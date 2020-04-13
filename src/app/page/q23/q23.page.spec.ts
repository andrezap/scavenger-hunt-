import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Q23Page } from './q23.page';

describe('Q23Page', () => {
  let component: Q23Page;
  let fixture: ComponentFixture<Q23Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q23Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Q23Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
