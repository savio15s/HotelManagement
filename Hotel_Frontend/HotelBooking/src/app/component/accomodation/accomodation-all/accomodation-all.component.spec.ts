import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodationAllComponent } from './accomodation-all.component';

describe('AccomodationAllComponent', () => {
  let component: AccomodationAllComponent;
  let fixture: ComponentFixture<AccomodationAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccomodationAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccomodationAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
