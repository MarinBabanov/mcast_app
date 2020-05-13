import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ICAPage } from './ica.page';

describe('ICAPage', () => {
  let component: ICAPage;
  let fixture: ComponentFixture<ICAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ICAPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ICAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
