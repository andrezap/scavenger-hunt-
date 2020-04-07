import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Q21Page } from './q21.page';

describe('Q21Page', () => {
  let component: Q21Page;
  let fixture: ComponentFixture<Q21Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q21Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Q21Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
