import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GOZOPage } from './gozo.page';

describe('GOZOPage', () => {
  let component: GOZOPage;
  let fixture: ComponentFixture<GOZOPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GOZOPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GOZOPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
