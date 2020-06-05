import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IetCourseDetailPage } from './iet-course-detail.page';

describe('IetCourseDetailPage', () => {
  let component: IetCourseDetailPage;
  let fixture: ComponentFixture<IetCourseDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IetCourseDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IetCourseDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
