import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementosHomeComponent } from './elementos-home.component';

describe('ElementosHomeComponent', () => {
  let component: ElementosHomeComponent;
  let fixture: ComponentFixture<ElementosHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementosHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
