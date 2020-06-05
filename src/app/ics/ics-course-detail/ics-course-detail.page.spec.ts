import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IcsCourseDetailPage } from './ics-course-detail.page';

describe('IcsCourseDetailPage', () => {
  let component: IcsCourseDetailPage;
  let fixture: ComponentFixture<IcsCourseDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcsCourseDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcsCourseDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
