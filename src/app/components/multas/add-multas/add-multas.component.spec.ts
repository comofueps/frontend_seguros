import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMultasComponent } from './add-multas.component';

describe('AddMultasComponent', () => {
  let component: AddMultasComponent;
  let fixture: ComponentFixture<AddMultasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMultasComponent]
    });
    fixture = TestBed.createComponent(AddMultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
