import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModosHomeComponent } from './modos-home.component';

describe('ModosHomeComponent', () => {
  let component: ModosHomeComponent;
  let fixture: ComponentFixture<ModosHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModosHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
