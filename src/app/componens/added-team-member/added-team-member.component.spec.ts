import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedTeamMemberComponent } from './added-team-member.component';

describe('AddedTeamMemberComponent', () => {
  let component: AddedTeamMemberComponent;
  let fixture: ComponentFixture<AddedTeamMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddedTeamMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedTeamMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
