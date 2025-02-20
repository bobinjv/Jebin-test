import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMgmtComponent } from './student-mgmt.component';

describe('StudentMgmtComponent', () => {
  let component: StudentMgmtComponent;
  let fixture: ComponentFixture<StudentMgmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentMgmtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
