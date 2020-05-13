import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IICTPage } from './iict.page';

describe('IICTPage', () => {
  let component: IICTPage;
  let fixture: ComponentFixture<IICTPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IICTPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IICTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
