import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IBMCPage } from './ibmc.page';

describe('IBMCPage', () => {
  let component: IBMCPage;
  let fixture: ComponentFixture<IBMCPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IBMCPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IBMCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
