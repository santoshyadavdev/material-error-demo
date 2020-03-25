import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansiondemoComponent } from './expansiondemo.component';

describe('ExpansiondemoComponent', () => {
  let component: ExpansiondemoComponent;
  let fixture: ComponentFixture<ExpansiondemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpansiondemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansiondemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
