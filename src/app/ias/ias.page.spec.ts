import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IASPage } from './ias.page';

describe('IASPage', () => {
  let component: IASPage;
  let fixture: ComponentFixture<IASPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IASPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IASPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
