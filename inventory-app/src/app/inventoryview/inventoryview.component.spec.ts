import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryviewComponent } from './inventoryview.component';

describe('InventoryviewComponent', () => {
  let component: InventoryviewComponent;
  let fixture: ComponentFixture<InventoryviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
