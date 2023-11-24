import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMultasComponent } from './update-multas.component';

describe('UpdateMultasComponent', () => {
  let component: UpdateMultasComponent;
  let fixture: ComponentFixture<UpdateMultasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateMultasComponent]
    });
    fixture = TestBed.createComponent(UpdateMultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
