import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDocumentoComponent } from './update-documento.component';

describe('UpdateDocumentoComponent', () => {
  let component: UpdateDocumentoComponent;
  let fixture: ComponentFixture<UpdateDocumentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDocumentoComponent]
    });
    fixture = TestBed.createComponent(UpdateDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
