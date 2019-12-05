import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMensagemComponent } from './user-mensagem.component';

describe('UserMensagemComponent', () => {
  let component: UserMensagemComponent;
  let fixture: ComponentFixture<UserMensagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMensagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMensagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
