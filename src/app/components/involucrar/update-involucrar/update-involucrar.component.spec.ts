import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInvolucrarComponent } from './update-involucrar.component';

describe('UpdateInvolucrarComponent', () => {
  let component: UpdateInvolucrarComponent;
  let fixture: ComponentFixture<UpdateInvolucrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateInvolucrarComponent]
    });
    fixture = TestBed.createComponent(UpdateInvolucrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
