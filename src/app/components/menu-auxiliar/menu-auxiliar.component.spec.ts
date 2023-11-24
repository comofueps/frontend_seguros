import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAuxiliarComponent } from './menu-auxiliar.component';

describe('MenuAuxiliarComponent', () => {
  let component: MenuAuxiliarComponent;
  let fixture: ComponentFixture<MenuAuxiliarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuAuxiliarComponent]
    });
    fixture = TestBed.createComponent(MenuAuxiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
