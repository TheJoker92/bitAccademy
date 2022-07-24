import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedLinkComponent } from './added-link.component';

describe('AddedLinkComponent', () => {
  let component: AddedLinkComponent;
  let fixture: ComponentFixture<AddedLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddedLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
