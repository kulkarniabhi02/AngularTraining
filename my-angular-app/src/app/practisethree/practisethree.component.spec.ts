import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractisethreeComponent } from './practisethree.component';

describe('PractisethreeComponent', () => {
  let component: PractisethreeComponent;
  let fixture: ComponentFixture<PractisethreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PractisethreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PractisethreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
