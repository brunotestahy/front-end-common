import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiLogComponent } from './ui-log.component';

describe('UiLogComponent', () => {
  let component: UiLogComponent;
  let fixture: ComponentFixture<UiLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
