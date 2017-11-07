import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PractitionerThumbnailComponent } from './practitioner-thumbnail.component';

describe('PractitionerThumbnailComponent', () => {
  let component: PractitionerThumbnailComponent;
  let fixture: ComponentFixture<PractitionerThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PractitionerThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PractitionerThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
