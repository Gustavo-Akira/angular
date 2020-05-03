import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColecoeshomeComponent } from './colecoeshome.component';

describe('ColecoeshomeComponent', () => {
  let component: ColecoeshomeComponent;
  let fixture: ComponentFixture<ColecoeshomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColecoeshomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColecoeshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
