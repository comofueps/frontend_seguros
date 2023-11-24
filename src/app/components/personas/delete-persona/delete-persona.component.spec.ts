import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePersonaComponent } from './delete-persona.component';

describe('DeletePersonaComponent', () => {
  let component: DeletePersonaComponent;
  let fixture: ComponentFixture<DeletePersonaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletePersonaComponent]
    });
    fixture = TestBed.createComponent(DeletePersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
