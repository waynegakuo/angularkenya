import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NglibComponent } from './nglib.component';

describe('NglibComponent', () => {
  let component: NglibComponent;
  let fixture: ComponentFixture<NglibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NglibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NglibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
