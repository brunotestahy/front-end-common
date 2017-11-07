import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHeaderPageComponent } from './search-header-page.component';

describe('SearchHeaderPageComponent', () => {
  let component: SearchHeaderPageComponent;
  let fixture: ComponentFixture<SearchHeaderPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchHeaderPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHeaderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
