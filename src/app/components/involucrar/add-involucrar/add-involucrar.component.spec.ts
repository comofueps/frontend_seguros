import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInvolucrarComponent } from './add-involucrar.component';

describe('AddInvolucrarComponent', () => {
  let component: AddInvolucrarComponent;
  let fixture: ComponentFixture<AddInvolucrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddInvolucrarComponent]
    });
    fixture = TestBed.createComponent(AddInvolucrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
