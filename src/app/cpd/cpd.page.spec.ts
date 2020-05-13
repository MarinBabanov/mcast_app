import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CPDPage } from './cpd.page';

describe('CPDPage', () => {
  let component: CPDPage;
  let fixture: ComponentFixture<CPDPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CPDPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CPDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
