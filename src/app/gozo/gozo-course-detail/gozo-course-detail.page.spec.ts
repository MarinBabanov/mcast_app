import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GozoCourseDetailPage } from './gozo-course-detail.page';

describe('GozoCourseDetailPage', () => {
  let component: GozoCourseDetailPage;
  let fixture: ComponentFixture<GozoCourseDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GozoCourseDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GozoCourseDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
