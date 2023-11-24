import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVehiculoComponent } from './delete-vehiculo.component';

describe('DeleteVehiculoComponent', () => {
  let component: DeleteVehiculoComponent;
  let fixture: ComponentFixture<DeleteVehiculoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteVehiculoComponent]
    });
    fixture = TestBed.createComponent(DeleteVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
