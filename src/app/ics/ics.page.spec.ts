import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ICSPage } from './ics.page';

describe('ICSPage', () => {
  let component: ICSPage;
  let fixture: ComponentFixture<ICSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ICSPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ICSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
