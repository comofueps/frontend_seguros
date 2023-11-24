import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMultasComponent } from './delete-multas.component';

describe('DeleteMultasComponent', () => {
  let component: DeleteMultasComponent;
  let fixture: ComponentFixture<DeleteMultasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteMultasComponent]
    });
    fixture = TestBed.createComponent(DeleteMultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
