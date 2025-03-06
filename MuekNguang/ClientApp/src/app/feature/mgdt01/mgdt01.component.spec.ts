import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mgdt01Component } from './mgdt01.component';

describe('Mgdt01Component', () => {
  let component: Mgdt01Component;
  let fixture: ComponentFixture<Mgdt01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mgdt01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mgdt01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
