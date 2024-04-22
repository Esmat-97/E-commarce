import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddusersPage } from './addusers.page';

describe('AddusersPage', () => {
  let component: AddusersPage;
  let fixture: ComponentFixture<AddusersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddusersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
