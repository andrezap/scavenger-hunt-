import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Q22Page } from './q22.page';

describe('Q22Page', () => {
  let component: Q22Page;
  let fixture: ComponentFixture<Q22Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q22Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Q22Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
