import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstituteCoursesPage } from './institute-courses.page';

describe('InstituteCoursesPage', () => {
  let component: InstituteCoursesPage;
  let fixture: ComponentFixture<InstituteCoursesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteCoursesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstituteCoursesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
