import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddmessagesPage } from './addmessages.page';

describe('AddmessagesPage', () => {
  let component: AddmessagesPage;
  let fixture: ComponentFixture<AddmessagesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddmessagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
