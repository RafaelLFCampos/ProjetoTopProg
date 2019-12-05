import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDadosComponent } from './user-dados.component';

describe('UserDadosComponent', () => {
  let component: UserDadosComponent;
  let fixture: ComponentFixture<UserDadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
