import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveChangesButtonPageComponent } from './save-changes-button-page.component';

describe('SaveChangesButtonPageComponent', () => {
  let component: SaveChangesButtonPageComponent;
  let fixture: ComponentFixture<SaveChangesButtonPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveChangesButtonPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveChangesButtonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
