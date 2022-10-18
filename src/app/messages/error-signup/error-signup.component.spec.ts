import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorSignupComponent } from './error-signup.component';

describe('ErrorSignupComponent', () => {
  let component: ErrorSignupComponent;
  let fixture: ComponentFixture<ErrorSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
