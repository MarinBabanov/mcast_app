import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IasCourseDetailPage } from './ias-course-detail.page';

describe('IasCourseDetailPage', () => {
  let component: IasCourseDetailPage;
  let fixture: ComponentFixture<IasCourseDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IasCourseDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IasCourseDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
