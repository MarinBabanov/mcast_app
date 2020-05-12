import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IAS01Page } from './ias01.page';

describe('IAS01Page', () => {
  let component: IAS01Page;
  let fixture: ComponentFixture<IAS01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IAS01Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IAS01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
