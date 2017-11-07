import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PractitionerThumbnailPageComponent } from './practitioner-thumbnail-page.component';

describe('PractitionerThumbnailPageComponent', () => {
  let component: PractitionerThumbnailPageComponent;
  let fixture: ComponentFixture<PractitionerThumbnailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PractitionerThumbnailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PractitionerThumbnailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
