import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetalhesComponent } from './admin-detalhes.component';

describe('AdminDetalhesComponent', () => {
  let component: AdminDetalhesComponent;
  let fixture: ComponentFixture<AdminDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
