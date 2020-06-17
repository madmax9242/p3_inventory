import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewComponent } from './adminview.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AdminviewComponent', () => {
  let component: AdminviewComponent;
  let fixture: ComponentFixture<AdminviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminviewComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

    
});
