import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDocumentoComponent } from './list-documento.component';

describe('ListDocumentoComponent', () => {
  let component: ListDocumentoComponent;
  let fixture: ComponentFixture<ListDocumentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDocumentoComponent]
    });
    fixture = TestBed.createComponent(ListDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
