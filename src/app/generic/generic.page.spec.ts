import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GENERICPage } from './generic.page';

describe('GENERICPage', () => {
  let component: GENERICPage;
  let fixture: ComponentFixture<GENERICPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GENERICPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GENERICPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
