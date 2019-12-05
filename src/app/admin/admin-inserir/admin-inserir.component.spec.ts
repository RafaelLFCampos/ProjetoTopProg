import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInserirComponent } from './admin-inserir.component';

describe('AdminInserirComponent', () => {
  let component: AdminInserirComponent;
  let fixture: ComponentFixture<AdminInserirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInserirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInserirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
