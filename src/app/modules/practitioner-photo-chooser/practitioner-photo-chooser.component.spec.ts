import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PractitionerPhotoChooserComponent } from './practitioner-photo-chooser.component';

describe('PractitionerPhotoChooserComponent', () => {
  let component: PractitionerPhotoChooserComponent;
  let fixture: ComponentFixture<PractitionerPhotoChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PractitionerPhotoChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PractitionerPhotoChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
