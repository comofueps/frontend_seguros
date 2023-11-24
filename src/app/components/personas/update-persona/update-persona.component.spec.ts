import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePersonaComponent } from './update-persona.component';

describe('UpdatePersonaComponent', () => {
  let component: UpdatePersonaComponent;
  let fixture: ComponentFixture<UpdatePersonaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePersonaComponent]
    });
    fixture = TestBed.createComponent(UpdatePersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
