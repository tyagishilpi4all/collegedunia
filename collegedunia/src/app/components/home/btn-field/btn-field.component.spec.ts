import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnFieldComponent } from './btn-field.component';

describe('BtnFieldComponent', () => {
  let component: BtnFieldComponent;
  let fixture: ComponentFixture<BtnFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
