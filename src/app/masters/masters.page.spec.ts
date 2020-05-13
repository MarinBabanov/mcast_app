import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MASTERSPage } from './masters.page';

describe('MASTERSPage', () => {
  let component: MASTERSPage;
  let fixture: ComponentFixture<MASTERSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MASTERSPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MASTERSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
