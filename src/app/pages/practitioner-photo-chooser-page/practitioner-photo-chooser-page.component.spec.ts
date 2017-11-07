import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PractitionerPhotoChooserPageComponent } from './practitioner-photo-chooser-page.component';

describe('PractitionerPhotoChooserPageComponent', () => {
  let component: PractitionerPhotoChooserPageComponent;
  let fixture: ComponentFixture<PractitionerPhotoChooserPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PractitionerPhotoChooserPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PractitionerPhotoChooserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
