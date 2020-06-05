import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenericCourseDetailPage } from './generic-course-detail.page';

describe('GenericCourseDetailPage', () => {
  let component: GenericCourseDetailPage;
  let fixture: ComponentFixture<GenericCourseDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericCourseDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GenericCourseDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
