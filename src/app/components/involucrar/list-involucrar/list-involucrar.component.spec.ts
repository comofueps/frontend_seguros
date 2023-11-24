import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInvolucrarComponent } from './list-involucrar.component';

describe('ListInvolucrarComponent', () => {
  let component: ListInvolucrarComponent;
  let fixture: ComponentFixture<ListInvolucrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListInvolucrarComponent]
    });
    fixture = TestBed.createComponent(ListInvolucrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
