import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestvideosComponent } from './latestvideos.component';

describe('LatestvideosComponent', () => {
  let component: LatestvideosComponent;
  let fixture: ComponentFixture<LatestvideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestvideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
