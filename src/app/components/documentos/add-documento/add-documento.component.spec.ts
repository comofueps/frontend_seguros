import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDocumentoComponent } from './add-documento.component';

describe('AddDocumentoComponent', () => {
  let component: AddDocumentoComponent;
  let fixture: ComponentFixture<AddDocumentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDocumentoComponent]
    });
    fixture = TestBed.createComponent(AddDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
