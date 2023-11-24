import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteInvolucrarComponent } from './delete-involucrar.component';

describe('DeleteInvolucrarComponent', () => {
  let component: DeleteInvolucrarComponent;
  let fixture: ComponentFixture<DeleteInvolucrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteInvolucrarComponent]
    });
    fixture = TestBed.createComponent(DeleteInvolucrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
