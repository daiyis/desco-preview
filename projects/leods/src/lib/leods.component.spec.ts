import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeodsComponent } from './leods.component';

describe('LeodsComponent', () => {
  let component: LeodsComponent;
  let fixture: ComponentFixture<LeodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeodsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
