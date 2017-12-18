import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveChangesButtonComponent } from './save-changes-button.component';

describe('SearchHeaderComponent', () => {
  let component: SaveChangesButtonComponent;
  let fixture: ComponentFixture<SaveChangesButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveChangesButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveChangesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
