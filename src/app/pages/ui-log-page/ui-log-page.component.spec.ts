import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiLogPageComponent } from './ui-log-page.component';

describe('UiLogPageComponent', () => {
  let component: UiLogPageComponent;
  let fixture: ComponentFixture<UiLogPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiLogPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiLogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
