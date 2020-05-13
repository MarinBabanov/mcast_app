import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IETPage } from './iet.page';

describe('IETPage', () => {
  let component: IETPage;
  let fixture: ComponentFixture<IETPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IETPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IETPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
