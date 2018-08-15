import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBlackboxComponent } from './select-blackbox.component';

describe('SelectBlackboxComponent', () => {
  let component: SelectBlackboxComponent;
  let fixture: ComponentFixture<SelectBlackboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectBlackboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBlackboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
