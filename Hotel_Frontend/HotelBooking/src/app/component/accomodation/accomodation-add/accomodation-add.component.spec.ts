import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodationAddComponent } from './accomodation-add.component';

describe('AccomodationAddComponent', () => {
  let component: AccomodationAddComponent;
  let fixture: ComponentFixture<AccomodationAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccomodationAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccomodationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
