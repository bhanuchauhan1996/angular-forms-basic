import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingFornComponent } from './user-setting-forn.component';

describe('UserSettingFornComponent', () => {
  let component: UserSettingFornComponent;
  let fixture: ComponentFixture<UserSettingFornComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSettingFornComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSettingFornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
